let socials = document.getElementById("socialsButton");

let buttonDiv = document.getElementById("buttonDiv")

let socialSelect = false;
socials.addEventListener("click", () => {
    
    console.log(socialSelect);

    if (!socialSelect){
        buttonDiv.classList.toggle("isActive")
        socialSelect = true;
    }
   
})