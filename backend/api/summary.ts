import type { VercelRequest, VercelResponse } from '@vercel/node';
import { SummaryData } from '../../shared/types';

// Mock data generation functions from the original pasted content
const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

const genDailySales = () => {
  const arr: SummaryData['dailySales'] = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    arr.push({ date: d.toISOString().split('T')[0], total: rand(1000, 6000) });
  }
  return arr;
};

const mockSummary: SummaryData = {
  totalSales: 125000,
  netSales: 112300,
  totalOrders: 450,
  itemsSold: 1200,
  dailySales: genDailySales(),
};

export default function (request: VercelRequest, response: VercelResponse) {
  // In a real application, you would validate the JWT token here
  // and fetch data from a database based on the date range query parameters.
  
  // For now, we return the mock data.
  response.status(200).json(mockSummary);
}
