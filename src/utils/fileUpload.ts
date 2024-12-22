import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME || "",
  api_key: process.env.CLOUDINARY_KEY || "",
  api_secret: process.env.CLOUDINARY_SECRET || "",
  secure: true,
});

// Define the file type
interface File {
  name?: string;
  type?: string;
  uri?: string;
}

// Map files to Cloudinary URLs
export const mapFiles = async (files: File[]): Promise<File[]> => {
  const mappedFiles: File[] = [];

  if (Array.isArray(files) && files.length > 0) {
    for (const fls of files) {
      const { name, type, uri } = fls || {}; // Provide a fallback to prevent destructuring errors

      if (uri && typeof uri === "string") {
        const publicId = name;

        if (uri.includes("res.cloudinary.com")) {
          mappedFiles.push({ name, type, uri });
        } else {
          const uploadedFile = await uploadFile(uri, publicId || undefined);
          mappedFiles.push({ name, type, uri: uploadedFile.secure_url });
        }
      } else {
        console.warn("Skipping file with missing or invalid uri:", fls);
      }
    }
  } else {
    console.warn("No files provided or files array is empty.");
  }

  return mappedFiles;
};

// Upload file to Cloudinary
export const uploadFile = (file: string, publicId?: string) => {
  return cloudinary.v2.uploader.upload(file, { public_id: publicId });
};
