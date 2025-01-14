import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
const ConnectCloudify = async function () {
  cloudinary.config({
    cloudName: process.env.CLOUD_NAME,
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    secure: true,
  });
};
export default ConnectCloudify;
