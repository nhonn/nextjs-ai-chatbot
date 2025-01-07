import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  const wrapper = apiIdentifier.startsWith('claude') ? anthropic : openai;
  return wrapLanguageModel({
    model: wrapper(apiIdentifier),
    middleware: customMiddleware,
  });
};
