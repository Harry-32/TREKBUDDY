interface ChatbotResponse {
  text: string;
  timestamp: Date;
}

export const sendMessage = async (message: string): Promise<ChatbotResponse> => {
  // Mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        text: `I received your message: "${message}". This is a mock response. In a real implementation, this would be the chatbot's actual response.`,
        timestamp: new Date(),
      });
    }, 1000);
  });
}; 