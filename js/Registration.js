let signupUserName = document.getElementById('signupName');
let signupUserEmail = document.getElementById('signupEmail');
let signupUserPassword = document.getElementById('signupPassword');
let registerBtn = document.getElementById('registrationbtn');
let success = document.getElementById('success');
let registerFailed = document.getElementById('registerfailed');
let exist = document.getElementById('exist');
let i;
let usersList = [];

if (localStorage.getItem('usersAccounts') != null) {
    usersList = JSON.parse(localStorage.getItem('usersAccounts'));
}

registerBtn.addEventListener('click', function () {
    if (registervalidion()) {
        var user = {
            userName: signupUserName.value,
            userEmail: signupUserEmail.value,
            userPassword: signupUserPassword.value
        };

        let userExists = false;

        for (i = 0; i < usersList.length; i++) {
            if (usersList[i].userEmail == signupUserEmail.value) {
                userExists = true;
                break;
            }
        }

        if (!userExists) {
            usersList.push(user);
            localStorage.setItem('usersAccounts', JSON.stringify(usersList));
            success.classList.remove('d-none');
            success.style.opacity = 1;

            setTimeout(function () {
                fadeOut(success);
            }, 2000);
        } else {
            exist.classList.remove('d-none');
            exist.style.opacity = 1;

            setTimeout(function () {
                fadeOut(exist);
            }, 2000);
        }
    }
});

function fadeOut(element) {
    var opacity = 1;
    var fadeEffect = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
            element.classList.add('d-none');
        }
    }, 50);
}

function registervalidion() {
    const emailRegex = /^[a-zA-Z]{3,}[_]*@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;
    const usernameRegex = /^[a-zA-Z]{3,20}[0-9_-]{0,5}$/;

    if (
        signupEmail.value.trim().length == 0 ||
        signupName.value.trim().length == 0 ||
        signupUserPassword.value.trim().length == 0
    ) {
        registerFailed.classList.remove('d-none');
        registerFailed.style.opacity = 1;

        setTimeout(function () {
            fadeOut(registerFailed);
        }, 2000);

        return false;
    }

    if (
        emailRegex.test(signupUserEmail.value) == false ||
        passwordRegex.test(signupUserPassword.value) == false ||
        usernameRegex.test(signupUserName.value) == false
    ) {
        registerFailed.classList.remove('d-none');
        registerFailed.style.opacity = 1;

        setTimeout(function () {
            fadeOut(registerFailed);
        }, 2000);

        return false;
    }
    else {
        return true;
    }
}