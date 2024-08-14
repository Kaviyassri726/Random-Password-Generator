// Update the displayed value of each range slider
document.getElementById('uc').addEventListener('input', function() {
    document.getElementById('ucValue').textContent = this.value;
});

document.getElementById('lc').addEventListener('input', function() {
    document.getElementById('lcValue').textContent = this.value;
});

document.getElementById('sc').addEventListener('input', function() {
    document.getElementById('scValue').textContent = this.value;
});

document.getElementById('nl').addEventListener('input', function() {
    document.getElementById('nlValue').textContent = this.value;
});

// Generate Password
document.getElementById('generate-button').addEventListener('click', function() {
    const uppercaseLength = parseInt(document.getElementById('uc').value);
    const lowercaseLength = parseInt(document.getElementById('lc').value);
    const specialCharLength = parseInt(document.getElementById('sc').value);
    const numberLength = parseInt(document.getElementById('nl').value);

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?/";

    let password = '';

    // Add Uppercase Letters
    for (let i = 0; i < uppercaseLength; i++) {
        password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
    }

    // Add Lowercase Letters
    for (let i = 0; i < lowercaseLength; i++) {
        password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
    }

    // Add Special Characters
    for (let i = 0; i < specialCharLength; i++) {
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    }

    // Add Numbers
    for (let i = 0; i < numberLength; i++) {
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Shuffle the password
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    // Display the generated password
    document.getElementById('passwordField').value = password;
});

// Copy Password to Clipboard
document.getElementById('copyBtn').addEventListener('click', function() {
    const passwordField = document.getElementById('passwordField');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});
