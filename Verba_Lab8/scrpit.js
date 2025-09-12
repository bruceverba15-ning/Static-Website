const backgroundImages = [
    'url("images/bg-palawan.jpg")',      
    'url("images/bg-banaue.jpg")',      
    'url("images/bg-vigan.jpg")',       
    'url("images/bg-mayon.jpg")',       
    'url("images/bg-sinulog.jpg")',     
    'url("images/bg-bohol.jpg")'        
];
let currentBackgroundIndex = 0;

function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    document.body.style.backgroundImage = backgroundImages[currentBackgroundIndex];
}

setInterval(changeBackground, 7000);

document.addEventListener('DOMContentLoaded', () => {
     if (backgroundImages.length > 0) {
        document.body.style.backgroundImage = backgroundImages[0];
     }
});


function showLogin() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("signupPage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";
    document.getElementById("login-error-message").textContent = "";
    document.getElementById("signup-error-message").textContent = "";
}

function showSignup() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("signupPage").style.display = "flex";
    document.getElementById("login-error-message").textContent = "";
    document.getElementById("signup-error-message").textContent = "";
}

function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessageElement = document.getElementById("login-error-message");

    if (username === "erika" && password === "kyle") {
        alert("Login successful! Maligayang Pagdating!");
        window.location.href = "home.html";
        return false;
    } else {
        errorMessageElement.textContent = "Mali ang username o password. Subukan muli.";
        return false;
    }
}

function validateSignup() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;
    let errorMessageElement = document.getElementById("signup-error-message");

    let usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,10}$/;

    errorMessageElement.textContent = "";

    if (!usernameRegex.test(username)) {
        errorMessageElement.textContent = "Username: 3-15 characters (letters, numbers, underscore only).";
        return false;
    }

    if (!passwordRegex.test(password)) {
         errorMessageElement.textContent = "Password: 6-10 characters, at least 1 uppercase letter and 1 number.";
        return false;
    }

    alert("Sign Up successful! Salamat sa pagrehistro!");
    console.log("Mock Signup:", { username: username });

    showLogin();

    return false;
}

function forgotPassword() {
    let hintQuestion = "Para matandaan ang password, anong pangalan ang laging kasama ni Erika sa aming halimbawa? (Hint: Starts with 'K')";
    let userAnswer = prompt(hintQuestion);

    if (userAnswer && userAnswer.trim().toLowerCase() === "kyle") {
        alert("Tama! Ang iyong password ay 'kyle'. Sa susunod, itago mo ito nang mabuti!");
    } else if (userAnswer) {
        alert("Pasensya na, hindi iyan ang tamang sagot. Subukan mong alalahanin pa.");
    } else {
        alert("Sige, kung maalala mo, bumalik ka lang.");
    }
}

function showAbout() {
    window.location.href = "about.html";
}

function showContact() {
    window.location.href = "contact.html";
}
