
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface PriceItem {
  id: string;
  service: string;
  price: string;
  description?: string;
}

interface PriceListProps {
  title: string;
  items: PriceItem[];
}

const PriceList = ({ title, items }: PriceListProps) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
      
      <div className="bg-white rounded-xl shadow-neuro overflow-hidden">
        <div className="divide-y divide-border/40">
          {items.map((item) => (
            <div key={item.id} className="transition-all duration-300">
              <div 
                className={`flex justify-between items-center p-4 hover:bg-secondary/30 cursor-pointer ${
                  expandedItem === item.id ? 'bg-secondary/50' : ''
                }`}
                onClick={() => toggleExpand(item.id)}
              >
                <div className="flex-1">
                  <div className="font-medium">{item.service}</div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="font-semibold text-primary">{item.price}</div>
                  <div className="text-muted-foreground">
                    {expandedItem === item.id ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>
              </div>
              
              {/* Rozwijany opis */}
              {item.description && (
                <div 
                  className="overflow-hidden transition-all duration-300"
                  style={{ 
                    maxHeight: expandedItem === item.id ? '200px' : '0px',
                    opacity: expandedItem === item.id ? 1 : 0
                  }}
                >
                  <div className="p-4 bg-secondary/20 text-muted-foreground">
                    {item.description}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceList;
