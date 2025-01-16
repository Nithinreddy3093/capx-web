import { Stock, PortfolioMetrics } from './types';

export const mockStocks: Stock[] = [
  {
    id: '1',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    quantity: 1,
    buyPrice: 150.25,
    currentPrice: 175.50,
  },
  {
    id: '2',
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    quantity: 1,
    buyPrice: 280.15,
    currentPrice: 305.75,
  },
  {
    id: '3',
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    quantity: 1,
    buyPrice: 2750.10,
    currentPrice: 2850.25,
  },
  {
    id: '4',
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    quantity: 1,
    buyPrice: 3200.50,
    currentPrice: 3150.25,
  },
  {
    id: '5',
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    quantity: 1,
    buyPrice: 850.75,
    currentPrice: 900.50,
  },
];

export const calculateMetrics = (stocks: Stock[]): PortfolioMetrics => {
  const totalValue = stocks.reduce((sum, stock) => sum + stock.currentPrice * stock.quantity, 0);
  const totalGainLoss = stocks.reduce(
    (sum, stock) => sum + (stock.currentPrice - stock.buyPrice) * stock.quantity,
    0
  );

  const stockPerformances = stocks.map(stock => ({
    ...stock,
    performance: ((stock.currentPrice - stock.buyPrice) / stock.buyPrice) * 100,
  }));

  const topPerformer = stocks[stockPerformances.indexOf(
    stockPerformances.reduce((prev, curr) =>
      prev.performance > curr.performance ? prev : curr
    )
  )];

  const worstPerformer = stocks[stockPerformances.indexOf(
    stockPerformances.reduce((prev, curr) =>
      prev.performance < curr.performance ? prev : curr
    )
  )];

  return {
    totalValue,
    totalGainLoss,
    topPerformer,
    worstPerformer,
  };
};