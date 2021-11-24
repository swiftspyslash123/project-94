function addroom(){
       
        document.getElementById("roomname").value;
        firebase.database().ref("/").child(roomname).update({
        purpose: "adding roomname"
        });
        localStorage.setItem("roomname", roomname);
        window.location = "kwitter_page.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyAJxvO0Y_NZHgQLbZaHSlyqRlTrzr0TTsg",
    authDomain: "kwitter-7173f.firebaseapp.com",
    databaseURL: "https://kwitter-7173f-default-rtdb.firebaseio.com",
    projectId: "kwitter-7173f",
    storageBucket: "kwitter-7173f.appspot.com",
    messagingSenderId: "228475152585",
    appId: "1:228475152585:web:dd889b9bdc24b0ff58c518"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);     