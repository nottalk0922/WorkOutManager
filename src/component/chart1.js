import { Component } from 'react'
import ApexCharts from 'react-apexcharts'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
        series: [20,10,15, 5],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249
                  }
                }
              }
            }
          },
          labels: ['벤치', '스쾃', '데드맆'],
        },      
    }
  }


  render() {
    return (
      <ApexCharts
        options={this.state.options}
        series={this.state.series}
        type='radialBar'
        width={500}
        height={300}
        />
    );
  }}