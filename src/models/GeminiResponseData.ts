export interface GeminiResponseData {
    outputs: {
      structVal: {
        citationMetadata: {
          structVal: {
            citations: {};
          };
        };
        safetyAttributes: {
          structVal: {
            categories: {};
            scores: {};
            blocked: {
              boolVal: [boolean];
            };
          };
        };
        content: {
          stringVal: [string];
        };
      };
    }[];
  }