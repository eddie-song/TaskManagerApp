import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, SafeAreaView, SectionList } from 'react-native';
import { router } from 'expo-router';

 // Home screen for the task manager app.
 // Includes functions forask creation, completion toggling, and deletion.

// Structure for tasks includnig task ID, name, descrption, and completion status
interface Task {
  id: string;
  text: string;
  completed: boolean;
  description: string;
}

// Home screen component
const HomeScreen = () => {
  // State variables including list of tasks, new task name, and new task description
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          text: newTask.trim(),
          completed: false,
          description: newDescription.trim(),
        },
      ]);
      setNewTask('');
      setNewDescription('');
    }
  };

  // Function to toggle task completion
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Stand in function to handle log out and return to login page
  const handleLogout = () => {
    router.replace('/');
  };

  // Incomplete and completed task storage
  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  // SectionList data structure
  const sections = [
    {
      title: 'Incomplete Tasks',
      data: incompleteTasks,
    },
    {
      title: 'Completed Tasks',
      data: completedTasks,
    },
  ];

  // Render function for each task
  const renderTask = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity
        style={styles.taskContent}
        onPress={() => toggleTask(item.id)}
      >
        <View style={[styles.checkbox, item.completed && styles.checked]} />
        <View style={styles.taskDetails}>
          <Text
            style={[
              styles.taskText,
              item.completed && styles.completedTask,
            ]}
          >
            {item.text}
          </Text>
          {item.description && (
            <Text style={styles.descriptionText}>{item.description}</Text>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => deleteTask(item.id)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>×</Text>
      </TouchableOpacity>
    </View>
  );

  // Render function for section headers
  const renderSectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Headers for the home screen */}
        <View style={styles.header}>
          <Text style={styles.title}>My Tasks</Text>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        {/* Input for new task name and description */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            value={newTask}
            onChangeText={setNewTask}
            onSubmitEditing={addTask}
            returnKeyType="done"
          />
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Description"
            value={newDescription}
            onChangeText={setNewDescription}
            multiline={true}
            numberOfLines={4}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {/* Task list separated by completed and incomplete tasks */}
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={renderTask}
          renderSectionHeader={renderSectionHeader}
          style={styles.list}
          stickySectionHeadersEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    fontFamily: Platform.select({ ios: 'SF Pro Display', android: 'sans-serif' }),
  },
  logoutButton: {
    padding: 8,
  },
  logoutText: {
    color: '#007AFF',
    fontSize: 17,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 17,
    backgroundColor: '#F2F2F7',
    fontFamily: Platform.select({ ios: 'SF Pro Text', android: 'sans-serif' }),
  },
  descriptionInput: {
    height: 80,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  addButton: {
    backgroundColor: '#007AFF',
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  list: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: '#F2F2F7',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#8E8E93',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontFamily: Platform.select({ ios: 'SF Pro Text', android: 'sans-serif' }),
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginRight: 12,
  },
  checked: {
    backgroundColor: '#007AFF',
  },
  taskDetails: {
    flex: 1,
    marginLeft: 12,
  },
  taskText: {
    fontSize: 17,
    color: '#000',
    fontFamily: Platform.select({ ios: 'SF Pro Text', android: 'sans-serif' }),
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#8E8E93',
  },
  deleteButton: {
    padding: 8,
  },
  deleteButtonText: {
    color: '#FF3B30',
    fontSize: 24,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 14,
    color: '#8E8E93',
    fontFamily: Platform.select({ ios: 'SF Pro Text', android: 'sans-serif' }),
    lineHeight: 20,
    marginTop: 4,
  },
});

export default HomeScreen; 