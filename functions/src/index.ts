import {logger} from "firebase-functions/v1";
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
  cors: ["vote-sucu.web.app"],
},
async ({data}) => {
  logger.info("serviceValidation", {structuredData: true});

  const BASE_URL = new URL("https://account.it.chula.ac.th/serviceValidation");

  const header = new Headers();
  header.append("DeeAppId", "app.web.vote-sucu");
  header.append("DeeAppSecret",
    "05fa61aa574560830e5f460b33c55c377953d4142c2d39185b3f60c23d916dba45405e61fdc5b8a48338128e276aa0b9a4d5f1aaabb6274e0299dd8a42a9275c");
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
