"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.mapFiles = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
cloudinary_1.default.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME || "",
    api_key: process.env.CLOUDINARY_KEY || "",
    api_secret: process.env.CLOUDINARY_SECRET || "",
    secure: true,
});
// Map files to Cloudinary URLs
const mapFiles = (files) => __awaiter(void 0, void 0, void 0, function* () {
    const mappedFiles = [];
    if (Array.isArray(files) && files.length > 0) {
        for (const fls of files) {
            const { name, type, uri } = fls || {}; // Provide a fallback to prevent destructuring errors
            if (uri && typeof uri === "string") {
                const publicId = name;
                if (uri.includes("res.cloudinary.com")) {
                    mappedFiles.push({ name, type, uri });
                }
                else {
                    const uploadedFile = yield (0, exports.uploadFile)(uri, publicId || undefined);
                    mappedFiles.push({ name, type, uri: uploadedFile.secure_url });
                }
            }
            else {
                console.warn("Skipping file with missing or invalid uri:", fls);
            }
        }
    }
    else {
        console.warn("No files provided or files array is empty.");
    }
    return mappedFiles;
});
exports.mapFiles = mapFiles;
// Upload file to Cloudinary
const uploadFile = (file, publicId) => {
    return cloudinary_1.default.v2.uploader.upload(file, { public_id: publicId });
};
exports.uploadFile = uploadFile;
