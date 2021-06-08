declare module "appConfig" {
  interface AppConfigInterface {
    API_URL: string;
  }

  const config: AppConfigInterface;
  export = config;
}
