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
 }
