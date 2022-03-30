const userImage = document.querySelector('.userImage');
const logOut = document.querySelector('.btn-logout');


userImage.addEventListener('mouseover', () =>{
    logOut.style.visibility ="visible";
})

userImage.addEventListener('mouseout', () =>{
    logOut.style.visibility ="hidden";
})

logOut.addEventListener('mouseover', () =>{
    logOut.style.visibility ="visible";
})
logOut.addEventListener('mouseout', () =>{
    logOut.style.visibility ="hidden";
})