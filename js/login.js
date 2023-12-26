let signinEmail = document.getElementById('signinEmail');
let signinPassword = document.getElementById('signinPassword');
let incorrect = document.getElementById('incorrect');
let loginBtn = document.getElementById('loginbtn');
let i;
let currentuser;
let usersList = [];

if (localStorage.getItem('usersAccounts') != null) {
    usersList = JSON.parse(localStorage.getItem('usersAccounts'));
}
if (localStorage.getItem('currentUser') != null) {
    currentuser = localStorage.getItem('currentUser');
}

loginBtn.addEventListener('click', function () {
    let userFound = false;

    for (i = 0; i < usersList.length; i++) {
        if (usersList[i].userEmail == signinEmail.value && usersList[i].userPassword == signinPassword.value) {
            userFound = true;
            currentuser = usersList[i].userName;
            localStorage.setItem('currentUser', currentuser);
            window.location.href = 'authorized.html';
            break;
        }
    }

    if (!userFound) {
        incorrect.classList.remove('d-none');
        incorrect.style.opacity = 1;

        setTimeout(function () {
            fadeOut(incorrect);
        }, 2000);
    }
});




function fadeOut(element) {
    var opacity = 1;
    var fadeEffect = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        }
        else {
            clearInterval(fadeEffect);
            element.classList.add('d-none');
        }
    }, 50);
}
