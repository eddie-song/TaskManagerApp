# Task Manager App - Edward Song

## Setting up the app:

   -  Ensure that Node.js v16 or newer is installed
   -  Install Expo CLI uisng the command `npm install -g expo-cli`
   -  Download Android Studio from https://developer.android.com/studio
   -  Ensure that Android Vitural Device is selected on installation
   -  Add the Android/Sdk/platform-tools folder location to environment variables
   -  Once installed, open Android Studio and go to Device Manager
   -  Choose a device and press play to activate the Android Emulator
   -  Clone the github repository and cd into the folder
   -  Start the app using `npm start` and when prompted, type a

## Features of the app:

   -  Sample login and signup pages: Placeholder registration and authentication pages
   -  Create tasks: Add new tasks with titles and optional descriptions with real-time updating
   -  Completion toggling: Mark tasks as complete or incomplete to move them to separate lists
   -  Delete tasks: Remove unneeded tasks from the completed and incomplete task lists
   -  Task list: Separate task list views to show both complete and incomplete tasks

## Libraries

   -  Only react-native components were used in this project
   -  The only third party library used was expo-router
      -  This library was used for application navigation
      -  To switch between pages, urls were pushed to the router to change the page