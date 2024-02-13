import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";
import { REGION } from "../../constants";

const s3 = new S3Client({ region: REGION });

export const getImageKeysByUserId = async (userId: number) => {
  const command = new ListObjectsV2Command({
    Bucket: "obar-s3",
    Prefix: `${userId}`,
  });

  const { Contents = [] } = await s3.send(command);
  return Contents.map((image) => image.Key);
};
