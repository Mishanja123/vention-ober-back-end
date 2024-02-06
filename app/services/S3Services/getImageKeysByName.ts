import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

const REGION = "eu-central-1";
const s3 = new S3Client({ region: REGION });

export const getImageKeysByName = async () => {
  const command = new ListObjectsV2Command({
    Bucket: "obar-s3",
    Prefix: "dishes",
  });

  const { Contents = [] } = await s3.send(command);
  return Contents.map((image) => image.Key);
};
