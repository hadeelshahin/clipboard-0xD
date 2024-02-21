/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

const button = document.querySelector("button");

const textP = document.querySelector("p");


button.addEventListener("click", () => {
  const text = textP.textContent;
  if(navigator.clipboard){
    navigator.clipboard
    .writeText(text)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log(error));   //this code only runs on the supported browsers
  }
  else{
    alert('Feature is not available, please copy manually !');
  }
  
});
