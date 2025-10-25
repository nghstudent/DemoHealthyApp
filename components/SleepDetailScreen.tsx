import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type SleepScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SleepDetail'
>;

const screenWidth = Dimensions.get('window').width - 40;
const maxBarHeight = 120;

const dataSleep = {
  Today: [0.5, 0.3, 0.7, 0.8, 0.2, 0.4, 0.1],
  Weekly: [0.6, 0.4, 0.3, 0.7, 0.5, 0.8, 0.6],
  Monthly: [0.3, 0.5, 0.6, 0.4, 0.8, 0.7, 0.5],
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function SleepDetailScreen() {
  const navigation = useNavigation<SleepScreenNavigationProp>();
  const [selectedTab, setSelectedTab] = useState<
    'Today' | 'Weekly' | 'Monthly'
  >('Weekly');

  const avgSleep = {
    Today: { h: 6, m: 45 },
    Weekly: { h: 7, m: 31 },
    Monthly: { h: 7, m: 15 },
  };

  const sleepRate = {
    Today: 78,
    Weekly: 82,
    Monthly: 79,
  };
  const deepSleep = {
    Today: '55min',
    Weekly: '1h 3min',
    Monthly: '1h 10min',
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sleep</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Average sleep */}
      <View style={styles.avgSleepContainer}>
        <Text style={styles.avgSleepText}>
          Your average sleep time is{' '}
          <Text style={styles.avgSleepHighlight}>
            {avgSleep[selectedTab].h}h {avgSleep[selectedTab].m}min
          </Text>
        </Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {(['Today', 'Weekly', 'Monthly'] as const).map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={[styles.tab, selectedTab === tab && styles.tabActive]}>
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.tabTextActive,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bar chart */}
      <View style={styles.chartContainer}>
        {dataSleep[selectedTab].map((val, i) => (
          <View key={i} style={styles.barWrapper}>
            <View style={styles.barBackground} />
            <View style={[styles.barFill, { height: val * maxBarHeight }]} />
            <Text style={styles.dayLabel}>{days[i]}</Text>
          </View>
        ))}
      </View>

      {/* Stats boxes */}
      <View style={styles.infoRow}>
        <View style={styles.infoBox}>
          <Text style={styles.infoEmoji}>🌟</Text>
          <Text style={styles.infoLabel}>Sleep rate</Text>
          <Text style={styles.infoValue}>{sleepRate[selectedTab]}%</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoEmoji}>😴</Text>
          <Text style={styles.infoLabel}>Deep sleep</Text>
          <Text style={styles.infoValue}>{deepSleep[selectedTab]}</Text>
        </View>
      </View>

      {/* Schedule */}
      <View style={styles.scheduleHeader}>
        <Text style={styles.scheduleTitle}>Set your schedule</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scheduleRow}>
        <View style={[styles.scheduleBox, { backgroundColor: '#ef5350' }]}>
          <Text style={styles.scheduleLabel}>Bedtime</Text>
          <Text style={styles.scheduleTime}>22:00</Text>
        </View>
        <View style={[styles.scheduleBox, { backgroundColor: '#fb8c00' }]}>
          <Text style={styles.scheduleLabel}>Wake up</Text>
          <Text style={styles.scheduleTime}>07:30</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {},
  backText: { fontSize: 26, color: '#222', fontWeight: '600' },
  headerTitle: { fontSize: 22, fontWeight: '700', color: '#222' },

  // Average sleep
  avgSleepContainer: { alignItems: 'center', marginBottom: 20 },
  avgSleepText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    lineHeight: 26,
  },
  avgSleepHighlight: { color: '#00bcd4', fontWeight: '700' },

  // Tabs
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  tab: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginHorizontal: 6,
    borderRadius: 25,
  },
  tabActive: { backgroundColor: '#00bcd4' },
  tabText: { fontSize: 14, fontWeight: '500', color: '#00bcd4', opacity: 0.7 },
  tabTextActive: { color: '#fff', opacity: 1, fontWeight: '700' },

  // Bar chart
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 140,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  barWrapper: { alignItems: 'center', justifyContent: 'flex-end', width: 30 },
  barBackground: {
    position: 'absolute',
    bottom: 20,
    width: 18,
    height: maxBarHeight,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
  },
  barFill: {
    width: 18,
    borderRadius: 12,
    backgroundColor: '#00bcd4',
    position: 'absolute',
    bottom: 20,
  },
  dayLabel: { marginTop: 6, fontSize: 12, color: '#555', fontWeight: '500' },

  // Info boxes
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  infoBox: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 16,
    width: '42%',
  },
  infoEmoji: { fontSize: 22, marginBottom: 6 },
  infoLabel: {
    fontSize: 13,
    color: '#777',
    marginBottom: 4,
    fontWeight: '500',
  },
  infoValue: { fontSize: 16, fontWeight: '700', color: '#222' },

  // Schedule
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  scheduleTitle: { fontSize: 16, fontWeight: '700', color: '#222' },
  editText: { fontSize: 14, fontWeight: '600', color: '#00bcd4' },

  scheduleRow: { flexDirection: 'row', justifyContent: 'space-between' },
  scheduleBox: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  scheduleLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  scheduleTime: { fontSize: 18, fontWeight: '700', color: '#fff' },
});
