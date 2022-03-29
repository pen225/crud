const userImage = document.querySelector('.userImage');
const logOut = document.querySelector('.btn-logout');


userImage.addEventListener('mouseover', () =>{
    logOut.style.display ="block";
})

userImage.addEventListener('mouseout', () =>{
    logOut.style.display ="none";
})

logOut.addEventListener('mouseover', () =>{
    logOut.style.display ="block";
})
logOut.addEventListener('mouseout', () =>{
    logOut.style.display ="none";
})