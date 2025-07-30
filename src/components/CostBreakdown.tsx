import React from 'react';
import { CostBreakdown as CostBreakdownType } from '../types/recommendations';

interface CostBreakdownProps {
  cost: CostBreakdownType;
  budget: number;
}

export const CostBreakdown: React.FC<CostBreakdownProps> = ({ cost, budget }) => {
  const isWithinBudget = cost.total <= budget;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cost Breakdown</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Hotel Cost:</span>
          <span className="font-semibold">₹{cost.hotel}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Food Cost:</span>
          <span className="font-semibold">₹{cost.food}</span>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between">
          <span className="text-gray-600">Total Cost:</span>
          <span className="font-semibold">₹{cost.total}</span>
        </div>
        
        <div className="flex justify-between mt-2">
          <span className="text-gray-600">Cost per Person:</span>
          <span className="font-semibold">₹{cost.perPersonCost}</span>
        </div>
        
        <div className="mt-4 p-3 rounded bg-green-100 text-green-700">
          <p className="font-semibold">
            {isWithinBudget ? 'Within Budget' : 'Exceeds Budget'} by ₹{Math.abs(cost.total - budget)}
          </p>
        </div>
      </div>
    </div>
  );
}; 