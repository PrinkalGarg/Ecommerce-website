import { compare, hash } from "bcrypt";
import Customer from "../models/Customer.js";
import jwt from "jsonwebtoken";
 
const createToken=async(id)=>
{
  const token=  jwt.sign({id},"12345678");
  return token;
}
const loginUser = async (req, res) => {
  try {
      const { email, password } = req.query;

      // Validate input
      if (!email || !password) {
          return res.status(400).json({ message: "Email and password are required" });
      }

      // Find user in the database
      const user = await Customer.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      // Compare password
      const isMatch = await compare(password, user.password);
      if (!isMatch) {
          return res.status(401).json({ message: "Invalid email or password" });
      }

      // Respond with success
      const token= await createToken(user._id);
      return res.status(200).json({ message: "Login successful" , token });
  } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ message: "An error occurred during login. Please try again later." });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, password, email } = req.query; // Extract query parameters
   

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({ error: "All fields are required: name, email, password" });
    }

    // Check if the email is already in use
    const exists = await Customer.findOne({ email });
    if (exists) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Validate password length
    if (password.length < 8) {
      return res.status(400).json({ error: "Password must be at least 8 characters long" });
   
      
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);

    // Create the new user object
    const newUser = {
      name,
      email,
      password: hashedPassword,
    };

    // Save the user to the database
    const result = await Customer.create(newUser);
   
    //Creating Token
    const token= await createToken(result._id);
    

    // Respond with success
    return res.status(201).json({ message: "User registered successfully", userId: result._id,token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "An error occurred while registering the user" });
  }
};

const adminLogin = async (req, res) => {
  res.json("Hello");
};

export { loginUser, registerUser, adminLogin };
