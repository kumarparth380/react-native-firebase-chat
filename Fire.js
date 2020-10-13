import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCrshRotcFYQZ9VtvrXFhQHgLaVAziOiiE",
    authDomain: "react-native-chat-a247c.firebaseapp.com",
    databaseURL: "https://react-native-chat-a247c.firebaseio.com",
    projectId: "react-native-chat-a247c",
    storageBucket: "react-native-chat-a247c.appspot.com",
    messagingSenderId: "228003668049",
    appId: "1:228003668049:web:79c1a1d1ee7b7b682cd870"
};
  
class Fire {
    constructor(){
        this.init();
    }

    init = () => {
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
    }

    get db(){
        return firebase.firestore().collection('chats')
    }

    send = messages 
}