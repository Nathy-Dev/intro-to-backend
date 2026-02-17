import { User } from "../models/user.model.js";

// lets register a user
const registerUser = async (req, res) => {
    try {

        // Basic validation
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        // Check if user already exists
        const userExist = await User.findOne({ email: email.toLowerCase() });

        if (userExist) {
            return res.status(400).json({ message: "User already exists!" });
        }

        // Create user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
            loggedIn: false,
        })

        res.status(201).json({
            message: "User registered successfully!",
            user: { id: user._id, email: user.email, username: user.username }
        });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export {
    registerUser
};