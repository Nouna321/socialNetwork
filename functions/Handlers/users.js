const { admin, db } = require('../Util/admin')
const { auth } = require('../Util/init')

exports.signUp = (req, res) => {
    let signUpinfo = {
        firstname: req.body.username,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    }
    console.log(signUpinfo.email)

    db.collection('Users')
        .doc(signUpinfo.username)
        .get()
        .then((user) => {
            if (user.exists) {
                return res.status(500).json({ general: 'username already taken' })
            } else {
                return auth
                    .createUserWithEmailAndPassword(signUpinfo.email, signUpinfo.password)
                    .then((data) => {
                        let userId = data.user.uid
                        let newUser = {
                            FirstName: signUpinfo.firstname,
                            LastName: signUpinfo.lastname,
                            creatAt: new Date().toISOString(),
                            Email: signUpinfo.email,
                            Password: signUpinfo.password,
                            isonline: false,
                            uid: userId,
                            username: signUpinfo.username,
                        }
                        db.collection('Users').doc(signUpinfo.user).set(newUser)
                        return res.status(200).json({ utilisateur: 'profile crée avec succés' })
                    })
                    .catch((e) => {
                        console.error(e)
                        res.status(500).send(e)
                    })
            }
        })
        .catch((e) => {
            console.log(e)
            res.status(500).json({ error: 'error while fetching' })
        })
}

exports.signIn = (req, res) => {
    const userInfo = {
        email: req.body.email,
        password: req.body.password,
    }

    auth.signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((data) => {
            let currentToken = data.user.getIdToken()
            return currentToken
        })
        .then((Token) => {
            const idToken = Token
            console.log('bien joué ')
            res.status(200).send(idToken)
        })
        .catch((e) => {
            console.error(e)
            return res.status(500).json({ general: 'wrong password or email' })
        })
}

exports.followUser = (req, res) => {
    let newFollow = {
        following: req.body.follower,
        followed: req.body.following,
        status: 'pending',
        date: new Date().toISOString(),
    }
    db.collection('follows')
        .add(newFollow)
        .then(() => {
            return res.status(200).json({ success: ' following request sent' })
        })
        .catch((e) => {
            console.error(e)
            return res.status(500).json({ error: 'something went wrong' })
        })
}

exports.unFollow = (req, res) => {
    let follower = req.body.follower
    let following = req.body.following

    db.collection('follows')
        .where('following', '==', follower)
        .where('followed', 'in', [following, following])
        .get()
        .then((doc) => {
            doc.forEach((element) => {
                element.ref.delete()
            })
            return res.status(200).json({ sucess: 'unfollowed succesfuly' })
        })
        .catch((e) => {
            return res.status(500).json({ error: 'something wrong happened' })
        })
}

exports.getfollowingUsers = (req, res) => {
    let following = []
    let username = req.body.follower
    db.collection('follows')
        .where('following', '==', username)
        .onSnapshot((data) => {
            /*data.forEach((doc) => {
        let following = [];
        db.collection("Users")
          .where("username", "==", doc.data().followed)
          .onSnapshot((QuerySnapshot) => {
            let changes = QuerySnapshot.docChanges();
            for (change in changes) {
              following.push(1);
              console.log(following);
            }
          });*/
            res.send(data)
            /*(snapshot) => {
            snapshot.forEach((users) => {
              let followedUser = {
                username: users.data().username,
                isonline: users.data().isonline,
              };
              following.push(followedUser);
            });*/
        })
}

// exports.signGoogle=(req,res) => {
//   var user = result.user;
//     var accessToken = result.credential.accessToken;
//     const name = user.displayName.split("");
//     const username = name[0].concat(name[1]);
//     admin.firestore
//   db.collection("Users")
//     .doc(user.email)
//     .get()
//     .then((user) => {
//       const newuser = {
//         userId: user.uid,
//         email: user.email,
//         firestname: name[0],
//         lastname: name[1],
//         username: username,
//         createdAt: new Date().toISOString(),
//         imageUrl: null,
//         bio: null,
//         website: null,
//         location: user.hometown,
//       };

//     })
//     .catch((error) => {
//       var errorCode = error.code;
//         var errorMessage = error.message;
//         var email = error.email;
//         var credential = error.credential;
//         return error;
//     });
// };
