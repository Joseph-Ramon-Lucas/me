let socials = document.getElementById("socialsButton");
let about = document.getElementById("aboutButton");

let buttonDiv = document.getElementById("buttonDiv")

let socialSelect = true;
let aboutSelect = false;


if (document.URL.includes("about")){
    about.classList.toggle("isActive");
}
else {
    socials.classList.toggle("isActive");
}


// just realized this is a MPA so state isn't preserved lmao
// about.addEventListener("click", () => {
    
//     console.log(socialSelect);
//     if (socialSelect){
//         socials.classList.toggle("isActive")
//         about.classList.toggle("isActive");

//         socialSelect = false;
//         aboutSelect = true

//         console.log(socials.classList);
//     }
//     else{
//         socialSelect = true;
//         aboutSelect = false;
//     }   
// })