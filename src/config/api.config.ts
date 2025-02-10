export class ApiConfig {
  static API_HOST = import.meta.env.VITE_THEM_API_HOST;
  static API_VERSION = import.meta.env.VITE_THEM_API_VERSION;
  static API_BASE_URL = `${ApiConfig.API_HOST}/api/${ApiConfig.API_VERSION}`;
}
