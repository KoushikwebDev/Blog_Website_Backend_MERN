declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      ATLAS_MONGO_URL: string;
    }
  }
}

export {};
