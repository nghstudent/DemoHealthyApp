import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type OverviewNavProp = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function OverviewScreen() {
  const navigation = useNavigation<OverviewNavProp>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Overview Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.dateText}>SAT, 25 OCT</Text>
            <Text style={styles.title}>Overview</Text>
          </View>

          <TouchableOpacity
            style={styles.dataButton}
            onPress={() => navigation.navigate('AllData')}>
            <Ionicons name="analytics-outline" size={20} color="#00bcd4" />
            <Text style={styles.dataText}>All data</Text>
          </TouchableOpacity>
        </View>

        {/* Health Score */}
        <HealthScoreCard />

        {/* Highlights */}
        <HighlightsSection />

        {/* Weekly Report */}
        <WeeklyReportSection />

        {/* Blogs */}
        <BlogsSection />

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </SafeAreaView>
  );
}

/* ------------------ COMPONENTS ------------------ */

const HealthScoreCard = () => (
  <LinearGradient
    colors={['#00cfff', '#4facfe']}
    style={styles.healthCard}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <View>
      <Text style={styles.healthTitle}>Health Score</Text>
      <Text style={styles.healthDesc}>
        Based on your activity & sleep tracking
      </Text>
    </View>
    <View style={styles.scoreContainer}>
      <Text style={styles.score}>78</Text>
    </View>
  </LinearGradient>
);

// const HighlightsSection = () => {
//   const navigation = useNavigation<OverviewNavProp>();

//   const highlights = [
//     { icon: 'walk-outline', label: 'Steps', value: '11,857', color: '#4facfe' },
//     { icon: 'fitness-outline', label: 'Workout', value: '960 kcal', color: '#f76b1c' },
//     { icon: 'moon-outline', label: 'Sleep', value: '7h 31m', color: '#5B5BEA' },
//     { icon: 'water-outline', label: 'Water', value: '1.8 L', color: '#00bcd4' },
//   ];

//   return (
//     <>
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>Highlights</Text>
//         <TouchableOpacity>
//           <Text style={styles.linkText}>View more</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.highlightGrid}>
//         {highlights.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[styles.highlightCard, { backgroundColor: `${item.color}22` }]}
//             onPress={() => {
//               if (item.label === 'Steps') {
//                 navigation.navigate('StepsDetail'); // 👈 điều hướng sang màn hình StepsDetail
//               }
//             }}
//           >
//             <Ionicons name={item.icon as any} size={28} color={item.color} />
//             <Text style={styles.highlightLabel}>{item.label}</Text>
//             <Text style={[styles.highlightValue, { color: item.color }]}>
//               {item.value}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </>
//   );
// };

const HighlightsSection = () => {
  const navigation = useNavigation<OverviewNavProp>();

  const highlights = [
    { icon: 'walk-outline', label: 'Steps', value: '11,857', color: '#4facfe', screen: 'StepsDetail' },
    { icon: 'fitness-outline', label: 'Workout', value: '960 kcal', color: '#f76b1c', screen: null }, // chưa có màn hình chi tiết
    { icon: 'moon-outline', label: 'Sleep', value: '7h 31m', color: '#5B5BEA', screen: 'SleepDetail' },
    { icon: 'water-outline', label: 'Water', value: '1.8 L', color: '#00bcd4', screen: null }, // chưa có màn hình chi tiết
  ];

  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Highlights</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>View more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.highlightGrid}>
        {highlights.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.highlightCard, { backgroundColor: `${item.color}22` }]}
            onPress={() => {
              if (item.screen) {
                navigation.navigate(item.screen as keyof RootStackParamList);
              } else {
                console.log(`${item.label} detail screen not implemented yet.`);
              }
            }}
          >
            <Ionicons name={item.icon as any} size={28} color={item.color} />
            <Text style={styles.highlightLabel}>{item.label}</Text>
            <Text style={[styles.highlightValue, { color: item.color }]}>
              {item.value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};


const WeeklyReportSection = () => {
  const reports = [
    { icon: 'footsteps-outline', value: '697,978', label: 'Steps', color: '#4facfe' },
    { icon: 'barbell-outline', value: '6h 45m', label: 'Workout', color: '#f76b1c' },
    { icon: 'moon-outline', value: '29h 17m', label: 'Sleep', color: '#5B5BEA' },
  ];

  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>This week report</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>View more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.reportRow}>
        {reports.map((r, i) => (
          <View key={i} style={styles.reportItem}>
            <Ionicons name={r.icon as any} size={20} color={r.color} />
            <Text style={styles.reportValue}>{r.value}</Text>
            <Text style={styles.reportLabel}>{r.label}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const BlogsSection = () => {
  const blogs = [
    {
      title: 'More about Apples 🍎',
      desc: 'Benefits, nutrition, and tips',
      image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400',
    },
    {
      title: 'Yoga for Morning 🌅',
      desc: 'Boost energy & focus',
      image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400',
    },
    {
      title: 'Hydration Tips 💧',
      desc: 'How much water is enough?',
      image: 'https://images.unsplash.com/photo-1543342386-1b0b9e1c7c8b?w=400',
    },
  ];

  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Blogs</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>View more</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 20 }}>
        {blogs.map((blog, i) => (
          <TouchableOpacity key={i} style={styles.blogCard}>
            <Image source={{ uri: blog.image }} style={styles.blogImage} />
            <Text style={styles.blogTitle}>{blog.title}</Text>
            <Text style={styles.blogDesc}>{blog.desc}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

const BottomNav = () => (
  <View style={styles.bottomNav}>
    <TouchableOpacity>
      <Ionicons name="home" size={26} color="#00bcd4" />
      <Text style={styles.navLabelActive}>Overview</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="compass-outline" size={26} color="#aaa" />
      <Text style={styles.navLabel}>Explore</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="share-social-outline" size={26} color="#aaa" />
      <Text style={styles.navLabel}>Sharing</Text>
    </TouchableOpacity>
  </View>
);

/* ------------------ STYLES ------------------ */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  dateText: { color: '#777', fontSize: 13 },
  title: { fontSize: 26, fontWeight: '700', marginTop: 3 },

  dataButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6faff',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  dataText: { color: '#00bcd4', fontWeight: '600', marginLeft: 5 },

  healthCard: {
    margin: 20,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 6,
  },
  healthTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },
  healthDesc: { color: '#e0f7ff', fontSize: 13, marginTop: 5 },
  scoreContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: { fontSize: 28, fontWeight: 'bold', color: '#00cfff' },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 15,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700' },
  linkText: { color: '#00bcd4', fontWeight: '500' },

  highlightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 15,
  },
  highlightCard: {
    width: '47%',
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
  },
  highlightLabel: { marginTop: 8, fontSize: 14, color: '#333' },
  highlightValue: { fontSize: 20, fontWeight: 'bold', marginTop: 4 },

  reportRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginHorizontal: 10,
  },
  reportItem: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 12,
    width: '30%',
  },
  reportValue: { fontWeight: 'bold', marginTop: 5 },
  reportLabel: { color: '#666', fontSize: 12 },

  blogCard: {
    width: 200,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
    marginRight: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  blogImage: {
    width: '100%',
    height: 110,
    borderRadius: 10,
    marginBottom: 8,
  },
  blogTitle: { fontWeight: '700', fontSize: 14 },
  blogDesc: { color: '#555', fontSize: 12, marginTop: 4 },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  navLabel: { color: '#aaa', fontSize: 12 },
  navLabelActive: { color: '#00bcd4', fontSize: 12 },
});
