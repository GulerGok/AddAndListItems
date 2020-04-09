import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyA9RkkH9VBst_7FpIsk5bxPDhGBKDe33rQ",
            authDomain: "app1-38a33.firebaseapp.com",
            databaseURL: "https://app1-38a33.firebaseio.com",
            projectId: "app1-38a33",
            storageBucket: "app1-38a33.appspot.com",
            messagingSenderId: "644588057976",
            appId: "1:644588057976:web:63d75aa2767d461795448d",
            measurementId: "G-7R79PK9VC7"
};
let app = Firebase.initializeApp(config);
export const db = app.database();