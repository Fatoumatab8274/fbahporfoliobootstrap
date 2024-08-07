// console.log('hello world!')

// var prompt = prompt( 'what is your name?')

// console.log(prompt) 


function verifyAge (age){
var age = prompt('what is your age?');
console.log(age)

  
  if (age < 18){
    alert('you are a minor')
  } else if (age >= 18 && age <= 60) {
    alert( 'You are an adult!')
  } else {
    alert('You are a senior citizen')
  }
}

  function uploadAndIdentifyPlant() {
    // get the photo from the frontend
    var photoInput = document.getElementById('photoInput');
    console.log(photoInput.files[0])

    // if no photo was selected and the user clicks submit 
    // let the user know they need to upload a photo first
    if (photoInput.files.length === 0) {
      alert('Please select a photo to upload');
      return;
    }

    //select first file from the filrs folder/arrayfrom the pload button 
    var selectedFile = photoInput.files[0];
  }

  