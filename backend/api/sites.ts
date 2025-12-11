import type { VercelRequest, VercelResponse } from '@vercel/node';
import { SiteStats } from '../../shared/types';

const mockSites: SiteStats[] = [
  { siteId: 1, name: 'חנות ראשית', url: 'shop1.example.com', totalSales: 85000, ordersCount: 320, refunds: 5, avgOrderValue: 265.6 },
  { siteId: 2, name: 'אלקטרוניקה', url: 'elec.example.com', totalSales: 65000, ordersCount: 210, refunds: 3, avgOrderValue: 309.2 },
];

export default function (request: VercelRequest, response: VercelResponse) {
  // In a real application, you would validate the JWT token here
  // and fetch data from a database based on the date range query parameters.
  
  // For now, we return the mock data.
  response.status(200).json(mockSites);
}
