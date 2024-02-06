import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getImageKeysByUserId } from "./getImageKeysByUserId";

const REGION = "eu-central-1";
const s3 = new S3Client({ region: REGION });

export const getUserPresignedUrlByUserId = async (userId: number) => {
  try {
    const imageKeys = await getImageKeysByUserId(userId);
    const key = imageKeys[0];
    const command = new GetObjectCommand({ Bucket: "obar-s3", Key: key });
    const presignedUrl = await getSignedUrl(s3, command, {
      expiresIn: 900,
    });
    console.log(presignedUrl);
    return presignedUrl;
  } catch (error) {
    return { error };
  }
};
