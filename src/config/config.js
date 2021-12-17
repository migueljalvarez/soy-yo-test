import dotenv from "dotenv";
dotenv.config();

const { NODE_ENV, PORT } = process.env;
const environment = ["prod", "qa", "dev"];

let env;

if (environment.includes(NODE_ENV)) {
  env = NODE_ENV;
} else if (NODE_ENV === "production") {
  env = environment[0];
} else {
  env = environment[2];
}

const config = {
  app: {
    port: PORT || 3000,
    env: NODE_ENV
  },
  apiUrl: `https://awovcw7p76.execute-api.us-east-1.amazonaws.com/${env}/entity/v2.1/entities`
};

export default config;
