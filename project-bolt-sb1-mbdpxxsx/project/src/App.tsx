import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Stock } from './types';
import { mockStocks, calculateMetrics } from './data';
import { Dashboard } from './components/Dashboard';
import { StockList } from './components/StockList';
import { StockForm } from './components/StockForm';
import { LandingPage } from './components/LandingPage';

function App() {
  const [stocks, setStocks] = useState<Stock[]>(mockStocks);
  const [showForm, setShowForm] = useState(false);
  const [editingStock, setEditingStock] = useState<Stock | undefined>();
  const [showPortfolio, setShowPortfolio] = useState(false);

  const metrics = calculateMetrics(stocks);

  const handleAddStock = (stockData: Omit<Stock, 'id' | 'currentPrice'>) => {
    const newStock: Stock = {
      ...stockData,
      id: Date.now().toString(),
      currentPrice: stockData.buyPrice * 1.1, // Mock current price for demo
    };
    setStocks([...stocks, newStock]);
    setShowForm(false);
  };

  const handleEditStock = (stockData: Omit<Stock, 'id' | 'currentPrice'>) => {
    if (editingStock) {
      const updatedStocks = stocks.map((stock) =>
        stock.id === editingStock.id
          ? { ...stock, ...stockData }
          : stock
      );
      setStocks(updatedStocks);
      setEditingStock(undefined);
    }
  };

  const handleDeleteStock = (id: string) => {
    setStocks(stocks.filter((stock) => stock.id !== id));
  };

  if (!showPortfolio) {
    return <LandingPage onGetStarted={() => setShowPortfolio(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Portfolio Tracker</h1>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Stock
          </button>
        </div>

        <Dashboard metrics={metrics} />
        <StockList
          stocks={stocks}
          onEdit={setEditingStock}
          onDelete={handleDeleteStock}
        />

        {(showForm || editingStock) && (
          <StockForm
            stock={editingStock}
            onSubmit={editingStock ? handleEditStock : handleAddStock}
            onClose={() => {
              setShowForm(false);
              setEditingStock(undefined);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;