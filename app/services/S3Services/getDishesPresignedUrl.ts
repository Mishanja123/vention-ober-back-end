import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { REGION } from "../../constants";

const s3 = new S3Client({ region: REGION });

import { getImageKeysByName } from "./getImageKeysByName";

export const getDishesPresignedUrl = async (name: string) => {
  try {
    const imageKeys = await getImageKeysByName();
    const key = imageKeys.filter((image) => image?.includes(name))[0];
    const command = new GetObjectCommand({ Bucket: "obar-s3", Key: key });
    const presignedUrl = await getSignedUrl(s3, command, {
      expiresIn: 518400,
    });
    return presignedUrl;
  } catch (err) {
    return { err };
  }
};
