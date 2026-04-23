import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  // Reload tasks every time screen is focused
  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, [])
  );

  const loadTasks = async () => {
    try {
      const stored = await AsyncStorage.getItem('tasks');
      if (stored) setTasks(JSON.parse(stored));
      else setTasks([]);
    } catch (e) {
      console.error('Failed to load tasks', e);
    }
  };

  const toggleComplete = async (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
    await AsyncStorage.setItem('tasks', JSON.stringify(updated));
  };

  const isOverdue = (dueDateStr) => {
    if (!dueDateStr) return false;
    const due = new Date(dueDateStr);
    return due < new Date() && !isNaN(due);
  };

  const renderTask = ({ item }) => (
    <View style={[styles.taskCard, item.completed && styles.taskCardDone]}>
      <View style={styles.taskInfo}>
        <Text
          style={[styles.taskName, item.completed && styles.taskNameDone]}
          numberOfLines={1}
        >
          {item.name}
        </Text>
        {item.course ? (
          <Text style={styles.taskCourse}>{item.course}</Text>
        ) : null}
        <Text
          style={[
            styles.taskDue,
            isOverdue(item.dueDate) && !item.completed && styles.taskDueOverdue,
          ]}
        >
          {item.dueDate
            ? `Due: ${new Date(item.dueDate).toLocaleDateString()}`
            : 'No due date'}
        </Text>
      </View>

      <View style={styles.taskActions}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => navigation.navigate('EditTask', { task: item, tasks })}
        >
          <Text style={styles.editBtnText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.checkbox, item.completed && styles.checkboxDone]}
          onPress={() => toggleComplete(item.id)}
        >
          {item.completed && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      {/* Stats bar */}
      <View style={styles.statsBar}>
        <Text style={styles.statsText}>
          {tasks.length - completedCount} remaining · {completedCount} done
        </Text>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('AddTask', { tasks })}
        >
          <Text style={styles.addBtnText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      {/* Task list label */}
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>Task List:</Text>
      </View>

      {tasks.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>📋</Text>
          <Text style={styles.emptyText}>No tasks yet!</Text>
          <Text style={styles.emptySubText}>Tap "+ Add" to create your first task.</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderTask}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Bottom Nav Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navItem, styles.navItemActive]}
          onPress={() => navigation.navigate('TaskList')}
        >
          <Text style={styles.navIcon}>✅</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('AddTask', { tasks })}
        >
          <Text style={styles.navIcon}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.homeIndicator} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  statsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#16213e',
    borderBottomWidth: 1,
    borderBottomColor: '#2d3748',
  },
  statsText: { color: '#a0aec0', fontSize: 14 },
  addBtn: {
    backgroundColor: '#e8c547',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addBtnText: { color: '#1a1a2e', fontWeight: '700', fontSize: 14 },
  listHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  listHeaderText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: 0.3,
  },
  list: { paddingHorizontal: 20, paddingBottom: 20 },
  taskCard: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 3,
    borderLeftColor: '#e8c547',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  taskCardDone: {
    borderLeftColor: '#48bb78',
    opacity: 0.7,
  },
  taskInfo: { flex: 1, marginRight: 12 },
  taskName: { fontSize: 16, fontWeight: '600', color: '#ffffff', marginBottom: 3 },
  taskNameDone: { textDecorationLine: 'line-through', color: '#718096' },
  taskCourse: { fontSize: 12, color: '#e8c547', marginBottom: 3 },
  taskDue: { fontSize: 12, color: '#a0aec0' },
  taskDueOverdue: { color: '#fc8181' },
  taskActions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  editBtn: {
    backgroundColor: '#2d3748',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4a5568',
  },
  editBtnText: { color: '#e2e8f0', fontSize: 13, fontWeight: '600' },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#4a5568',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: { backgroundColor: '#48bb78', borderColor: '#48bb78' },
  checkmark: { color: '#fff', fontSize: 14, fontWeight: '700' },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  emptyIcon: { fontSize: 60, marginBottom: 16 },
  emptyText: { fontSize: 22, fontWeight: '700', color: '#ffffff', marginBottom: 8 },
  emptySubText: { fontSize: 15, color: '#718096' },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#16213e',
    borderTopWidth: 1,
    borderTopColor: '#2d3748',
    paddingVertical: 12,
  },
  navItem: { flex: 1, alignItems: 'center', paddingVertical: 4 },
  navItemActive: {
    borderTopWidth: 2,
    borderTopColor: '#e8c547',
    marginTop: -1,
  },
  navIcon: { fontSize: 22 },
  homeIndicator: {
    width: 130,
    height: 5,
    backgroundColor: '#4a5568',
    borderRadius: 3,
    alignSelf: 'center',
    marginVertical: 8,
  },
});
