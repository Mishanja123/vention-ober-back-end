import {
  PutObjectCommand,
  S3Client,
  GetObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const REGION = "eu-central-1";
const BUCKET = process.env.BUCKET;
const s3 = new S3Client({ region: REGION });

const S3Service = {
  //@ts-ignore
  uploadToS3: async ({ file, userId }) => {
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
  },

  getImageKeysByUser: async (userId: number) => {
    const command = new ListObjectsV2Command({
      Bucket: "obar-s3",
      Prefix: `${userId}`,
    });

    const { Contents = [] } = await s3.send(command);
    return Contents.map((image) => image.Key);
  },

  getImageKeysByName: async () => {
    const command = new ListObjectsV2Command({
      Bucket: "obar-s3",
      Prefix: "dishes",
    });

    const { Contents = [] } = await s3.send(command);
    return Contents.map((image) => image.Key);
  },
  getUserPresignedUrl: async (userId: number) => {
    try {
      const imageKeys = await S3Service.getImageKeysByUser(userId);
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
  },

  getDishesPresignedUrl: async (name: string) => {
    try {
      const imageKeys = await S3Service.getImageKeysByName();
      console.log(imageKeys);
      const key = imageKeys.filter((image) => image?.includes(name))[0];
      const command = new GetObjectCommand({ Bucket: "obar-s3", Key: key });
      const presignedUrl = await getSignedUrl(s3, command, {
        expiresIn: 900,
      });
      console.log(presignedUrl);
      return presignedUrl;
    } catch (err) {
      return { err };
    }
  },
};

export default S3Service;
