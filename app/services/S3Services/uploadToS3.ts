import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const REGION = "eu-central-1";
const s3 = new S3Client({ region: REGION });
//@ts-expect-error
export const uploadToS3 = async ({ file, userId }) => {
  let key = `${userId}/logo`;
  if (!userId) key = `dishes/${file.originalname}`;
  const command = new PutObjectCommand({
    Bucket: "obar-s3",
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  });

  try {
    await s3.send(command);
    return { key };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
