
export interface Deal {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  store: string;
  imageUrl: string;
  url: string;
  category: string;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  sources?: GroundingSource[];
}

export enum StoreType {
  AMAZON = 'Amazon',
  ML = 'Mercado Livre',
  ALIEXPRESS = 'AliExpress',
  SHOPEE = 'Shopee',
  KABUM = 'KaBuM!',
  MAGALU = 'Magalu'
}
