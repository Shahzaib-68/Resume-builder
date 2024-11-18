const Add_NEW_FIELD = () => {
  let newElement = document.createElement("textarea");
  newElement.classList.add("form-control");
  newElement.classList.add("weFeild");
  newElement.classList.add("professional-input");
  newElement.setAttribute("placeholder", "Enter Here");

  let addButton = document.getElementById("weFeildButton");
  let addbefore = document.getElementById("workEx");

  addbefore.insertBefore(newElement, addButton);
};

const NEW_FEILD = () => {
  let moreElement = document.createElement("textarea");
  moreElement.classList.add("form-control");
  moreElement.classList.add("eqFeild");
  moreElement.classList.add("professional-input");
  moreElement.setAttribute("placeholder", "Enter Here");

  let more_add_button = document.getElementById("eqFeildButton");
  let more_add_before = document.getElementById("acadmicQlification");

  if (more_add_before && more_add_button) {
    more_add_before.insertBefore(moreElement, more_add_button);
  } else {
    console.error("Elements not found in the DOM");
  }
};

// contactT
// addressT
// ================================================
// generateCV

function generateCV() {
  //  Personal info

  // USERNAME
  let nameFeild = document.getElementById("USER_NAME").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameFeild;
  document.getElementById("nameT2").innerHTML = nameFeild;

  // CONTACT
  let Contact = document.getElementById("Contact").value;
  let contactT = document.getElementById("contactT");
  contactT.innerHTML = Contact;

  // Address
  let Address = document.getElementById("Address").value;
  let addressT = document.getElementById("addressT");
  addressT.innerHTML = Address;

  //  our links

  // Facebook

  let Facebook = document.getElementById("Facebook").value;
  let fbT = document.getElementById("fbT");
  fbT.innerHTML = Facebook;

  //   Instagram

  let Instagram = document.getElementById("Instagram").value;
  let instaT = document.getElementById("instaT");
  instaT.innerHTML = Instagram;

  // LinkedIn

  let LinkedIn = document.getElementById("LinkedIn").value;
  let linkedT = document.getElementById("linkedT");
  linkedT.innerHTML = LinkedIn;

  // profeesional info

  document.getElementById("ObjectiveT").innerHTML =
    document.getElementById("Objective").value;

  // Worker Experience

  let Work_Experience = document.getElementsByClassName("weFeild");
  let str = "";

  for (e of Work_Experience) {
    str += `<li> ${e.value} </li>`;
  }

  //   Acadmic Quilification

  let AcadmicQ = document.getElementsByClassName("eqFeild");
  let str1 = "";

  for (A of AcadmicQ) {
    str1 += `<li> ${A.value} </li>`;
  }

  document.getElementById("ExperienceT").innerHTML = str;
  document.getElementById("AcadmicT").innerHTML = str1;

  //  this is work for setting image

  let file = document.getElementById("imgFeild").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  reader.onloadend = function (){
    document.getElementById("img_template").src  = reader.result
  }

  //  this is work for setting image

  document.getElementById("cv-template").style.display = "grid";
  document.getElementById("cv-from").style.display = "none";
  document.getElementById("prbutton").style.display = "block";
}

// print cv

function PrintCV() {
  window.print();
}
