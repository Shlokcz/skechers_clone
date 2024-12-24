import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt";

const app = express();
const PORT = 5000;

//connection
mongoose
  .connect("mongodb://localhost:27017/Skechers")
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Database connection error:", error));

//schemas
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const shoeSchema = new mongoose.Schema({
  gender: { type: String },
  title: { type: String },
  price: { type: String },
  src: { type: String },
});

//models
const userModel = mongoose.model("users", userSchema);
const shoeModel = mongoose.model("shoes", shoeSchema);

// console.log(req.body);

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("api is in progress");
// });

app.get("/", async (req, res) => {
  try {
    // const limit = parseInt(req.query.limit) || 20; // Default to 20 if no limit is provided
    const shoes = await shoeModel.find(); // Fetch all shoes from MongoDB
    res.json(shoes); // Send the data as JSON
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch shoes" });
  }
});

// app.post("/login", async (req, res) => {

//   const { email, password } = req.body; // Destructure the fields from the request body

//   let user = await userModel.findOne({email, password});
//   if(user){
//       res.send({result: "successfully logged-in"});
//   }
//   else{
//     res.send({result: "User doesn't exist, please signup/register"});
//   }
// });

app.post("/login", async (req, res) => {
  const { email, password } = req.body; // Destructure the fields from the request body

  try {
    // Search only by email and password
    let user = await userModel.findOne({ email });

    if (user) {
      // console.log(user);
      res.send({ result: "successfully logged-in" });
    } else {
      res.send({ result: "User doesn't exist, please signup/register" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ result: "Internal server error" });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log(name, email, password);

    let checkUser = await userModel.findOne({ email });
    if (checkUser) {
      return res
        .status(400)
        .send({ result: "user already exists, please login" });
    }

    //Hasing the passwords
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // const comparison = bcrypt.compare(password, hashedPassword)
    // console.log(comparison);

    let user = new userModel({ name, email, password: hashedPassword });
    const saveduser = await user.save();

    if (saveduser) {
      return res.status(201).send({ result: "user registered successfully" });
    } else {
      return res.status(500).send({ result: "user registration failed" });
    }
  } catch (error) {
    // console.error("Error during signup:", error);
    return res.status(500).send({ error: "some internal error occured" });
  }
});

app.listen(PORT, (req, res) => {
  console.log("server is running");
});
