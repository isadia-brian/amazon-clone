const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const nodeMailer = require("nodemailer");
const crypto = require("crypto");
const mongoose = require("mongoose");

const User = require("./models/user");
const Order = require("./models/order");

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://isadiabrianlusigi:isadia2024@cluster0.fj6f7yt.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => console.error("Error connecting to the DB", error));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//function to send verification email

// const sendVerificationEmail = async (email, verificationToken) => {
//   //create nodemailer transport

//   const transporter = nodeMailer.createTransport({
//     //configure email service
//     service: "gmail",
//     auth: {
//       user: "isadiabrianlusigi@gmail.com",
//       pass: "awaa mela avtw jlko",
//     },
//   });

//   //compose the email message

//   const mailOptions = {
//     from: "amazon.com",
//     to: email,
//     subject: "Email Verification",
//     text: `Someone recently added your email to amazon.com, if this was you, please click the following link to verify your email : http://localhost:8000/verify/${verificationToken} `,
//   };

//   //send email
//   try {
//     await transporter.sendMail(mailOptions);
//   } catch (error) {
//     console.log("Error sending verification email", error);
//   }
// };

//endpoints

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username);

    //check if fields are all present and if email is already registered

    if (!username || !password || !email) {
      console.log("One or more fields are missing");
      res.status(500).json({ message: "Fill in all fields" });
    }

    let existingUser;
    existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("This user already exists");
      return res.status(400).json({ message: "Email already taken" });
    }

    //create new user

    const newUser = new User({ username, email, password });

    // generate & store verification token

    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save user to database

    await newUser.save();
    return res.status(200).json({ message: "Successfully signed up" });

    //send verification email to new user

    // sendVerificationEmail(newUser.email, newUser.verificationToken);
  } catch (error) {
    console.log("Error registering", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

//endpoint to send verification
// app.get("/verify/:token", async (req, res) => {
//   try {
//     const token = req.params.token;

//     //find the user with verification token

//     const user = await User.findOne({ verificationToken: token });

//     if (!user) {
//       return res.status(400).json({ message: "Invalid verification token" });
//     }
//     //Mark the user verified

//     user.verified = true;
//     user.verificationToken = undefined;

//     await user.save();
//     return res.status(200).json({ message: "Email verified successfully" });
//   } catch (error) {
//     res.json(500).json({ message: "Email Verification failed" });
//   }
// });
