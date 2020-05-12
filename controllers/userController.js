// Code on this page was originally copied from Jonathan's For Rover app.
// We will be adjusting it for our app.

const express = require("express");
const router = express.Router();
const db = require("../models");
// const jwt = require("jsonwebtoken");

// /**
//  * Root POST route to create a new user.
//  */

// // This is a POST, because we're creating a new workout
// router.post("/api/workouts", (req, res) => {
//   Workout.create(req.body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

router.post("/", (req, res) => {
  // Need to pass all of the info into the new user's profile
  // that we can from the front end info
  // Need to add skills
  const email = req.body.email ? req.body.email.trim() : "";
  const password = req.body.password ? req.body.password.trim() : "";

  if (email && password) {
    db.userData.create({
      email,
      password
    })
      .then(userResult => {
        res.json(userResult);
      })

      // Jonathan's .then for For Rover below:
    //       .then(async (newUser) => {
    //         const token = await jwt.sign({
    //           email: newUser.email,
    //           id: newUser.id,
    //           exp: Math.floor(Date.now() / 1000) + 60 * 60,
    //         },
    //         process.env.REACT_APP_SECRET_KEY
    //         );
    //         console.log(token);
    //         await res.json({
    //           success: true,
    //           data: token,
    //         });
    //       })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          success: false,
          message: "Failed to create new user.",
        });
      });
  } else {
    res.status(500).json({
      success: false,
      message: "Please enter a valid username and password.",
    });
  }
});

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
