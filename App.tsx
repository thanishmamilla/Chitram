
// import React, { useState } from 'react';
// import { SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity,ToastAndroid } from 'react-native';
// import { Search ,MessageCircleHeart} from "lucide-react-native";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// function App(): React.JSX.Element {
//   const [showSearch, setShowSearch] = useState(false);
//   const [moviename, setMoviename] = useState("");

//   function handlechange(text: string) {
//     setMoviename(text);
    

//   }

//   async function getData() {
//     if (!moviename.trim()) return; 
//     try {
//       console.log("Fetching movie:", moviename);
//       const response = await fetch(`https://www.omdbapi.com/?apikey=a6210208&s=${moviename}`);
//       const jsondata = await response.json();
//       console.log("Movie Data:", jsondata);
//     } catch (error) {
//       console.log("Error fetching data:", error);
//     }
//   }

//   return (
//     <SafeAreaView style={styles.safearea}>
//       <View style={styles.maincontainer}>
//         {showSearch && (
//           <TextInput 
//             placeholder='Enter the movie name' 
//             style={styles.inputbar} 
//             placeholderTextColor="#888"
//             onChange={(e) => handlechange(e.nativeEvent.text)}
//             onSubmitEditing={getData} 
//             returnKeyType="search"
//           />
//         )}
//         <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
//           <Search size={34} color="orange" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.moviecontainer}>

//       </View>
//       <View style={styles.fixedcontainer}>
//         <TouchableOpacity>
//           <Search  size={34}/>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <MessageCircleHeart size={34}/>
//         </TouchableOpacity>
     
      
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safearea:{
//     flex: 1,
//   },
//   maincontainer: {
//     marginTop: 10,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: "space-evenly",
//     flexDirection: 'row',
//     marginBottom: 50,
//   },
//   moviecontainer:{
//     backgroundColor: "black",
//     flex:0.9,
//   },
//   inputbar: {
//     borderRadius: 20,
//     borderWidth: 1,
//     padding: 10,
//     margin: 10,
//     width: "80%",
//     backgroundColor: "#fff",
//     borderColor: "#ccc",
//   },
//   fixedcontainer: {
//     position: 'absolute',
//     bottom: 0,
//     borderColor: 'orange',
//     borderWidth: 1,
//     borderRadius: 20,
//     backgroundColor: 'orange',
//     width: '50%',
//     right: 100,
//     padding: 20,
//     zIndex: 1,
//     height: 50,
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: "space-between",
//   },
// });

// export default App;



// import React, { useState } from 'react';
// import { 
//   SafeAreaView, 
//   StyleSheet, 
//   TextInput, 
//   View, 
//   TouchableOpacity, 
//   Text, 
//   Image, 
//   FlatList, 
//   Dimensions 
// } from 'react-native';
// import { Search, MessageCircleHeart } from "lucide-react-native";

// const { width } = Dimensions.get("window");

// function App(): React.JSX.Element {
//   const [showSearch, setShowSearch] = useState(false);
//   const [moviename, setMoviename] = useState("");
//   const [movies, setMovies] = useState([]);

//   async function getData() {
//     if (!moviename.trim()) return; 
//     try {
//       const response = await fetch(`https://www.omdbapi.com/?apikey=a6210208&s=${moviename}`);
//       const jsondata = await response.json();
//       setMovies(jsondata.Response === "True" ? jsondata.Search : []);
//     } catch (error) {
//       console.log("Error fetching data:", error);
//     }
//   }

//   return (
//     <SafeAreaView style={styles.safearea}>
//       <View style={styles.maincontainer}>
//         {showSearch && (
//           <TextInput 
//             placeholder="Enter the movie name" 
//             style={styles.inputbar} 
//             placeholderTextColor="#888"
//             value={moviename}
//             onChangeText={setMoviename}
//             onSubmitEditing={getData} 
//             returnKeyType="search"
//           />
//         )}
//         <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
//           <Search size={34} color="orange" />
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={movies}
//         keyExtractor={(item) => item.imdbID}
//         numColumns={2}
//         columnWrapperStyle={styles.row}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image 
//               source={item.Poster !== "N/A" ? { uri: item.Poster } : require("./assets/no-image.jpg")} 
//               style={styles.poster}
//             />
//             <Text style={styles.title}>{item.Title}</Text>
//             <Text style={styles.year}>{item.Year}</Text>
//           </View>
//         )}
//         contentContainerStyle={styles.moviecontainer}
//       />

//       <View style={styles.fixedcontainer}>
//         <TouchableOpacity>
//           <Search size={34} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <MessageCircleHeart size={34} />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safearea: {
//     flex: 1,
//     backgroundColor: "#111",
//   },
//   maincontainer: {
//     marginTop: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: "space-evenly",
//     marginBottom: 20,
//   },
//   inputbar: {
//     borderRadius: 20,
//     borderWidth: 1,
//     padding: 10,
//     margin: 10,
//     width: "80%",
//     backgroundColor: "#fff",
//     borderColor: "#ccc",
//   },
//   moviecontainer: {
//     paddingBottom: 80,
//   },
//   row: {
//     justifyContent: "space-between",
//     paddingHorizontal: 10, 
//   },
//   card: {
//     backgroundColor: "#222",
//     width: (width / 2) - 20,
//     alignItems: "center",
//     marginVertical: 8,
//     borderRadius: 10,
//     padding: 10,
//   },
//   poster: {
//     width: "100%",
//     height: 180,
//     borderRadius: 8,
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#fff",
//     textAlign: "center",
//     marginTop: 5,
//   },
//   year: {
//     fontSize: 12,
//     color: "#aaa",
//     textAlign: "center",
//   },
//   fixedcontainer: {
//     position: 'absolute',
//     bottom: 10,
//     alignSelf: "center",
//     borderColor: 'orange',
//     borderWidth: 1,
//     borderRadius: 20,
//     backgroundColor: 'orange',
//     width: '50%',
//     padding: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: "space-between",
//   },
// });

// export default App;



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MovieDetailScreen from './screens/MovieDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MovieDetails" component={MovieDetailScreen} options={{headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
