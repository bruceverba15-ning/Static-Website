function validatePartnerLogin() {
    let usernameInput = document.getElementById("partner-username");
    let passwordInput = document.getElementById("partner-password");
    let errorMessageElement = document.getElementById("partner-error-message");

    let username = usernameInput.value;
    let password = passwordInput.value;

    errorMessageElement.textContent = "";

    if (username === "erika" && password === "kyle") {
        alert("Partner Portal Login Successful! Welcome back, Erika!\nRedirecting to partner offers (simulation)...");
        return false;
    } else {
        errorMessageElement.textContent = "Incorrect username or password for Partner Portal.";
        return false;
    }
}
