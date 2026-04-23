
Claude finished the response
You said: code this app so i can put it into github, code it out and walk me thru on how to put it in github
Notes+ (2).pdf
pdf

1776914742754_{ABB84DFA-D009-46BB-8567-691B3B394727}.png
code this app so i can put it into github, code it out and walk me thru on how to put it in github

10:25 PM
Claude responded: I can see your wireframes clearly — 4 screens: Home, Task List, Add Task, and Edit Task.

Architected modular React Native app structure for GitHub deployment
Architected modular React Native app structure for GitHub deployment
I can see your wireframes clearly — 4 screens: Home, Task List, Add Task, and Edit Task. I'll build the full React Native app now!


Created 9 files, ran 2 commands, read a file
Created 9 files, ran 2 commands, read a file
All 8 files are ready! Here's everything you need to know:

📁 What was built
Exactly matching your wireframes — 4 screens, dark theme with gold accents:

HomeScreen — Welcome card + "View Tasks in List" button
TaskListScreen — List of tasks with due dates, Edit buttons, checkboxes to mark done, bottom nav bar
AddTaskScreen — Form: Task Name, Course Name, Due Date + "Add Task"
EditTaskScreen — Pre-filled form with "Save Changes" + "Delete Task"
Tasks are saved locally using AsyncStorage so they persist between sessions.

🚀 How to put it on GitHub
Step 1 — Set up your local project

bash
# Download all the files above into your project folder, then:
cd MobileAppsProject
npm install
Step 2 — Initialize git (if not already done)

bash
git init
git add .
git commit -m "Add StudyBuddy app - all screens complete"
Step 3 — Connect to your GitHub repo

bash
git remote add origin https://github.com/ManitSingh1/MobileAppsProject.git
git branch -M main
git push -u origin main
Since you already have the repo created (I can see it in your screenshot), Step 3 will push right into it. If git says the remote already exists, skip git remote add and just do git push origin main.

Step 4 — Run the app

bash
npx expo start
Scan the QR code with Expo Go on your phone and you'll see it live!


App
JS 

Homescreen
JS 

Tasklistscreen
JS 

Addtaskscreen
JS 

Edittaskscreen
JS 

Package
Code · JSON 

Readme
Document · MD 

.gitignore
GITIGNORE 
You said: this is what it looks like when i uploaded the files.
1776915405227_{2D72AFD1-4FAC-454B-8C9E-19BF0929A60E}.png
this is what it looks like when i uploaded the files. now what

10:37 PM
Claude responded: Great progress — the files are live on GitHub!

Identified file structure mismatch and planned corrective steps
Identified file structure mismatch and planned corrective steps
Great progress — the files are live on GitHub! But I notice one issue: the screen files (HomeScreen.js, TaskListScreen.js, etc.) got uploaded to the root of the repo, but App.js expects them inside a screens/ folder. You'll need to fix that first, then you can run the app.

Step 1 — Fix the folder structure on GitHub
You have two options:

Option A (easiest) — Move files on GitHub directly:

Click on HomeScreen.js in your repo
Click the ✏️ pencil (Edit) icon
In the filename field at the top, change HomeScreen.js → screens/HomeScreen.js — GitHub will auto-create the folder
Scroll down, click Commit changes
Repeat for TaskListScreen.js, AddTaskScreen.js, EditTaskScreen.js
Option B — Fix locally via terminal:

bash
# In your project folder
mkdir -p screens
mv HomeScreen.js TaskListScreen.js AddTaskScreen.js EditTaskScreen.js screens/
git add .
git commit -m "Move screen files into screens/ folder"
git push
Step 2 — Run the app on your phone
Once the structure is fixed:

bash
# In your project folder
npm install
npx expo start
Then download Expo Go from the App Store or Google Play, scan the QR code in your terminal, and your app runs live on your phone instantly — no building required.

Step 3 — Every time you make changes going forward
bash
git add .
git commit -m "describe what you changed"
git push
That's the full loop. Which option do you want to go with for fixing the folders?

You said: what buttons do i click

excerpt_from_previous_claude_message.txt
1 line

txt

what buttons do i click

10:38 PM
Claude responded: Here's exactly what to click, step by step:

Deciphered user's intent to pursue terminal-based solution pathway
Deciphered user's intent to pursue terminal-based solution pathway
Here's exactly what to click, step by step:

1. Open a terminal on your computer

Windows: Press Windows key → type cmd → click Command Prompt
Mac: Press Cmd + Space → type terminal → press Enter
2. Navigate to your project folder

Type this and press Enter (replace with wherever your folder actually is):

bash
cd Downloads/MobileAppsProject
If you're not sure where it is, type dir (Windows) or ls (Mac) to see what's in your current folder and navigate from there.

3. Run these commands one at a time, pressing Enter after each:

bash
mkdir screens
bash
move HomeScreen.js screens/
bash
move TaskListScreen.js screens/
bash
move AddTaskScreen.js screens/
bash
move EditTaskScreen.js screens/
(If on Mac, use mv instead of move)

4. Push to GitHub:

bash
git add .
git commit -m "Move screens into screens folder"
git push
5. Then run the app:

bash
npm install
npx expo start
A QR code will appear in the terminal — scan it with Expo Go on your phone and the app launches. Let me know where you get stuck!

You said: explain this

excerpt_from_previous_claude_message.txt
8 lines

txt

explain this

10:40 PM
Claude responded: Sure!

Deciphered request to simplify app installation instructions
Deciphered request to simplify app installation instructions
Sure! Here's what each piece means in plain English:

npm install

npm is a tool that downloads code packages your app needs to work
Think of it like installing apps your app depends on
It reads package.json and downloads everything listed there into a node_modules folder
You only need to do this once (or when you add new packages)
npx expo start

This starts a local development server on your computer
It basically says "hey, I want to test my app right now"
A QR code will pop up in your terminal window
Expo Go (the phone app)

Expo Go is a free app — download it from the App Store (iPhone) or Google Play (Android)
Once installed, open it and tap "Scan QR Code"
Point your camera at the QR code in your terminal
Your Study-Buddy app will open instantly on your phone
The big picture:

Your computer (runs the code) → WiFi → Expo Go on your phone (displays the app)
Your phone and computer need to be on the same WiFi network for this to work. That's the only requirement.

Whenever you edit a file and save it, the app on your phone will automatically reload with your changes — no re-scanning needed.

You said: STEP BY STEP
STEP BY STEP

10:41 PM
Claude responded: Step 1 — Download Expo Go on your phone

Deciphered request for simplified mobile app instructions
Deciphered request for simplified mobile app instructions
Step 1 — Download Expo Go on your phone
iPhone: Open App Store → search "Expo Go" → tap Get
Android: Open Play Store → search "Expo Go" → tap Install
Step 2 — Open terminal on your computer
Windows: Press Windows key → type cmd → press Enter
Mac: Press Cmd + Space → type terminal → press Enter
Step 3 — Go to your project folder
Type this and press Enter:

cd Downloads/MobileAppsProject
Step 4 — Install dependencies
Type this and press Enter:

npm install
⏳ Wait for it to finish. It will take a minute.

Step 5 — Start the app
Type this and press Enter:

npx expo start
⏳ Wait. A QR code will appear in your terminal.

Step 6 — Open on your phone
iPhone: Open your regular Camera app → point it at the QR code → tap the notification that pops up
Android: Open Expo Go → tap Scan QR Code → point at the QR code
Step 7 — Done ✅
Your Study-Buddy app should open on your phone!

If anything goes wrong, screenshot the error and show me and I'll fix it.

You said: im o nthe github website

excerpt_from_previous_claude_message.txt
3 lines

txt

im o nthe github website

10:42 PM
Claude responded: Got it!

Diagnosed user confusion about GitHub workflow, pivoted toward local setup
Diagnosed user confusion about GitHub workflow, pivoted toward local setup
Got it! GitHub is just where your code is stored — you can't run the app from the website. You need to get the code onto your computer first.

Step 1 — Copy your repo link
On your GitHub page, click the green "Code" button → click the copy icon next to the link (looks like https://github.com/ManitSingh1/MobileAppsProject.git)

Step 2 — Open terminal
Windows: Press Windows key → type cmd → press Enter
Mac: Press Cmd + Space → type terminal → press Enter
Step 3 — Download your code to your computer
Type this and press Enter:

git clone https://github.com/ManitSingh1/MobileAppsProject.git
Step 4 — Go into the folder
cd MobileAppsProject
Step 5 — Install & run
npm install
Wait for it to finish, then:

npx expo start
Step 6 — Scan the QR code with Expo Go on your phone ✅
Think of it like this:

GitHub = Google Drive (just stores the files)
Your computer = where the app actually runs
1776915912719_{F93E94E6-37FC-4175-949B-A884190233EA}.png
10:45 PM
Claude responded: This means Git is not installed on your computer.

The user prompt is empty, so I cannot determine the primary language. However, based on the thinking block alone, here is a summary: Identified missing software prerequisite on user's system
The user prompt is empty, so I cannot determine the primary language. However, based on the thinking block alone, here is a summary: Identified missing software prerequisite on user's system
This means Git is not installed on your computer. Easy fix!

Step 1 — Install Git
Go to git-scm.com/download/win
Click the download button
Open the downloaded file and click Next through everything (default settings are fine)
Click Install at the end
Step 2 — Close your terminal and reopen it
Close the black window completely
Press Windows key → type cmd → press Enter
(This is important — it won't work if you use the old window)
Step 3 — Try the command again
git clone https://github.com/ManitSingh1/MobileAppsProject.git
It should work now. Show me a screenshot if you get another error!

You said: is there no simpler way
is there no simpler way

10:46 PM
Claude responded: Yes!
Yes! Just download the files directly from GitHub — no Git needed.

Step 1 — Go to your GitHub repo
Click the green "Code" button → click "Download ZIP"

Step 2 — Unzip it
Find the ZIP in your Downloads folder → right click it → click "Extract All" → click Extract

Step 3 — Open terminal in that folder
Open the extracted folder → click on the address bar at the top → type cmd → press Enter

A terminal will open already inside that folder — no cd needed!

Step 4 — Run it
npm install
then:

npx expo start
That's it! No Git required. Screenshot any errors and I'll help.

You said: no no, like as in easier way to run it
no no, like as in easier way to run it

10:46 PM
Claude responded: Yes!
Yes! Use Snack — it's Expo in your browser, no installing anything.

Step 1 — Go to
snack.expo.dev

Step 2 — Delete the default code
On the left side you'll see files — delete everything that's there

Step 3 — Paste your code
Create the same files we made and paste the code in:

App.js
screens/HomeScreen.js
screens/TaskListScreen.js
screens/AddTaskScreen.js
screens/EditTaskScreen.js
Step 4 — Run it
On the right side you'll see a phone preview — it runs automatically
Or scan the QR code on the right with Expo Go on your phone
Why this is easier
✅ No terminal
✅ No npm install
✅ No downloading anything
✅ Works right in your browser
✅ Still runs on your real phone via Expo Go
Want me to set up the Snack for you with all the code pre-loaded?

1776916198291_{6C188854-B3EE-4AB4-BF2F-37AE59706D0C}.png
10:50 PM
Claude responded: Snack doesn't support @react-navigation/native well.
Snack doesn't support @react-navigation/native well. I'll rewrite the app without React Navigation so it works perfectly in Snack.


Created a file, read a file
Created a file, read a file
I rewrote the entire app into one single file — no React Navigation needed. Here's what to do:

Step 1 — Go to snack.expo.dev
Step 2 — Click on App.js on the left side
Step 3 — Select all the code and delete it
Press Ctrl+A then Delete

Step 4 — Paste the new code
Download the App.js file above → open it → copy everything → paste it into Snack

Step 5 — It should run automatically ✅
The preview on the right will show your app. All 4 screens work, everything is in one file now so there are no import errors.


App
JS 




Claude is AI and can make mistakes. Please double-check responses.
App · JS
Copy

import React, { useState, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, FlatList, TextInput,
  StyleSheet, SafeAreaView, StatusBar, Alert,
  KeyboardAvoidingView, Platform, ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
// ─── HOME SCREEN ────────────────────────────────────────────────────────────
function HomeScreen({ navigate }) {
  return (
    <SafeAreaView style={s.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <View style={s.header}>
        <Text style={s.headerTitle}>Study-Buddy! 📚</Text>
      </View>
      <View style={s.content}>
        <View style={s.welcomeCard}>
          <Text style={s.welcomeText}>Welcome Back! 👋</Text>
          <Text style={s.subText}>Manage your assignments below.</Text>
        </View>
        <Text style={s.tagline}>Stay on top of your studies,{'\n'}one task at a time.</Text>
      </View>
      <View style={s.footer}>
        <TouchableOpacity style={s.button} onPress={() => navigate('TaskList')} activeOpacity={0.85}>
          <Text style={s.buttonText}>View Tasks in List →</Text>
        </TouchableOpacity>
        <View style={s.homeIndicator} />
      </View>
    </SafeAreaView>
  );
}
 
// ─── TASK LIST SCREEN ────────────────────────────────────────────────────────
function TaskListScreen({ navigate, tasks, setTasks }) {
  const saveTasks = async (updated) => {
    setTasks(updated);
    try { await AsyncStorage.setItem('tasks', JSON.stringify(updated)); } catch (e) {}
  };
 
  const toggleComplete = (id) => {
    saveTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };
 
  const isOverdue = (d) => d && new Date(d) < new Date();
 
  const renderTask = ({ item }) => (
    <View style={[tl.taskCard, item.completed && tl.taskCardDone]}>
      <View style={tl.taskInfo}>
        <Text style={[tl.taskName, item.completed && tl.taskNameDone]} numberOfLines={1}>
          {item.name}
        </Text>
        {item.course ? <Text style={tl.taskCourse}>{item.course}</Text> : null}
        <Text style={[tl.taskDue, isOverdue(item.dueDate) && !item.completed && tl.taskDueOverdue]}>
          {item.dueDate ? `Due: ${new Date(item.dueDate).toLocaleDateString()}` : 'No due date'}
        </Text>
      </View>
      <View style={tl.taskActions}>
        <TouchableOpacity style={tl.editBtn} onPress={() => navigate('EditTask', item)}>
          <Text style={tl.editBtnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tl.checkbox, item.completed && tl.checkboxDone]} onPress={() => toggleComplete(item.id)}>
          {item.completed && <Text style={tl.checkmark}>✓</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
 
  const done = tasks.filter(t => t.completed).length;
 
  return (
    <SafeAreaView style={s.container}>
      <View style={tl.statsBar}>
        <Text style={tl.statsText}>{tasks.length - done} remaining · {done} done</Text>
        <TouchableOpacity style={tl.addBtn} onPress={() => navigate('AddTask')}>
          <Text style={tl.addBtnText}>+ Add</Text>
        </TouchableOpacity>
      </View>
      <View style={tl.listHeader}>
        <Text style={tl.listHeaderText}>Task List:</Text>
      </View>
      {tasks.length === 0 ? (
        <View style={tl.emptyState}>
          <Text style={tl.emptyIcon}>📋</Text>
          <Text style={tl.emptyText}>No tasks yet!</Text>
          <Text style={tl.emptySubText}>Tap "+ Add" to create your first task.</Text>
        </View>
      ) : (
        <FlatList data={tasks} keyExtractor={i => i.id} renderItem={renderTask}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }} />
      )}
      <View style={tl.bottomNav}>
        <TouchableOpacity style={tl.navItem} onPress={() => navigate('Home')}>
          <Text style={tl.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tl.navItem, tl.navItemActive]}>
          <Text style={tl.navIcon}>✅</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tl.navItem} onPress={() => navigate('AddTask')}>
          <Text style={tl.navIcon}>➕</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
 
// ─── ADD TASK SCREEN ─────────────────────────────────────────────────────────
function AddTaskScreen({ navigate, tasks, setTasks }) {
  const [taskName, setTaskName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [dueDate, setDueDate] = useState('');
 
  const handleAdd = async () => {
    if (!taskName.trim()) { Alert.alert('Missing Field', 'Please enter a task name.'); return; }
    const newTask = { id: Date.now().toString(), name: taskName.trim(), course: courseName.trim(), dueDate: dueDate.trim(), completed: false };
    const updated = [...tasks, newTask];
    setTasks(updated);
    try { await AsyncStorage.setItem('tasks', JSON.stringify(updated)); } catch (e) {}
    navigate('TaskList');
  };
 
  return (
    <SafeAreaView style={s.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={f.scroll} keyboardShouldPersistTaps="handled">
          <TouchableOpacity onPress={() => navigate('TaskList')} style={f.back}>
            <Text style={f.backText}>← Back</Text>
          </TouchableOpacity>
          <Text style={f.pageTitle}>Add Task</Text>
          <View style={f.form}>
            <Text style={f.label}>Task Name *</Text>
            <TextInput style={f.input} placeholder="e.g. Math Homework" placeholderTextColor="#4a5568" value={taskName} onChangeText={setTaskName} />
            <Text style={f.label}>Course Name</Text>
            <TextInput style={f.input} placeholder="e.g. Calculus 101" placeholderTextColor="#4a5568" value={courseName} onChangeText={setCourseName} />
            <Text style={f.label}>Due Date</Text>
            <TextInput style={f.input} placeholder="YYYY-MM-DD" placeholderTextColor="#4a5568" value={dueDate} onChangeText={setDueDate} />
            <TouchableOpacity style={f.addButton} onPress={handleAdd}>
              <Text style={f.addButtonText}>Add Task ✓</Text>
            </TouchableOpacity>
            <TouchableOpacity style={f.cancelButton} onPress={() => navigate('TaskList')}>
              <Text style={f.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
 
// ─── EDIT TASK SCREEN ────────────────────────────────────────────────────────
function EditTaskScreen({ navigate, tasks, setTasks, editTask }) {
  const [taskName, setTaskName] = useState(editTask.name);
  const [courseName, setCourseName] = useState(editTask.course || '');
  const [dueDate, setDueDate] = useState(editTask.dueDate || '');
 
  const handleSave = async () => {
    if (!taskName.trim()) { Alert.alert('Missing Field', 'Task name cannot be empty.'); return; }
    const updated = tasks.map(t => t.id === editTask.id ? { ...t, name: taskName.trim(), course: courseName.trim(), dueDate: dueDate.trim() } : t);
    setTasks(updated);
    try { await AsyncStorage.setItem('tasks', JSON.stringify(updated)); } catch (e) {}
    navigate('TaskList');
  };
 
  const handleDelete = () => {
    Alert.alert('Delete Task', `Delete "${editTask.name}"?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: async () => {
        const updated = tasks.filter(t => t.id !== editTask.id);
        setTasks(updated);
        try { await AsyncStorage.setItem('tasks', JSON.stringify(updated)); } catch (e) {}
        navigate('TaskList');
      }},
    ]);
  };
 
  return (
    <SafeAreaView style={s.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={f.scroll} keyboardShouldPersistTaps="handled">
          <TouchableOpacity onPress={() => navigate('TaskList')} style={f.back}>
            <Text style={f.backText}>← Back</Text>
          </TouchableOpacity>
          <Text style={f.pageTitle}>Edit Task</Text>
          <View style={f.form}>
            <Text style={f.label}>Task Name *</Text>
            <TextInput style={f.input} value={taskName} onChangeText={setTaskName} placeholderTextColor="#4a5568" />
            <Text style={f.label}>Course Name</Text>
            <TextInput style={f.input} value={courseName} onChangeText={setCourseName} placeholderTextColor="#4a5568" />
            <Text style={f.label}>Due Date</Text>
            <TextInput style={f.input} value={dueDate} onChangeText={setDueDate} placeholder="YYYY-MM-DD" placeholderTextColor="#4a5568" />
            <TouchableOpacity style={f.addButton} onPress={handleSave}>
              <Text style={f.addButtonText}>Save Changes ✓</Text>
            </TouchableOpacity>
            <TouchableOpacity style={f.deleteButton} onPress={handleDelete}>
              <Text style={f.deleteButtonText}>Delete Task 🗑</Text>
            </TouchableOpacity>
            <TouchableOpacity style={f.cancelButton} onPress={() => navigate('TaskList')}>
              <Text style={f.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
 
// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState('Home');
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
 
  // Load tasks on startup
  React.useEffect(() => {
    AsyncStorage.getItem('tasks').then(stored => {
      if (stored) setTasks(JSON.parse(stored));
    });
  }, []);
 
  const navigate = (destination, task = null) => {
    if (task) setEditTask(task);
    setScreen(destination);
  };
 
  const props = { navigate, tasks, setTasks, editTask };
 
  if (screen === 'Home')     return <HomeScreen {...props} />;
  if (screen === 'TaskList') return <TaskListScreen {...props} />;
  if (screen === 'AddTask')  return <AddTaskScreen {...props} />;
  if (screen === 'EditTask') return <EditTaskScreen {...props} />;
}
 
// ─── SHARED STYLES ───────────────────────────────────────────────────────────
const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  header: { paddingTop: 48, paddingHorizontal: 24, paddingBottom: 16, borderBottomWidth: 2, borderBottomColor: '#e8c547' },
  headerTitle: { fontSize: 28, fontWeight: '800', color: '#e8c547' },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 40 },
  welcomeCard: { backgroundColor: '#16213e', borderRadius: 16, padding: 28, borderLeftWidth: 4, borderLeftColor: '#e8c547' },
  welcomeText: { fontSize: 26, fontWeight: '700', color: '#ffffff', marginBottom: 8 },
  subText: { fontSize: 16, color: '#a0aec0' },
  tagline: { fontSize: 18, color: '#718096', textAlign: 'center', lineHeight: 28, fontStyle: 'italic', marginTop: 40 },
  footer: { paddingHorizontal: 24, paddingBottom: 32, alignItems: 'center' },
  button: { backgroundColor: '#e8c547', paddingVertical: 18, paddingHorizontal: 40, borderRadius: 14, width: '100%', alignItems: 'center' },
  buttonText: { color: '#1a1a2e', fontSize: 18, fontWeight: '800' },
  homeIndicator: { width: 130, height: 5, backgroundColor: '#4a5568', borderRadius: 3, marginTop: 24 },
});
 
const tl = StyleSheet.create({
  statsBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12, backgroundColor: '#16213e', borderBottomWidth: 1, borderBottomColor: '#2d3748' },
  statsText: { color: '#a0aec0', fontSize: 14 },
  addBtn: { backgroundColor: '#e8c547', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  addBtnText: { color: '#1a1a2e', fontWeight: '700', fontSize: 14 },
  listHeader: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 },
  listHeaderText: { fontSize: 20, fontWeight: '700', color: '#ffffff' },
  taskCard: { backgroundColor: '#16213e', borderRadius: 12, padding: 16, marginBottom: 12, flexDirection: 'row', alignItems: 'center', borderLeftWidth: 3, borderLeftColor: '#e8c547' },
  taskCardDone: { borderLeftColor: '#48bb78', opacity: 0.7 },
  taskInfo: { flex: 1, marginRight: 12 },
  taskName: { fontSize: 16, fontWeight: '600', color: '#ffffff', marginBottom: 3 },
  taskNameDone: { textDecorationLine: 'line-through', color: '#718096' },
  taskCourse: { fontSize: 12, color: '#e8c547', marginBottom: 3 },
  taskDue: { fontSize: 12, color: '#a0aec0' },
  taskDueOverdue: { color: '#fc8181' },
  taskActions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  editBtn: { backgroundColor: '#2d3748', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: '#4a5568' },
  editBtnText: { color: '#e2e8f0', fontSize: 13, fontWeight: '600' },
  checkbox: { width: 26, height: 26, borderRadius: 6, borderWidth: 2, borderColor: '#4a5568', alignItems: 'center', justifyContent: 'center' },
  checkboxDone: { backgroundColor: '#48bb78', borderColor: '#48bb78' },
  checkmark: { color: '#fff', fontSize: 14, fontWeight: '700' },
  emptyState: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyIcon: { fontSize: 60, marginBottom: 16 },
  emptyText: { fontSize: 22, fontWeight: '700', color: '#ffffff', marginBottom: 8 },
  emptySubText: { fontSize: 15, color: '#718096' },
  bottomNav: { flexDirection: 'row', backgroundColor: '#16213e', borderTopWidth: 1, borderTopColor: '#2d3748', paddingVertical: 12 },
  navItem: { flex: 1, alignItems: 'center', paddingVertical: 4 },
  navItemActive: { borderTopWidth: 2, borderTopColor: '#e8c547', marginTop: -1 },
  navIcon: { fontSize: 22 },
});
 
const f = StyleSheet.create({
  scroll: { flexGrow: 1, paddingHorizontal: 24, paddingVertical: 24 },
  back: { marginBottom: 16 },
  backText: { color: '#e8c547', fontSize: 16, fontWeight: '600' },
  pageTitle: { fontSize: 26, fontWeight: '800', color: '#ffffff', marginBottom: 28 },
  form: { gap: 12 },
  label: { fontSize: 14, fontWeight: '600', color: '#a0aec0', textTransform: 'uppercase', letterSpacing: 0.8, marginTop: 8 },
  input: { backgroundColor: '#16213e', borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14, color: '#ffffff', fontSize: 16, borderWidth: 1, borderColor: '#2d3748' },
  addButton: { backgroundColor: '#e8c547', paddingVertical: 18, borderRadius: 14, alignItems: 'center', marginTop: 16 },
  addButtonText: { color: '#1a1a2e', fontSize: 18, fontWeight: '800' },
  deleteButton: { paddingVertical: 16, borderRadius: 14, alignItems: 'center', borderWidth: 2, borderColor: '#fc8181' },
  deleteButtonText: { color: '#fc8181', fontSize: 16, fontWeight: '700' },
  cancelButton: { paddingVertical: 14, borderRadius: 14, alignItems: 'center', borderWidth: 1, borderColor: '#2d3748' },
  cancelButtonText: { color: '#718096', fontSize: 16, fontWeight: '600' },
});
 







