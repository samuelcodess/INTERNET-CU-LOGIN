function continueToNextPage() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are correct (this is just an example)
    // Replace this with your authentication logic
    var isAuthenticated = authenticate(username, password);

    if (isAuthenticated) {
        // Redirect to another page after successful authentication
        window.location.href = "firewall_auth_successful.html";
    } else {
        // Display an error message or take appropriate action if authentication fails
        alert("Authentication failed. Please try again.");
    }
}

function authenticate(username, password) {
    // Example authentication logic with database lookup
    // This is a simplified example. In a real application, you would use server-side code to interact with a database.
    var users = {
        "john": "password123",
        "alice": "password456",
        "bob": "password789"
    };

    // Check if the username exists in the users object
    if (username in users) {
        // If the username exists, check if the password matches
        return users[username] === password;
    } else {
        // If the username doesn't exist, authentication fails
        return false;
    }
}

