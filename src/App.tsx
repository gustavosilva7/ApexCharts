import './App.css'
import {ApexOptions } from 'apexcharts'
import CustomChart from './components/CustomChart/Index';

function App() {


  const series = [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }];

    const options: ApexOptions = {
      chart: {
        width: 380,
        type: 'bar',
        background: 'red'
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            
          },
          legend: {
            position: 'bottom'
          },
          
          
        },
      }],
      dataLabels: {
        style: {
          fontSize: '15px',
          colors: ['red'],
        }
      },
      
    };


    return (
      <>
        <CustomChart options={options} series={series} />
      </>
    )
}

export default App
