import { uploadToS3 } from "./uploadToS3";
import { getImageKeysByName } from "./getImageKeysByName";
import { getImageKeysByUserId } from "./getImageKeysByUserId";
import { getUserPresignedUrlByUserId } from "./getUserPresignedUrlByUserId";
import { getDishesPresignedUrl } from "./getDishesPresignedUrl";

export interface IS3ServiceHandlers {
  uploadToS3: ({
    //@ts-expect-error
    file,
    //@ts-expect-error
    userId,
  }) => Promise<
    { key: string; error?: undefined } | { error: any; key?: undefined }
  >;
  getImageKeysByName: (userId: number) => Promise<(string | undefined)[]>;
  getImageKeysByUserId: (userId: number) => Promise<(string | undefined)[]>;
  getUserPresignedUrlByUserId: (
    userId: number
  ) => Promise<string | { error: any }>;
  getDishesPresignedUrl: (name: string) => Promise<string | { err: any }>;
}

export const S3ServiceHandlers: IS3ServiceHandlers = {
  uploadToS3,
  getImageKeysByName,
  getImageKeysByUserId,
  getUserPresignedUrlByUserId,
  getDishesPresignedUrl,
};
