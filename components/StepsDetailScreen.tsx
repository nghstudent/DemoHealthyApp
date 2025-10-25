import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ProgressCircle } from 'react-native-svg-charts';
import { LineChart } from 'react-native-chart-kit';

export default function StepsDetailScreen() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState<
    'Today' | 'Weekly' | 'Monthly'
  >('Weekly');
  const screenWidth = Dimensions.get('window').width - 40;
  const progress = 0.8;

  const chartData = {
    Today: [2, 4, 6, 5, 7, 8, 10],
    Weekly: [3, 5, 2, 7, 6, 8, 5],
    Monthly: [5, 7, 3, 8, 9, 10, 6],
  };

  const chartLabels = {
    Today: ['6a', '9a', '12p', '3p', '6p', '9p', '12a'],
    Weekly: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    Monthly: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Steps</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Goal Summary */}
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>
          You have achieved{' '}
          <Text style={{ color: '#00bcd4', fontWeight: '800' }}>80%</Text> of
          your goal today
        </Text>

        {/* Circular gauge */}
        <View style={styles.gaugeOuter}>
          <ProgressCircle
            style={{ height: 200, width: 200 }}
            progress={progress}
            progressColor={'#00bcd4'}
            backgroundColor={'#e0f7fa'}
            strokeWidth={12}
          />
          <View style={styles.gaugeInnerText}>
            <Ionicons name="walk-outline" size={26} color="#00bcd4" />
            <Text style={styles.stepsValue}>11,857</Text>
            <Text style={styles.stepsGoal}>Steps out of 18k</Text>
          </View>
        </View>
      </View>

      {/* Small stats with circular progress */}
      <View style={styles.statsRow}>
        <View style={styles.smallCircleWrapper}>
          <ProgressCircle
            style={{ height: 80, width: 80 }}
            progress={0.8}
            progressColor="#ff9800"
            strokeWidth={8}
            backgroundColor="#ffe0b2"
          />
          <View style={styles.smallCircleCenter}>
            <Ionicons name="flame-outline" size={20} color="#ff9800" />
            <Text style={styles.statValue}>850</Text>
            <Text style={styles.statLabel}>kcal</Text>
          </View>
        </View>

        <View style={styles.smallCircleWrapper}>
          <ProgressCircle
            style={{ height: 80, width: 80 }}
            progress={0.5}
            progressColor="#e91e63"
            strokeWidth={8}
            backgroundColor="#f8bbd0"
          />
          <View style={styles.smallCircleCenter}>
            <Ionicons name="location-outline" size={20} color="#e91e63" />
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>km</Text>
          </View>
        </View>

        <View style={styles.smallCircleWrapper}>
          <ProgressCircle
            style={{ height: 80, width: 80 }}
            progress={0.6}
            progressColor="#03a9f4"
            strokeWidth={8}
            backgroundColor="#b3e5fc"
          />
          <View style={styles.smallCircleCenter}>
            <Ionicons name="time-outline" size={20} color="#03a9f4" />
            <Text style={styles.statValue}>120</Text>
            <Text style={styles.statLabel}>min</Text>
          </View>
        </View>
      </View>

      {/* Chart Section */}
      <View style={styles.chartContainer}>
        {/* Tabs */}
        <View style={styles.tabRow}>
          {['Today', 'Weekly', 'Monthly'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setSelectedTab(tab as any)}>
              <Text
                style={[styles.tab, selectedTab === tab && styles.tabActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Chart */}
        <LineChart
          data={{
            labels: chartLabels[selectedTab],
            datasets: [{ data: chartData[selectedTab] }],
          }}
          width={screenWidth}
          height={180}
          yAxisLabel=""
          yAxisSuffix="k"
          chartConfig={{
            backgroundColor: '#00bcd4',
            backgroundGradientFrom: '#00bcd4',
            backgroundGradientTo: '#4facfe',
            decimalPlaces: 0,
            color: () => '#fff',
            labelColor: () => '#fff',
            propsForDots: { r: '4', strokeWidth: '2', stroke: '#fff' },
          }}
          bezier
          style={styles.chart}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  title: { fontSize: 20, fontWeight: '700' },

  // Goal
  goalContainer: { alignItems: 'center', marginTop: 20 },
  goalText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
    width: '85%',
    lineHeight: 24,
  },
  gaugeOuter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  gaugeInnerText: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepsValue: { fontSize: 34, fontWeight: '800', color: '#00bcd4' },
  stepsGoal: { fontSize: 13, color: '#777' },

  // Small circular stats
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  smallCircleWrapper: { alignItems: 'center', justifyContent: 'center' },
  smallCircleCenter: { position: 'absolute', alignItems: 'center' },
  statValue: { fontWeight: 'bold', fontSize: 15, color: '#333', marginTop: 2 },
  statLabel: { fontSize: 12, color: '#777' },

  // Chart
  chartContainer: {
    backgroundColor: '#00bcd4',
    marginHorizontal: 20,
    borderRadius: 16,
    paddingVertical: 10,
    marginTop: 25,
  },
  tabRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 5 },
  tab: { color: '#fff', marginHorizontal: 10, opacity: 0.6, fontSize: 15 },
  tabActive: { opacity: 1, fontWeight: '700', textDecorationLine: 'underline' },
  chart: { borderRadius: 16, alignSelf: 'center' },
});
