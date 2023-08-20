const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const Profile = require("../models/Profile");
const JobProfile = require("../models/JobProfile");
const InternProfile = require("../models/InternProfile");
const jwt_secret = "skdksnksdksn";
// const bodyParser = require("body-parser");

//crate a user using : post "/api/auth". doent required auth

router.post(
  "/create",
  [
    body("Username").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // if there are any errors, return bad request

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // chech weather the user with this email exists already

      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ errors: "mail already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);

      //   create user
      user = await User.create({
        Username: req.body.Username,
        email: req.body.email,
        password: secpass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const jwtData = jwt.sign(data, jwt_secret);
      console.log(jwtData);

      //   res.json(user);
      res.json({ token: jwtData });
    } catch (error) {
      console.error(error.messsage);
      res.status(500).send("internal server occurs");
    }
  }
);
//Authentication a user using : post "/api/auth/login". no login required

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "pls trt to login with correct crendentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, jwt_secret);
      res.json({ authtoken });
    } catch (error) {
      console.error(error.messsage);
      res.status(500).send("internal server occurs");
    }
  }
);
//get loggin user details using post "/api/auth/getuser".  login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.messsage);
    res.status(500).send("internal server occurs");
  }
});

router.post(
  "/Profile_create",
  [
    body("Name").notEmpty(),
    body("Srcollege").notEmpty(),
    body("srmarks").notEmpty().isNumeric(),
    body("Jrcollege").notEmpty(),
    body("jrmarks").notEmpty().isNumeric(),
    body("School").notEmpty(),
    body("schoolmarks").notEmpty().isNumeric(),
  ],
  async (req, res) => {
    // if there are any errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // create profile
      const profile = await Profile.create({
        Name: req.body.Name,
        Srcollege: req.body.Srcollege,
        srmarks: req.body.srmarks,
        Jrcollege: req.body.Jrcollege,
        jrmarks: req.body.jrmarks,
        School: req.body.School,
        schoolmarks: req.body.schoolmarks,
      });

      const data = {
        profile: {
          id: profile.id,
        },
      };
      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
router.get("/profiles", async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).send("Internal server error");
  }
});
router.post(
  "/Job_create",
  [
    body("CurrentJob").notEmpty(),
    body("Position").notEmpty(),
    body("Salary").notEmpty(),
    body("Experiance").notEmpty(),
  ],
  async (req, res) => {
    // if there are any errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // create Job
      const job = await JobProfile.create({
        CurrentJob: req.body.CurrentJob,
        Position: req.body.Position,
        Salary: req.body.Salary,
        Experiance: req.body.Experiance,
      });

      const data = {
        job: {
          id: job.id,
        },
      };
      res.json(job);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
router.post(
  "/Intern_create",
  [
    body("CurrentJob").notEmpty(),
    body("Position").notEmpty(),
    body("Salary").notEmpty(),
    body("TimePeriods").notEmpty(),
  ],
  async (req, res) => {
    // if there are any errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // create Job
      const intern = await InternProfile.create({
        CurrentJob: req.body.CurrentJob,
        Position: req.body.Position,
        Salary: req.body.Salary,
        TimePeriods: req.body.TimePeriods,
      });

      const data = {
        intern: {
          id: intern.id,
        },
      };
      res.json(intern);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
module.exports = router;
