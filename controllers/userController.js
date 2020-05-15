// Code on this page was originally copied from Jonathan's For Rover app.
// We will be adjusting it for our app.

const express = require("express");
const router = express.Router();
const db = require("../models");
// const jwt = require("jsonwebtoken");

// /**
//  * Root POST route to create a new user.
//  */

// const app = express();
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(express.json());

router.post("/api/users", (req, res) => {
  console.log("Hit the post route");
  console.log(req.body);
  db.userData
    .create(req.body)
    .then((dbUsers) => {
      res.json(dbUsers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

// router.post("/api/users", (req, res) => {
//   // Need to pass all of the info into the new user's profile
//   // that we can from the front end info
//   // Need to add skills
//   const email = req.body.email ? req.body.email.trim() : "";
//   const password = req.body.password ? req.body.password.trim() : "";
//   const skills = req.body.skills;

//   if (email && password) {
//     db.userData.create({
//       email,
//       password,
//       location,
//       skills
//     })
//       .then(userResult => {
//         res.json(userResult);
//       })

//       // Jonathan's .then for For Rover below:
//     //       .then(async (newUser) => {
//     //         const token = await jwt.sign({
//     //           email: newUser.email,
//     //           id: newUser.id,
//     //           exp: Math.floor(Date.now() / 1000) + 60 * 60,
//     //         },
//     //         process.env.REACT_APP_SECRET_KEY
//     //         );
//     //         console.log(token);
//     //         await res.json({
//     //           success: true,
//     //           data: token,
//     //         });
//     //       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500);
//         res.json({
//           success: false,
//           message: "Failed to create new user.",
//         });
//       });
//   } else {
//     res.status(500).json({
//       success: false,
//       message: "Please enter a valid username and password.",
//     });
//   }
// });

// router.put("/:id", (req, res) => {
//   console.log("req.body from userController.js router.put is logged below");
//   console.log(req.body);
//   const {
//     name,
//     breed,
//     age,
//     location,
//     imageURL
//   } = req.body;
//   const {
//     id
//   } = req.params;
//   db.User.update({
//     name: name,
//     breed: breed,
//     age: age,
//     location: location,
//     imageURL: imageURL,
//   }, {
//     where: {
//       id: req.params.id
//     }
//   })
//     .then((rowsUpdated) => {
//       res.json({
//         success: true,
//         data: rowsUpdated,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         success: false,
//         message: "Failed to save user data.",
//       });
//     });
// });

// module.exports = router;