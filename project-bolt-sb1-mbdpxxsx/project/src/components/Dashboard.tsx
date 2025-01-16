import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';
import { Stock, PortfolioMetrics } from '../types';

interface DashboardProps {
  metrics: PortfolioMetrics;
}

export const Dashboard: React.FC<DashboardProps> = ({ metrics }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Portfolio Value</p>
            <p className="text-2xl font-bold">{formatCurrency(metrics.totalValue)}</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <DollarSign className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Gain/Loss</p>
            <p className={`text-2xl font-bold ${
              metrics.totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {formatCurrency(metrics.totalGainLoss)}
            </p>
          </div>
          <div className={`p-3 rounded-full ${
            metrics.totalGainLoss >= 0 ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {metrics.totalGainLoss >= 0 ? (
              <TrendingUp className="w-6 h-6 text-green-600" />
            ) : (
              <TrendingDown className="w-6 h-6 text-red-600" />
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Top Performer</p>
            <p className="text-lg font-semibold">{metrics.topPerformer.symbol}</p>
            <p className="text-sm text-green-600">
              {formatCurrency(metrics.topPerformer.currentPrice)}
            </p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Worst Performer</p>
            <p className="text-lg font-semibold">{metrics.worstPerformer.symbol}</p>
            <p className="text-sm text-red-600">
              {formatCurrency(metrics.worstPerformer.currentPrice)}
            </p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <TrendingDown className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};