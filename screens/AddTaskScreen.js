import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddTaskScreen({ navigation, route }) {
  const existingTasks = route.params?.tasks || [];

  const [taskName, setTaskName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = async () => {
    if (!taskName.trim()) {
      Alert.alert('Missing Field', 'Please enter a task name.');
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      name: taskName.trim(),
      course: courseName.trim(),
      dueDate: dueDate.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    const updated = [...existingTasks, newTask];

    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updated));
      navigation.navigate('TaskList');
    } catch (e) {
      Alert.alert('Error', 'Could not save task. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.pageTitle}>Add Task</Text>

          <View style={styles.form}>
            {/* Task Name */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Task Name *</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Math Homework"
                placeholderTextColor="#4a5568"
                value={taskName}
                onChangeText={setTaskName}
                returnKeyType="next"
              />
            </View>

            {/* Course Name */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Course Name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Calculus 101"
                placeholderTextColor="#4a5568"
                value={courseName}
                onChangeText={setCourseName}
                returnKeyType="next"
              />
            </View>

            {/* Due Date */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Due Date</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. 2025-05-15"
                placeholderTextColor="#4a5568"
                value={dueDate}
                onChangeText={setDueDate}
                returnKeyType="done"
                onSubmitEditing={handleAddTask}
              />
              <Text style={styles.hint}>Format: YYYY-MM-DD</Text>
            </View>

            {/* Submit */}
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddTask}
              activeOpacity={0.85}
            >
              <Text style={styles.addButtonText}>Add Task ✓</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.homeIndicator} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  scroll: { flexGrow: 1, paddingHorizontal: 24, paddingVertical: 24 },
  pageTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 28,
  },
  form: { gap: 20 },
  fieldGroup: { gap: 6 },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a0aec0',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  input: {
    backgroundColor: '#16213e',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: '#ffffff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#2d3748',
  },
  hint: { fontSize: 12, color: '#4a5568', marginTop: 2 },
  addButton: {
    backgroundColor: '#e8c547',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 12,
    shadowColor: '#e8c547',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  addButtonText: {
    color: '#1a1a2e',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  cancelButton: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2d3748',
  },
  cancelButtonText: { color: '#718096', fontSize: 16, fontWeight: '600' },
  homeIndicator: {
    width: 130,
    height: 5,
    backgroundColor: '#4a5568',
    borderRadius: 3,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
