import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js';
export const register = async (req, res) => {
  try {
    const { name, email, password, role, location, phone } = req.body;
    if (!name || !email || !password || !role || !location, !phone) {
      return res.status(400).json({
        message: "Someting is missing",
        success: false
      })
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already Exist",
        success: false
      })
    }
    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      phone,
      password_hash: hashPassword,
      role,
      location

    })
    return res.status(201).json({
      message: "User Created Successfully",
      success: true
    })
  } catch (error) {
    console.log(error);
  }
}

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    }
    console.log("hello")
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: 'Wrong Email',
        success: false
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: 'Wrong password',
        success: false
      });
    }

    if (role !== user.role) {
      return res.status(400).json({
        message: 'User does not exist for current role',
        success: false
      });
    }

    const tokenData = {
      userId: user._id
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_CODE, {
      expiresIn: '1d'
    });


    console.log("Generated Token:", token);

    const responseUser = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
        path: '/'
      })
      .json({
        message: `Welcome back ${user.name}`,
        success: true,
        user: responseUser
      });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    });
  }
};
export const logout = async (req, res) => {

  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out Successfully",
      success: true
    })
  } catch (error) {
    console.log(error);
  }
}