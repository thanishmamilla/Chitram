# Movie App 🎬

THE ANDROID APK FILE IS HOSTED AT :-   https://www.upload-apk.com/jwjpNdPTtJYpHM9


A React Native movie search app using the OMDB API. Users can search for movies, view details, and like their favorite movies.
Steps to search movie


Step1:   Click on search enter movie name click enter
Step2: Click on your movie from rendered movies it will display in another screen
Step3: The bottom navigation bar is for showing your liked movies 
Step 4: You can like a movie by pressing on the like button top right ocrner on moviedetails page


## 📌 Features
- 🔍 Search for movies
- 📄 View movie details
- ❤️ Like movies and view liked list
- 🎨 Smooth UI with bottom navigation

---

## 🚀 Getting Started

### **1️⃣ Prerequisites**
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Android Studio (For Android Emulator) or Xcode (For iOS Simulator)
- A real device or emulator
- [Git](https://git-scm.com/)

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/movie-app.git
cd movie-app
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

---

## 🔑 API Configuration
This app uses the OMDB API. You need an API key to fetch movie data.
1. Get a free API key from [OMDB](https://www.omdbapi.com/apikey.aspx).
2. Update the `apikey` in the fetch URL inside `HomeScreen.js`:
   ```js
   const response = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${moviename}`);
   ```

---

## 🏗️ Running the App

### **For Android**
1. Start the Metro Bundler:
   npx react-native start
   
2. In a new terminal, run:
   ```sh
   npx react-native run-android
   ```

### **For iOS (MacOS Only)**
1. Install CocoaPods dependencies:
   ```sh
   npx pod-install
   ```
2. Start the Metro Bundler:
   ```sh
   npx react-native start
   ```
3. Run the app on iOS:
   ```sh
   npx react-native run-ios
   ```

---

## 📂 Project Structure
```
movie-app/
│── app/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── MovieDetailScreen.js
│   ├── assets/
│   │   ├── no-image.jpg
│   ├── App.js
│── package.json
│── README.md
```

---


## 💡 Additional Commands
- **Clean Build for Android:**
  ```sh
  cd android && ./gradlew clean && cd ..
  ```
- **Run ESLint Check:**
  ```sh
  npm run lint
  ```
- **Run the app in debug mode:**
  ```sh
  npx react-native run-android --variant=debug
  ```

---

Steps to search movie
Step1:   Click on search enter movie name click enter
Step2: Click on your movie from rendered movies it will display in another screen
Step3: The bottom navigation bar is for showing your liked movies 
Step 4: You can like a movie by pressing on the like button top right ocrner on moviedetails page

---

### 📧 Need Help?
If you have any issues or questions, feel free to open an issue on GitHub or reach out to me.

Happy coding! 🚀

