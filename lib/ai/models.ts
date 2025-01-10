// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'claude-3-haiku-20240307',
    label: 'Claude 3 Haiku',
    apiIdentifier: 'claude-3-haiku-20240307',
    description: 'For creative, multi-step tasks',
  },
  {
    id: 'claude-3-5-haiku-latest',
    label: 'Claude 3.5 Haiku',
    apiIdentifier: 'claude-3-5-haiku-latest',
    description: 'For creative, multi-step tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'claude-3-haiku-20240307';
