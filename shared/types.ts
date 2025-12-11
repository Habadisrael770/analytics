export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface SummaryData {
  totalSales: number;
  netSales: number;
  totalOrders: number;
  itemsSold: number;
  dailySales: { date: string; total: number }[];
}

export interface SiteStats {
  siteId: number;
  name: string;
  url: string;
  totalSales: number;
  ordersCount: number;
  refunds: number;
  avgOrderValue: number;
}

export interface ProductStats {
  productId: number;
  name: string;
  qty: number;
  revenue: number;
}
