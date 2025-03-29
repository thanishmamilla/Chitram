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
// import { Search, MessageCircleHeart,Heart } from "lucide-react-native";

// const { width } = Dimensions.get("window");

// export default function HomeScreen({ navigation }) {
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
//           <>
//           <TouchableOpacity 
//             style={styles.card} 
//             onPress={() => navigation.navigate('MovieDetails', { imdbID: item.imdbID })}
//           >
//             <Image 
//               source={item.Poster !== "N/A" ? { uri: item.Poster } : require("../assets/no-image.jpg")} 
//               style={styles.poster}
//             />
//             <Text style={styles.title}>{item.Title}</Text>
//             <Text style={styles.year}>{item.Year}</Text>
//           {/* <Heart size={28}/> */}
//           </TouchableOpacity>
//           </>
        
//         )}
//         contentContainerStyle={styles.moviecontainer}
//       />

//       <View style={styles.fixedcontainer}>
//         <TouchableOpacity>
//           <Search size={28} />
//           <Text style={{ fontSize: 10, fontWeight: "bold",  textAlign: "center", textTransform: "uppercase" }}>Search</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <MessageCircleHeart size={28} />
//             <Text style={{ fontSize: 10, fontWeight: "bold",  textAlign: "center", textTransform: "uppercase" }}>Liked</Text>
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
//     height: 140,
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
//     width: '40%',
//     padding: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: "space-between",
//   },
// });


// import React, { useState, useEffect } from 'react';
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
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Search, MessageCircleHeart,Heart } from "lucide-react-native";

// const { width } = Dimensions.get("window");

// export default function HomeScreen({ navigation }) {
//   const [showSearch, setShowSearch] = useState(false);
//   const [moviename, setMoviename] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [likedMovies, setLikedMovies] = useState([]);
//   const [showLiked, setShowLiked] = useState(false);

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

//   async function fetchLikedMovies() {
//     try {
//       const storedMovies = await AsyncStorage.getItem('likedMovies');
//       setLikedMovies(storedMovies ? JSON.parse(storedMovies) : []);
//     } catch (error) {
//       console.log("Error fetching liked movies:", error);
//     }
//   }

//   function toggleView() {
//     if (showLiked) {
//       setShowLiked(false);
//     } else {
//       fetchLikedMovies();
//       setShowLiked(true);
//     }
//   }

//   return (
//     <SafeAreaView style={styles.safearea}>
//       <View style={styles.maincontainer}>
//         {!showLiked ? (
//           <>
//             {showSearch && (
//               <TextInput 
//                 placeholder="Enter the movie name" 
//                 style={styles.inputbar} 
//                 placeholderTextColor="#888"
//                 value={moviename}
//                 onChangeText={setMoviename}
//                 onSubmitEditing={getData} 
//                 returnKeyType="search"
//               />
//             )}
//             <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
//               <Search size={34} color="orange" />
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//           <Text style={styles.infoText}>Your Liked Movies <Heart size={15} color="red"/></Text>
         
//           </>
//         )}
//       </View>

//       <FlatList
//         data={showLiked ? likedMovies : movies}
//         keyExtractor={(item) => item.imdbID}
//         numColumns={2}
//         columnWrapperStyle={styles.row}
//         renderItem={({ item }) => (
//           <TouchableOpacity 
//             style={styles.card} 
//             onPress={() => navigation.navigate('MovieDetails', { imdbID: item.imdbID })}
//           >
//             <Image 
//               source={item.Poster !== "N/A" ? { uri: item.Poster } : require("../assets/no-image.jpg")} 
//               style={styles.poster}
//             />
//             <Text style={styles.title}>{item.Title}</Text>
//             <Text style={styles.year}>{item.Year}</Text>
//           </TouchableOpacity>
//         )}
//         contentContainerStyle={styles.moviecontainer}
//       />

//       <View style={styles.fixedcontainer}>
//         <TouchableOpacity onPress={() => setShowLiked(false)}>
//           <Search size={28} color={showLiked ? "black" : "white"} />
//           <Text style={styles.iconText}>Search</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={toggleView}>
//           <MessageCircleHeart size={28} color={showLiked ? "white" : "black"} />
//           <Text style={styles.iconText}>Liked</Text>
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
//   infoText: {
//     fontSize: 16,
//     color: "orange",
//     textAlign: "center",
//     fontWeight: "bold",
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
//     height: 140,
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
//     width: '40%',
//     padding: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: "space-between",
//   },
//   iconText: {
//     fontSize: 10,
//     fontWeight: "bold",
//     textAlign: "center",
//     textTransform: "uppercase",
//     color: "black",
//   }
// });



import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { 
  SafeAreaView, 
  StyleSheet, 
  TextInput, 
  View, 
  TouchableOpacity, 
  Text, 
  Image, 
  FlatList, 
  Dimensions 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Search, MessageCircleHeart, Heart } from "lucide-react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(false); 
  const [showSearch, setShowSearch] = useState(false);
  const [moviename, setMoviename] = useState("");
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [showLiked, setShowLiked] = useState(false);

  async function getData() {
    if (!moviename.trim()) return;
    setLoading(true); // Show loader
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=a6210208&s=${moviename}`);
      const jsondata = await response.json();
      setMovies(jsondata.Response === "True" ? jsondata.Search : []);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    setLoading(false); // Hide loader
  }

  async function fetchLikedMovies() {
    try {
      const storedMovies = await AsyncStorage.getItem('likedMovies');
      setLikedMovies(storedMovies ? JSON.parse(storedMovies) : []);
    } catch (error) {
      console.log("Error fetching liked movies:", error);
    }
  }

  function toggleView() {
    if (showLiked) {
      setShowLiked(false);
    } else {
      fetchLikedMovies();
      setShowLiked(true);
    }
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.headerContainer}>
        {!showLiked ? (
          <>
            {showSearch && (
              <TextInput 
                placeholder="Search movies..." 
                style={styles.inputbar} 
                placeholderTextColor="#999"
                value={moviename}
                onChangeText={setMoviename}
                onSubmitEditing={getData} 
                returnKeyType="search"
              />
            )}
            <TouchableOpacity 
              onPress={() => setShowSearch(!showSearch)} 
              style={styles.searchIconContainer}
            >
              <Search size={34} color="#FFB347" />
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.likedHeaderContainer}>
            <Text style={styles.infoText}>Your Liked Movies</Text>
            <Heart size={20} color="#FF6B6B" />
          </View>
        )}
      </View>

      <FlatList
  data={showLiked ? likedMovies : movies}
  keyExtractor={(item) => item.imdbID}
  numColumns={2}
  columnWrapperStyle={styles.row}
  renderItem={({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('MovieDetails', { imdbID: item.imdbID })}
    >
      <View style={styles.cardImageContainer}>
        <Image 
          source={item.Poster !== "N/A" ? { uri: item.Poster } : require("../assets/no-image.jpg")} 
          style={styles.poster}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title} numberOfLines={2}>{item.Title}</Text>
      <Text style={styles.year}>{item.Year}</Text>
    </TouchableOpacity>
  )}
  contentContainerStyle={styles.moviecontainer}
  ListEmptyComponent={() => (
    <View style={styles.emptyContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#FFB347" />
      ) : !moviename.trim() ? (
        <Text style={styles.emptyMessage}>Enter your movie name to search</Text>
      ) : (
        <Text style={styles.emptyMessage}>No movies found</Text>
      )}
    </View>
  )}
/>

      <View style={styles.bottomNavContainer}>
        <TouchableOpacity 
          style={[
            styles.navButton, 
            { 
              backgroundColor: showLiked ? 'transparent' : '#FFB347',
              borderColor: showLiked ? '#FFB347' : 'transparent'
            }
          ]} 
          onPress={() => setShowLiked(false)}
        >
          <Search size={24} color={showLiked ? "#FFB347" : "white"} />
          <Text style={[
            styles.navButtonText,
            { color: showLiked ? '#FFB347' : 'white' }
          ]}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.navButton, 
            { 
              backgroundColor: showLiked ? '#FFB347' : 'transparent',
              borderColor: !showLiked ? '#FFB347' : 'transparent'
            }
          ]} 
          onPress={toggleView}
        >
          <MessageCircleHeart 
            size={24} 
            color={showLiked ? "white" : "#FFB347"} 
          />
          <Text style={[
            styles.navButtonText,
            { color: showLiked ? 'white' : '#FFB347' }
          ]}>Liked</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#121212",
  },
  headerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-evenly",
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  likedHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
  },
  inputbar: {
    borderRadius: 25,
    borderWidth: 1,
    padding: 12,
    width: "85%",
    backgroundColor: "#1E1E1E",
    borderColor: "#FFB347",
    color: "white",
    fontSize: 16,
    shadowColor: "#FFB347",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIconContainer: {
    padding: 10,
  },
  infoText: {
    fontSize: 18,
    color: "#FFB347",
    textAlign: "center",
    fontWeight: "600",
  },
  moviecontainer: {
    paddingBottom: 100,
    paddingHorizontal: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },  
  row: {
    justifyContent: "space-between",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyMessage: {
    fontSize: 16,
    color: "#FFB347",
    textAlign: "center",
    fontWeight: "bold",
  },
  
  card: {
    backgroundColor: "#1E1E1E",
    width: (width / 2) - 20,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 15,
    padding: 12,
    shadowColor: "#FFB347",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardImageContainer: {
    width: "100%",
    aspectRatio: 2/3,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFB347",
    textAlign: "center",
    marginBottom: 5,
    height: 40,
  },
  year: {
    fontSize: 13,
    color: "#BBB",
    textAlign: "center",
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: "center",
    flexDirection: 'row',
    backgroundColor: '#222',
    borderRadius: 25, // Reduce the border radius
    paddingVertical: 6, // Reduce vertical padding
    paddingHorizontal: 15, // Adjust horizontal padding
    width: '60%', // Reduce the width to make it smaller
    justifyContent: 'space-around',
    shadowColor: "#FFB347",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
  ,
  navButton: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 5, // Reduce padding for a smaller button size
    paddingHorizontal: 12,
    borderRadius: 15, // Adjust border radius to fit the smaller size
    borderWidth: 1,
  }
  ,
  navButtonText: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 5,
    textTransform: "uppercase",
  }
});