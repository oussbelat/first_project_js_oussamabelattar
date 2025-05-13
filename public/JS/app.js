let users = [];

for (;;) {
    let choice = prompt(`
Choose:
- sign up
- login
- change the password
(Type "exit" to stop)
    `).toLowerCase();

    if (choice === 'exit') {
        alert('Exit');
        break;
    }

    if (choice === 'sign up') {
        let name = prompt('Enter your full name:').trim();
        if (/[\d@#\-\+\*/]/.test(name) || name.split(' ').join('').length < 5) {
            alert('It must not  numbers or special characters, and 5 characters long');
            continue;
        }
        name = name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        let email = prompt('Enter your email:').trim().toLowerCase();
        if (email.includes(' ') || email.length < 10 || email.split('@').length !== 2 || users.some(user => user.email === email)) {
            alert(' duplicate email.  10 characters long no spaces and  one "@".');
            continue;
        }

        let age = prompt('Enter your age:').trim();
        if (!/^\d{1,2}$/.test(age) || age < 1 || age > 99) {
            alert(' a number between 1 and 99.');
            continue;
        }

        let password = prompt('Enter your password:').trim();
        if (password.includes(' ') || !/[@#\-\+\*/]/.test(password) || password.length < 7) {
            alert('  7 character long and(@, #, -, +, *, /).');
            continue;
        }

        let confirmPassword = prompt('Confirm your password:').trim();
        if (confirmPassword !== password) {
            alert('Passwords do not match.');
            continue;
        }

        users.push({ name, email, age, password });
        alert('Sign up successful!');
        console.log(users);
    }

    if (choice === 'login') {
        let email = prompt('Enter your email:').trim().toLowerCase();
        let password = prompt('Enter your password:').trim();
        let user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login successful!');
        } else {
            alert('Invalid email or password.');
        }
    }

    if (choice === 'change the password') {
        let email = prompt('Enter your email:').trim().toLowerCase();
        let user = users.find(user => user.email === email);

        if (!user) {
            alert('Email not found.');
            continue;
        }

        let newPassword = prompt('Enter new password:').trim();
        if (newPassword.includes(' ') || !/[@#\-\+\*/]/.test(newPassword) || newPassword.length < 7) {
            alert(' It must be  7 characters long and i special character (@, #, -, +, *, /).');
            continue;
        }

        user.password = newPassword;
        alert('Password updated successfully!');
    }
}

 