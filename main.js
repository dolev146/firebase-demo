



document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  console.log(132);

  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
    var message = getInputVal("message");
    
    saveMessage(name,company, email, phone,message);
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

// same message to firebase

function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name,
    company,
    email,
    phone,
    message,
  });
}
