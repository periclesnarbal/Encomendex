import { GeminiResponseData } from '../models/GeminiResponseData';
import RequestManager from './RequestManager';

class GeminiRequestManager {
  private ENDPOINT_ID = 'https://us-central1-aiplatform.googleapis.com/v1';
  private PROJECT_ID = 'encomendex-alpha-420114';
  private MODEL_ID = 'text-bison';
  private requestManager: RequestManager;

  constructor() {
    this.requestManager = new RequestManager(this.ENDPOINT_ID);
  }

  async postGeminiRequest(prompt: string): Promise<GeminiResponseData> {
    const accessToken = '';

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    const requestBody = {
      inputs: [
        {
          struct_val: {
            prompt: {
              string_val: [prompt]
            }
          }
        }
      ],
      parameters: {
        struct_val: {
          temperature: { float_val: 0.8 },
          maxOutputTokens: { int_val: 1024 },
          topK: { int_val: 40 },
          topP: { float_val: 0.95 }
        }
      }
    };

    try {
      return await this.requestManager.post<GeminiResponseData>(`/projects/${this.PROJECT_ID}/locations/us-central1/publishers/google/models/${this.MODEL_ID}:serverStreamingPredict`, requestBody, headers);
    } catch (error: any) {
        if (error instanceof Error) {
          throw new Error('Erro ao fazer a predição: ' + error.message);
        } else {
          throw new Error('Erro desconhecido ao fazer a predição.');
        }
    }
  }
}

export default GeminiRequestManager;
