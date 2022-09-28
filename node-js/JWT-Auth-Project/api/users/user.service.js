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
            'select id,firstName,lastName,gender,email,number from registration',
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
            'select id,firstName,lastName,gender,email,number from registration where id = ?',
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }

        )
    },

    updateUser: (data,callBack) => {
        pool.query(
            'update registration set firstName =? , lastName =? , gender=? , email =? , password =? , number =? where id = ?',
            [
                
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id

            ], (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results)
            }
        );
    },

    deleteUser: (data, callBack) => {
        pool.query(
            'delete from registration where id = ?',
            [data.id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                } return callBack(null, results[0])
            }
        )
    }

};