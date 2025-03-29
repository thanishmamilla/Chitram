// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, ActivityIndicator, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Heart } from 'lucide-react-native';

// export default function MovieDetailScreen({ route }) {
//   const { imdbID } = route.params;
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     async function fetchMovieDetails() {
//       try {
//         const response = await fetch(`https://www.omdbapi.com/?apikey=a6210208&i=${imdbID}`);
//         const jsondata = await response.json();
//         setMovie(jsondata);
//         checkIfLiked(jsondata);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchMovieDetails();
//   }, [imdbID]);

//   async function checkIfLiked(movie) {
//     try {
//       const storedMovies = await AsyncStorage.getItem('likedMovies');
//       const likedMovies = storedMovies ? JSON.parse(storedMovies) : [];
//       setLiked(likedMovies.some((m) => m.imdbID === movie.imdbID));
//     } catch (error) {
//       console.error("Error checking liked movies:", error);
//     }
//   }

//   async function toggleLike() {
//     try {
//       const storedMovies = await AsyncStorage.getItem('likedMovies');
//       let likedMovies = storedMovies ? JSON.parse(storedMovies) : [];
//       if (liked) {
//         likedMovies = likedMovies.filter((m) => m.imdbID !== movie.imdbID);
//       } else {
//         likedMovies.push(movie);
//       }
//       await AsyncStorage.setItem('likedMovies', JSON.stringify(likedMovies));
//       setLiked(!liked);
//     } catch (error) {
//       console.error("Error updating liked movies:", error);
//     }
//   }

//   if (loading) {
//     return <ActivityIndicator size="large" color="orange" style={styles.loader} />;
//   }

//   return (
//     <View style={styles.container}>
//       <Image 
//         source={movie.Poster !== "N/A" ? { uri: movie.Poster } : require("../assets/no-image.jpg")} 
//         style={styles.poster} 
//       />
//       <Text style={styles.title}>{movie.Title}</Text>
//       <Text style={styles.year}>{movie.Year} | {movie.Genre}</Text>
//       <Text style={styles.plot}>{movie.Plot}</Text>

//       <Text style={styles.ratingTitle}>Ratings:</Text>
//       <FlatList
//         data={movie.Ratings}
//         keyExtractor={(item) => item.Source}
//         renderItem={({ item }) => (
//           <View style={styles.ratingCard}>
//             <Text style={styles.ratingSource}>{item.Source}</Text>
//             <Text style={styles.ratingValue}>{item.Value}</Text>
//           </View>
//         )}
//       />

//       <TouchableOpacity style={styles.likeButton} onPress={toggleLike}>
//         <Heart size={28} color={liked ? 'red' : 'white'} fill={liked ? 'red' : 'transparent'} />
//         <Text style={styles.likeText}>{liked ? "Liked" : "Like"}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#111",
//     padding: 15,
//     alignItems: "center",
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   poster: {
//     width: 200,
//     height: 300,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "orange",
//     textAlign: "center",
//   },
//   year: {
//     fontSize: 16,
//     color: "#aaa",
//     marginVertical: 5,
//     textAlign: "center",
//   },
//   plot: {
//     fontSize: 14,
//     color: "#ddd",
//     textAlign: "center",
//     marginVertical: 10,
//     paddingHorizontal: 10,
//   },
//   ratingTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "white",
//     marginTop: 10,
//     alignSelf: "flex-start",
//   },
//   ratingCard: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     backgroundColor: "#222",
//     width: "100%",
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 8,
//   },
//   ratingSource: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "orange",
//   },
//   ratingValue: {
//     fontSize: 14,
//     color: "#fff",
//   },
//   likeButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#222",
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 15,
//   },
//   likeText: {
//     fontSize: 16,
//     color: "white",
//     marginLeft: 10,
//   },
// });


import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  ActivityIndicator, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Heart } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function MovieDetailScreen({ route }) {
  const { imdbID } = route.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=a6210208&i=${imdbID}`);
        const jsondata = await response.json();
        setMovie(jsondata);
        checkIfLiked(jsondata);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieDetails();
  }, [imdbID]);

  async function checkIfLiked(movie) {
    try {
      const storedMovies = await AsyncStorage.getItem('likedMovies');
      const likedMovies = storedMovies ? JSON.parse(storedMovies) : [];
      setLiked(likedMovies.some((m) => m.imdbID === movie.imdbID));
    } catch (error) {
      console.error("Error checking liked movies:", error);
    }
  }

  async function toggleLike() {
    try {
      const storedMovies = await AsyncStorage.getItem('likedMovies');
      let likedMovies = storedMovies ? JSON.parse(storedMovies) : [];
      if (liked) {
        likedMovies = likedMovies.filter((m) => m.imdbID !== movie.imdbID);
      } else {
        likedMovies.push(movie);
      }
      await AsyncStorage.setItem('likedMovies', JSON.stringify(likedMovies));
      setLiked(!liked);
    } catch (error) {
      console.error("Error updating liked movies:", error);
    }
  }

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FFB347" />
      </View>
    );
  }

  const RatingsList = () => (
    <View style={styles.ratingsContainer}>
      <Text style={styles.sectionTitle}>Ratings</Text>
      <FlatList
        data={movie.Ratings}
        keyExtractor={(item) => item.Source}
        renderItem={({ item }) => (
          <View style={styles.ratingCard}>
            <Text style={styles.ratingSource}>{item.Source}</Text>
            <Text style={styles.ratingValue}>{item.Value}</Text>
          </View>
        )}
        scrollEnabled={false}
      />
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <View style={styles.posterContainer}>
            <Image 
              source={movie.Poster !== "N/A" ? { uri: movie.Poster } : require("../assets/no-image.jpg")} 
              style={styles.poster} 
              resizeMode="cover"
            />
            <TouchableOpacity 
              style={[
                styles.likeButton, 
                { backgroundColor: liked ? '#FF6B6B' : 'rgba(255,255,255,0.2)' }
              ]} 
              onPress={toggleLike}
            >
              <Heart 
                size={28} 
                color={liked ? 'white' : '#FF6B6B'} 
                fill={liked ? 'white' : 'transparent'} 
              />
            </TouchableOpacity>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={2}>{movie.Title}</Text>
            <Text style={styles.metadata}>
              {movie.Year} | {movie.Genre} | {movie.Runtime}
            </Text>

            <View style={styles.plotContainer}>
              <Text style={styles.sectionTitle}>Synopsis</Text>
              <Text style={styles.plot}>{movie.Plot}</Text>
            </View>

            <View style={styles.additionalInfoContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Director:</Text>
                <Text style={styles.infoValue}>{movie.Director}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Actors:</Text>
                <Text style={styles.infoValue} numberOfLines={2}>{movie.Actors}</Text>
              </View>
            </View>
          </View>
        </>
      }
      ListFooterComponent={<RatingsList />}
      keyExtractor={() => 'movie-details'}
      data={[{ id: 'details' }]}
      renderItem={() => null}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
  posterContainer: {
    width: width,
    height: width * 1.5,
    position: 'relative',
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  likeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    borderRadius: 50,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFB347',
    marginBottom: 10,
  },
  metadata: {
    fontSize: 16,
    color: '#BBB',
    marginBottom: 15,
  },
  plotContainer: {
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFB347',
    marginBottom: 10,
  },
  plot: {
    fontSize: 15,
    color: '#DDD',
    lineHeight: 22,
    textAlign: 'justify',
  },
  additionalInfoContainer: {
    marginTop: 20,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 15,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    color: '#FFB347',
    fontWeight: '600',
    marginRight: 10,
    width: 80,
  },
  infoValue: {
    color: '#DDD',
    flex: 1,
  },
  ratingsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  ratingCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1E1E1E",
    padding: 12,
    marginVertical: 5,
    borderRadius: 10,
  },
  ratingSource: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFB347",
  },
  ratingValue: {
    fontSize: 15,
    color: "#DDD",
  },
});
