// types/product.ts

export interface Product {
    id: number;
    documentId: string;
    productName: string;
    description: string;
    active: boolean;
    price: number;
    isAvaliable: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    bestSeller: boolean;
  }
  