import AWS from "aws-sdk";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
require("dotenv").config();

const REGION = "eu-central-1";

const SES_CONFIG = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: REGION,
};
//@ts-expect-error
const sesClient = new SESClient(SES_CONFIG);

export const sendEmail = async (
  recipientEmail: string,
  name: string,
  recipientData: any
) => {
  const params = {
    Source: process.env.AWS_SES_SENDER,
    Destination: {
      ToAddresses: [recipientEmail],
    },
    ReplyToAddress: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<h3>Dear ${recipientData.firstName} ${recipientData.lastName},</h3>\n\n<div>Welcome to OceanBar! We are thrilled to have you join our community of seafood enthusiasts.</div> <div>As a registered member, you now have access to our exclusive offers, events, and updates.</div>\n\n<div>Whether you're craving fresh oysters, succulent lobster, or our signature seafood platter, OceanBar is here to satisfy your seafood cravings with our delectable menu curated by our expert chefs.</div>\n\n<div>Feel free to explore our website to discover our latest offerings and upcoming events. If you have any questions or need assistance, don't hesitate to reach out to our friendly team.</div>\n\n<div>Once again, welcome aboard, and we look forward to serving you soon at OceanBar!</div>\n\n<div>Best regards,</div><div>\n${name}\n</div>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: `Dear ${recipientData.firstName} ${recipientData.lastName},\n\nWelcome to OceanBar! We are thrilled to have you join our community of seafood enthusiasts. As a registered member, you now have access to our exclusive offers, events, and updates.\n\nWhether you're craving fresh oysters, succulent lobster, or our signature seafood platter, OceanBar is here to satisfy your seafood cravings with our delectable menu curated by our expert chefs.\n\nFeel free to explore our website to discover our latest offerings and upcoming events. If you have any questions or need assistance, don't hesitate to reach out to our friendly team.\n\nOnce again, welcome aboard, and we look forward to serving you soon at OceanBar!\n\nBest regards,\n${name}\nOceanBar Team`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Welcome to OceanBar, ${recipientData.firstName}!`,
      },
    },
  };
  try {
    const sendEmailCommand = new SendEmailCommand(params);
    const response = await sesClient.send(sendEmailCommand);
    console.log("Email has been sent!", response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
