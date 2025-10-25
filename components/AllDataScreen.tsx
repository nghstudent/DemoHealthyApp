// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../App';

// type AllDataNavProp = StackNavigationProp<RootStackParamList, 'AllData'>;

// export default function AllDataScreen() {
//   const navigation = useNavigation<AllDataNavProp>();

//   const data = [
//     {
//       icon: 'target-outline',
//       color: '#00bcd4',
//       title: 'Double Support Time',
//       value: '29.7%',
//       unit: '',
//     },
//     {
//       icon: 'walk-outline',
//       color: '#ff9800',
//       title: 'Steps',
//       value: '11,875',
//       unit: 'steps',
//     },
//     {
//       icon: 'calendar-outline',
//       color: '#9C27B0',
//       title: 'Cycle tracking',
//       value: '08 April',
//       unit: '',
//     },
//     {
//       icon: 'moon-outline',
//       color: '#E53935',
//       title: 'Sleep',
//       value: '7 hr 31 min',
//       unit: '',
//     },
//     {
//       icon: 'heart-outline',
//       color: '#F44336',
//       title: 'Heart',
//       value: '68',
//       unit: 'BPM',
//     },
//     {
//       icon: 'flame-outline',
//       color: '#2196F3',
//       title: 'Burned calories',
//       value: '850',
//       unit: 'kcal',
//     },
//     {
//       icon: 'body-outline',
//       color: '#00BCD4',
//       title: 'Body mass index',
//       value: '18.69',
//       unit: 'BMI',
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="chevron-back" size={26} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.title}>All Health Data</Text>
//         <View style={{ width: 26 }} />
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false}>
//         {data.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.card}
//             onPress={() => {
//               // 👇 điều hướng sang StepsDetailScreen nếu bấm vào Steps
//               if (item.title === 'Steps') {
//                 navigation.navigate('StepsDetail');
//               }
//             }}>
//             <View
//               style={[
//                 styles.iconContainer,
//                 { backgroundColor: `${item.color}22` },
//               ]}>
//               <Ionicons name={item.icon as any} size={24} color={item.color} />
//             </View>
//             <View style={{ flex: 1 }}>
//               <Text style={styles.cardTitle}>{item.title}</Text>
//               <Text style={styles.cardValue}>
//                 {item.value} <Text style={styles.cardUnit}>{item.unit}</Text>
//               </Text>
//             </View>
//             <Ionicons name="chevron-forward" size={20} color="#aaa" />
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     paddingBottom: 10,
//   },
//   title: { fontSize: 20, fontWeight: '700', color: '#111' },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fafafa',
//     padding: 15,
//     marginHorizontal: 20,
//     marginVertical: 6,
//     borderRadius: 14,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 2 },
//     elevation: 1,
//   },
//   iconContainer: {
//     width: 45,
//     height: 45,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   cardTitle: { fontSize: 15, fontWeight: '600', color: '#333' },
//   cardValue: { fontSize: 18, fontWeight: 'bold', marginTop: 3 },
//   cardUnit: { fontSize: 12, color: '#888' },
// });

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type AllDataNavProp = StackNavigationProp<RootStackParamList, 'AllData'>;

export default function AllDataScreen() {
  const navigation = useNavigation<AllDataNavProp>();

  const data = [
    { icon: 'target-outline', color: '#00bcd4', title: 'Double Support Time', value: '29.7%', unit: '' },
    { icon: 'walk-outline', color: '#ff9800', title: 'Steps', value: '11,875', unit: 'steps' },
    { icon: 'calendar-outline', color: '#9C27B0', title: 'Cycle tracking', value: '08 April', unit: '' },
    { icon: 'moon-outline', color: '#E53935', title: 'Sleep', value: '7 hr 31 min', unit: '' },
    { icon: 'heart-outline', color: '#F44336', title: 'Heart', value: '68', unit: 'BPM' },
    { icon: 'flame-outline', color: '#2196F3', title: 'Burned calories', value: '850', unit: 'kcal' },
    { icon: 'body-outline', color: '#00BCD4', title: 'Body mass index', value: '18.69', unit: 'BMI' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>All Health Data</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => {
              // Điều hướng theo từng loại dữ liệu
              if (item.title === 'Steps') {
                navigation.navigate('StepsDetail');
              } else if (item.title === 'Sleep') {
                navigation.navigate('SleepDetail'); // 👈 thêm dòng này
              }
            }}>
            <View style={[styles.iconContainer, { backgroundColor: `${item.color}22` }]}>
              <Ionicons name={item.icon as any} size={24} color={item.color} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardValue}>
                {item.value} <Text style={styles.cardUnit}>{item.unit}</Text>
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#aaa" />
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    paddingBottom: 10,
  },
  title: { fontSize: 20, fontWeight: '700', color: '#111' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 6,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardTitle: { fontSize: 15, fontWeight: '600', color: '#333' },
  cardValue: { fontSize: 18, fontWeight: 'bold', marginTop: 3 },
  cardUnit: { fontSize: 12, color: '#888' },
});
