import { SendEmailCommandOutput } from "@aws-sdk/client-ses";
import { sendEmail } from "./sendEmail";

export interface ISESServiceHandlers {
  sendEmail: (
    recipientEmail: string,
    name: string,
    recipientData: any
  ) => Promise<SendEmailCommandOutput | undefined>;
}

export const SESServiceHandlers: ISESServiceHandlers = {
  sendEmail,
};
