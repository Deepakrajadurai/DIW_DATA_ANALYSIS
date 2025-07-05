
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import type { ChartConfig } from '../types';

export const ChartComponent: React.FC<{ chartConfig: ChartConfig }> = ({ chartConfig }) => {
  const { type, data, dataKeys, title, description, xAxisKey } = chartConfig;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-2 border border-gray-600 rounded shadow-lg text-sm">
          <p className="label font-bold text-gray-200">{`${label}`}</p>
          {payload.map((pld: any, index: number) => (
             <p key={index} style={{ color: pld.color }}>{`${pld.name || pld.dataKey}: ${pld.value}`}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    switch(type) {
      case 'bar':
        return (
          <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
            <XAxis dataKey={xAxisKey} stroke="#A0AEC0" tick={{ fontSize: 12 }} />
            <YAxis stroke="#A0AEC0" tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(100, 116, 139, 0.1)' }}/>
            <Legend wrapperStyle={{fontSize: "12px"}}/>
            {dataKeys.map(keyInfo => (
              <Bar key={keyInfo.key} dataKey={keyInfo.key} name={keyInfo.name || keyInfo.key} fill={keyInfo.color} stackId={keyInfo.stackId} />
            ))}
          </BarChart>
        );
      case 'line':
        return (
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
            <XAxis dataKey={xAxisKey} stroke="#A0AEC0" tick={{ fontSize: 12 }} />
            <YAxis stroke="#A0AEC0" tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(100, 116, 139, 0.2)', strokeWidth: 2 }}/>
            <Legend wrapperStyle={{fontSize: "12px"}}/>
            {dataKeys.map(keyInfo => (
              <Line key={keyInfo.key} type="monotone" dataKey={keyInfo.key} name={keyInfo.name || keyInfo.key} stroke={keyInfo.color} strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            ))}
          </LineChart>
        );
      case 'pie':
        const pieDataKey = dataKeys[0]?.key || 'value';
        return (
          <PieChart>
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{fontSize: "12px"}}/>
            <Pie data={data} dataKey={pieDataKey} nameKey={xAxisKey} cx="50%" cy="50%" outerRadius={100} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={dataKeys[index % dataKeys.length]?.color || '#8884d8'} />
              ))}
            </Pie>
          </PieChart>
        );
      default:
        return <p>Unknown chart type</p>;
    }
  };

  return (
     <div className="bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                {renderChart()}
            </ResponsiveContainer>
        </div>
    </div>
  )
};
