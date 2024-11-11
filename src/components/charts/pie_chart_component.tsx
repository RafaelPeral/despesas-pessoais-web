import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { CardContent } from '../ui/card';
import { Button } from '@/components/ui/button'
import useChartExport from '@/hooks/chart/use_chart_export';
import {PieChartComponentProps} from '@/types/pie_chart';

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28EFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
  const { chartRef, exportChart } = useChartExport();

  return (
    <CardContent>
      <div ref={chartRef}>
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Tooltip />
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
        {data.map((entry, index) => (
            <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: COLORS[index % COLORS.length],
                marginRight: '8px'
            }} />
            <span>{entry.name}: {entry.value}</span>
            </div>
        ))}
      </div>
      <Button variant="outline" className="mt-4" onClick={exportChart}>Exportar grafico</Button>
    </CardContent>
  );
};

export default PieChartComponent;
