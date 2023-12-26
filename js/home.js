let userName = document.getElementById('username');
let logout = document.getElementById('logout');
let currentuser;
if (localStorage.getItem('currentUser') != null) {
    currentuser = localStorage.getItem('currentUser');
}

document.addEventListener('DOMContentLoaded', function () {

    userName.innerText = 'Welcome ' + currentuser;
});

logout.addEventListener('click', function () {
    window.location.href = 'index.html';
});