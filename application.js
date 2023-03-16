// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZjGJ4vdL2G8GAdatefI93UwhQGmsPoys",
  authDomain: "vezeza-7b5a2.firebaseapp.com",
  databaseURL: "https://vezeza-7b5a2-default-rtdb.firebaseio.com",
  projectId: "vezeza-7b5a2",
  storageBucket: "vezeza-7b5a2.appspot.com",
  messagingSenderId: "361681784497",
  appId: "1:361681784497:web:ab22b7d842e3cf7a045c90",
  measurementId: "G-6GPXJ6962G"
};



firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('vezeza').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fullname = getInputVal('fullname');
  // var Date = getInputVal('Date');
  var email = getInputVal('email');
  var phone = getInputVal('phone');

  // var time= getInputVal('time');
  var resume = getInputVal('resume');
	
  var skills = getInputVal('skills');

  // Save message
  saveMessage(fullname, email, phone,resume, skills );

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('vezeza').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fullname, email, phone,resume, skills){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fullname: fullname,
    // Date:Date,
    email:email,
    phone:phone,
    // time:time,
    resume: resume,
    skills:skills
  });
}






// const form = document.getElementById('application-form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
  
//   // Code to handle form submission goes here
  
  
//   alert('Job Applied successfully!');
// });
