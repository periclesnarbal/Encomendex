import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

class RequestManager {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(url: string, headers?: AxiosRequestConfig['headers']): Promise<T> {
    const response: AxiosResponse<T> = await axios.get(`${this.baseUrl}${url}`, { headers });
    return response.data;
  }

  async post<T>(url: string, data: any, headers?: AxiosRequestConfig['headers']): Promise<T> {
    const response: AxiosResponse<T> = await axios.post(`${this.baseUrl}${url}`, data, { headers });
    return response.data;
  }

  // Adicione outros métodos conforme necessário, como put, delete, etc.
}

export default RequestManager;
