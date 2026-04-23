import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Study-Buddy! 📚</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeText}>Welcome Back! 👋</Text>
          <Text style={styles.subText}>Manage your assignments below.</Text>
        </View>

        {/* Decorative element */}
        <View style={styles.decorRow}>
          <View style={styles.decorDot} />
          <View style={[styles.decorDot, { backgroundColor: '#e8c547' }]} />
          <View style={styles.decorDot} />
        </View>

        <Text style={styles.tagline}>Stay on top of your studies,{'\n'}one task at a time.</Text>
      </View>

      {/* Bottom CTA */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TaskList')}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>View Tasks in List →</Text>
        </TouchableOpacity>

        <View style={styles.homeIndicator} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    paddingTop: 48,
    paddingHorizontal: 24,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#e8c547',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#e8c547',
    letterSpacing: 0.5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  welcomeCard: {
    backgroundColor: '#16213e',
    borderRadius: 16,
    padding: 28,
    borderLeftWidth: 4,
    borderLeftColor: '#e8c547',
    shadowColor: '#e8c547',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: '#a0aec0',
    lineHeight: 22,
  },
  decorRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 40,
    marginBottom: 24,
  },
  decorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4a5568',
  },
  tagline: {
    fontSize: 18,
    color: '#718096',
    textAlign: 'center',
    lineHeight: 28,
    fontStyle: 'italic',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#e8c547',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 14,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#e8c547',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  buttonText: {
    color: '#1a1a2e',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  homeIndicator: {
    width: 130,
    height: 5,
    backgroundColor: '#4a5568',
    borderRadius: 3,
    marginTop: 24,
  },
});
