function buildUsersStore () {
    let users = [
        {id: "U1",
         name: "Shagun",
         email: "shagun@gmail.com",
         pwd: "Y2hvY29mcmFwcGU="  //chocofrappe
        },
        {id: "U2",
         name: "Komal",
         email: "komal@hotmail.com",
         pwd: "Z3JlZW50ZWE=" //greentea
        },
        {id: "U3",
         name: "Rishabh",
         email: "rishabh@gmail.com",
         pwd: "bGVtb25qdWljZQ==" //lemonjuice
        },
        {id: "U4",
         name: "Yash",
         email: "yash@gmail.com",
         pwd: "YmxhY2tjb2ZmZWU=" //blackcoffee
        }
        ];

    const encodeBase64 = (data) => {
            return Buffer.from(data).toString('base64');
    }
    
    // const decodeBase64 = (data) => {
    //         return Buffer.from(data, 'base64').toString('ascii');
    // }

    return {
        getUserById: id => {
            foundUser = users.find(u => u.id === id);
            if(foundUser) {
                return {
                    id: foundUser.id,
                    name: foundUser.name,
                    email: foundUser.email
                }
            }
        },
        getUserByEmail: email => {
            foundUser = users.find(u => u.email == email);
            if(foundUser) {
                return {
                    id: foundUser.id,
                    name: foundUser.name,
                    email: foundUser.email
                }
            }
        },
        authenticateUser: (email, pwd) => {
            foundUser = users.find(u => u.email == email);
            if(!foundUser || encodeBase64(pwd) !== foundUser.pwd) {
                return {
                    error : "Unauthorized"
                }
            }
            return {
                id: u.id,
                name: u.name,
                email: u.email
            }
        }
    }
}

const userStore = buildUsersStore();
module.exports = userStore;