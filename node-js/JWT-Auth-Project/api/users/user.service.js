const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            'insert into registration(firstName, lastName, gender, email, password, number) values(?,?,?,?,?,?)',
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,

            ],
            (error, results, feild) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    getUsers: callBack => {
        pool.query(
            'select id,firstname,lastname,gender,email,number from registration',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }

        )
    },

    getUserById: (id,callBack) => {
        pool.query(
            'select id,firstname,lastname,gender,email,number from registration where id = ?',
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }

        )
    }
};