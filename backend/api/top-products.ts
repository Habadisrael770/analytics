import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ProductStats } from '../../shared/types';

const mockTopProducts: ProductStats[] = [
  { productId: 101, name: 'חולצת טי פרימיום', qty: 250, revenue: 37500 },
  { productId: 102, name: 'iPhone 15', qty: 45, revenue: 44955 },
  { productId: 103, name: 'Nike Air', qty: 156, revenue: 18720 },
];

export default function (request: VercelRequest, response: VercelResponse) {
  // In a real application, you would validate the JWT token here
  // and fetch data from a database based on the date range and limit query parameters.
  
  // For now, we return the mock data.
  const limit = request.query.limit ? parseInt(request.query.limit as string) : 10;
  response.status(200).json(mockTopProducts.slice(0, limit));
}
