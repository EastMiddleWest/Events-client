
import styles from './Chart.module.scss';
import { options, generateChartData } from './utils'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { type Participant } from '@/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);


type Props = {
  data: Participant[]
}

const Chart = ({data}: Props) => {

  return (
    <div className={styles.wrapper}>
      <Bar options={options} data={generateChartData(data)} />
    </div>
  )

}

export default Chart