function crud() {
    const users = [];

    function create(user) {
        users.push(user);
    }

    function read(callback) {
        callback(users);
    }

    function del(user) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === user.name) {
                users.splice(i, 1);
            }
        }
    }

    function upd(user) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === user.name) {
                users[i] = user;
            }
        }
    }

    return {
        create,
        read,
        del,
        upd,
    };
}

export default crud;
