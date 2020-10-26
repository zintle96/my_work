var config = {
    apiKey: "AIzaSyCTskJbcUzZ91HvuOWSHfY6j3yi0c3GmU0",
    authDomain: "contactform-861a8.firebaseapp.com",
    databaseURL: "https://contactform-861a8.firebaseio.com",
    projectId: "contactform-861a8",
    storageBucket: "contactform-861a8.appspot.com",
    messagingSenderId: "409009076813",
    appId: "1:409009076813:web:5e27104600b707128aba04",
    measurementId: "G-6S09KRS98N"
  };

  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var fullname = getInputVal('fullname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var subject = getInputVal('subject');
  
    // Save message
    saveMessage(fullname, email, phone, subject);
  
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fullname, email, phone, subject){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fullname: fullname,
      email:email,
      phone:phone,
      subject:subject
    });
  }
