Main - Hello word demo 
- init project through rect native CLI npx react-native@latest init RectHelloWorld
- upload to git by copy paste code in imported git link and then push all code to git

assignment2 
- Custom Font
 1) Added required font .ttf file in assets\fonts folder
 2) Created File “react-native.config.js” in main project folder and add following code
      if React Native Version ≥ 0.60 (Detail)
         module.exports = {
           project: {
             ios: {},
             android: {}, // grouped into "project"
              },
           assets: ["./assets/fonts/"], // stays the same
     };

      if React Native Version < 0.60
      "rnpm": {
       "assets": [
         "./assets/fonts/"
       ]
     }
3)  Install globally via adding code in terminal
   npm install -g react-native-asset or yarn global add react-native-asset

4) then add command in terminal
   Due to autolinking, link and unlink commands have been removed in React Native 0.69.
   Run in terminal
   For React Native Version ≥ 0.69
   npx react-native-asset
   For React Native Version< 0.69
   $ npx react-native link

      
