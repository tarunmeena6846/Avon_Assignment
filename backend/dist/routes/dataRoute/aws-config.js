"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3 = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Configure the AWS SDK
const s3 = new client_s3_1.S3Client({
    region: "us-east-1",
    credentials: {
        accessKeyId: `${process.env.AWS_ACCESS_KEY}`,
        secretAccessKey: `${process.env.AWS_SECRET_KEY}`,
    },
});
exports.s3 = s3;
console.log(process.env.AWS_ACCESS_KEY);
