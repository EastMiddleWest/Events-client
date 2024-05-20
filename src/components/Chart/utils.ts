import { type  ChartData } from 'chart.js';
import { type Participant } from '@/types';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Registrations per day',
      font: {
        size: 18
      }
    },
  },
};

export const initData: ChartData<'bar'> = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: '#9797f3',
      barThickness: 20
    }
  ],
};

export const generateChartData = (data: Participant[],): ChartData<'bar'> => {
  const result: Record<string, number> = {}
  data.forEach((record) => {
    const key = new Date(record.registartionDate).toLocaleDateString()
    const value = result[key]
    if(value === undefined) result[key] = 1
    else result[key]++
  })
  initData.labels = Object.keys(result)
  initData.datasets[0].data = Object.values(result)
  return initData
}