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

export default function EditTaskScreen({ navigation, route }) {
  const { task, tasks } = route.params;

  const [taskName, setTaskName] = useState(task.name);
  const [courseName, setCourseName] = useState(task.course || '');
  const [dueDate, setDueDate] = useState(task.dueDate || '');

  const handleSave = async () => {
    if (!taskName.trim()) {
      Alert.alert('Missing Field', 'Task name cannot be empty.');
      return;
    }

    const updated = tasks.map((t) =>
      t.id === task.id
        ? { ...t, name: taskName.trim(), course: courseName.trim(), dueDate: dueDate.trim() }
        : t
    );

    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updated));
      navigation.navigate('TaskList');
    } catch (e) {
      Alert.alert('Error', 'Could not save changes.');
    }
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Task',
      `Are you sure you want to delete "${task.name}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const updated = tasks.filter((t) => t.id !== task.id);
            try {
              await AsyncStorage.setItem('tasks', JSON.stringify(updated));
              navigation.navigate('TaskList');
            } catch (e) {
              Alert.alert('Error', 'Could not delete task.');
            }
          },
        },
      ]
    );
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
          <Text style={styles.pageTitle}>Edit Task</Text>

          <View style={styles.form}>
            {/* Task Name */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Task Name *</Text>
              <TextInput
                style={styles.input}
                value={taskName}
                onChangeText={setTaskName}
                placeholderTextColor="#4a5568"
                returnKeyType="next"
              />
            </View>

            {/* Course Name */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Course Name</Text>
              <TextInput
                style={styles.input}
                value={courseName}
                onChangeText={setCourseName}
                placeholderTextColor="#4a5568"
                returnKeyType="next"
              />
            </View>

            {/* Due Date */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Due Date</Text>
              <TextInput
                style={styles.input}
                value={dueDate}
                onChangeText={setDueDate}
                placeholderTextColor="#4a5568"
                placeholder="YYYY-MM-DD"
                returnKeyType="done"
                onSubmitEditing={handleSave}
              />
              <Text style={styles.hint}>Format: YYYY-MM-DD</Text>
            </View>

            {/* Save */}
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSave}
              activeOpacity={0.85}
            >
              <Text style={styles.saveButtonText}>Save Changes ✓</Text>
            </TouchableOpacity>

            {/* Delete */}
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleDelete}
              activeOpacity={0.85}
            >
              <Text style={styles.deleteButtonText}>Delete Task 🗑</Text>
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
  saveButton: {
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
  saveButtonText: {
    color: '#1a1a2e',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  deleteButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fc8181',
  },
  deleteButtonText: { color: '#fc8181', fontSize: 16, fontWeight: '700' },
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
