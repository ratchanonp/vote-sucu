import {logger} from "firebase-functions/v2";
import {onCall} from "firebase-functions/v2/https";
import {setGlobalOptions} from "firebase-functions/v2/options";

interface IServiceValidationParams {
  ticket: string
}

interface IServiceValidationRes {
  uid: string;
  username: string;
  gecos: string;
  email: string;
  disable: boolean;
  roles: string[];
  firstname: string;
  lastname: string;
  firstnameth: string;
  lastnameth: string;
  ouid: string;
}

setGlobalOptions({
  maxInstances: 2,
  region: "asia-southeast1",
});

export const serviceValidation = onCall<IServiceValidationParams, Promise<IServiceValidationRes>>({
  cors: true,
  secrets: ["DEE_APP_ID", "DEE_APP_SECRET"],
},
async ({data}) => {
  logger.info("serviceValidation", {structuredData: true});

  const BASE_URL = new URL("https://account.it.chula.ac.th/serviceValidation");

  logger.info("BASE_URL", {structuredData: true, BASE_URL: BASE_URL.toString()});
  logger.info("ticket", {structuredData: true, ticket: data.ticket});

  const header = new Headers();
  header.append("DeeAppId", process.env.DEE_APP_ID as string);
  header.append("DeeAppSecret", process.env.DEE_APP_SECRET as string);
  header.append("DeeTicket", data.ticket);

  const requestOptions = {
    method: "POST",
    headers: header,
    redirect: "follow" as RequestRedirect,
  };

  let response;

  try {
    response = (await fetch(BASE_URL.toString(), requestOptions)).json();
  } catch (error) {
    logger.error(error);
    throw new Error("Error: " + error);
  }

  return response;
});
