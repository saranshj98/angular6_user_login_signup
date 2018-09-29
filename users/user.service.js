const db        = require('../_helpers/db');
const User      = require('../app/model/user')

module.exports = {
    authenticate
};

async function authenticate({ username, password }) {
    const user = User.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}