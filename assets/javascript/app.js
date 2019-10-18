//Firebase config
var firebaseConfig = {
    apiKey: "AIzaSyDjewj-BWyGfonky3_SpSUdOgoImgY0DT4",
    authDomain: "train-tracker-39fae.firebaseapp.com",
    databaseURL: "https://train-tracker-39fae.firebaseio.com",
    projectId: "train-tracker-39fae",
    storageBucket: "train-tracker-39fae.appspot.com",
    messagingSenderId: "117260855992",
    appId: "1:117260855992:web:14c9ab0e1c554bab01624d",
    measurementId: "G-EY66KTZE8Z"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

//Button event
$("#add-train-button").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#train-name").val().trim()
    var trainDestination = $("#train-destination").val().trim()
    var trainFirst = $("#train-first").val().trim()
    var trainFrequency = $("#train-frequency").val().trim()

    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFirst);
    console.log(trainFrequency);

    var newTrain = {
        name: trainName,
        destination: trainDestination,
        first: trainFirst,
        frequency: trainFrequency
    };

    database.ref().push(newTrain);

    alert("Train successfully added");

    $("#train-name").val("");
    $("#train-destination").val("");
    $("#train-first").val("");
    $("#train-frequency").val("");


});

//Database to table
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot)
})