import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

type Props = {
    series: any;
    options: ApexOptions;
}

const CustomChart = ({options, series}: Props) => {
    

return (
  <>
    <ReactApexChart options={options} series = {series} type={options.chart?.type}/>
  </>
)
}

export default CustomChart;