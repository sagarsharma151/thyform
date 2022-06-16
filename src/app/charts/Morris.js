import React from "react";
// import logo from './logo.svg';
import { Bar, Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
// import DonutChart from 'react-donut-chart';

// import { PieChart } from 'react-minimal-pie-chart';
import './Chart.css'
const data5 = {
  labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
  datasets: [
    {
      label: "First dataset",
      data: [120, 64, 90, 90, 70, 90, 105],
      fill: true,
      backgroundColor: "transparent",
      borderColor: "rgb(99, 207, 114)",
      backgroundColor: "transparent",
    },
    {
      label: "Sec dataset",
      data: [100, 69, 80, 80, 65, 80, 100],
      fill: false,
      borderColor: "rgb(243, 99, 104)",
    },
  ],
};
// const options = {
//   legend: {
//       display: false
//   }
// };

const data1 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [200, 100, 150, 100, 150, 200],
      fill: true,
      backgroundColor: "rgb(240, 187, 189)",
      // backgroundImage:' linear-gradient(180deg, red, yellow)',
      borderColor: "rgb(243, 99, 104)",
    },
    {
      label: "Second dataset",
      data: [100, 50, 80, 50, 90, 100],
      fill: false,
      backgroundColor: "blue",
      borderColor: "rgb(118, 193, 250)",
    },
  ],
};

const dataBar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {

      backgroundColor: '#46c35f',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [100, 75, 50, 75, 50, 55, 100]
    },
    {
    
      backgroundColor: '#f96868',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [92, 70, 45, 70, 45, 50, 92]
    }
  ]
};
const options1= {
  legend: {
      display: false
  },
  tooltips: {
      callbacks: {
         label: function(tooltipItem) {
                return tooltipItem.yLabel;
         }
      }
  }
  ,
  scales: {
    xAxes: [{
        gridLines: {
            display:false
        }
    }],
    // yAxes: [{
    //     gridLines: {
    //         display:false
    //     }   
    // }]
}
}


const datadonut = {
// labels: ["Critical case", "Urgent case", "Errors", "Reviewed", "Success"],
datasets: [
  {
    data: [30, 30, 5, 15, 20],
    backgroundColor: [
      "rgb(242,165,152)",
      "rgb(255,232,157)",
      "rgb(236,107,109)",
      "rgb(122,231,125)",
      "rgb(195,233,151)"
    ],
    hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
  }
],

plugins: {
  labels: {
    render: "percentage",
    fontColor: ["green", "white", "red"],
    precision: 2
  },
},
 text: "23%",
};
const Morris = (props) => {


  const data = {
    labels: ["2006", "2008", "2010", "2012"],
    datasets: [
      {
        label: "# of Votes",
        data: [100, 75, 60, 50, 40, 9],
        backgroundColor: [
          "rgb(99, 207, 114)",
          "rgb(243, 99, 104)",
          "rgb(99, 207, 114)",
          "rgb(243, 99, 104)",
        ],
        borderColor: [
          "rgb(99, 207, 114)",
          "rgb(243, 99, 104)",
          "rgb(99, 207, 114)",
          "rgb(243, 99, 104)",
        ],
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    legend: {
      display: false
  },
  tooltips: {
      callbacks: {
         label: function(tooltipItem) {
                return tooltipItem.yLabel;
         }
      }
  }
  ,
  scales: {
    xAxes: [{
        gridLines: {
            display:false
        }
    }],
    // yAxes: [{
    //     gridLines: {
    //         display:false
    //     }   
    // }]
}
    
  };
 
console.log(dataBar,'dataBar')
  return (
    <>
      <div className="App morris-main">
        <div className="d-flex">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Line Chart</h4>
                <div>
                  {" "}
                  <Line data={data5} width={100}  height={75} options={options1}/>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Bar Chart</h4>
                <div>
                  {" "}
                  {/* <Bar data={data} options={options} /> */}
                  <Bar
          data={dataBar} options={options1}
          width={100}
          height={75}
        />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Area Chart</h4>
                <div>
                  {" "}
                  <Line data={data1} options={options1} width={100}
          height={75}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Doughnut Chart</h4>
                <div>
                  {" "}
                  {/* <Doughnut
                    data={{
                     
                      datasets: [
                        {
                          data: [100, 200, 300],
                          backgroundColor: [
                            "rgb(243, 99, 104)",
                            "rgb(99, 207, 114)",
                            "rgb(118, 193, 250)",
                          ],
                        },
                      ],
                    }}
                  ></Doughnut>{" "} */}
                    {/* <DonutChart   data={[
    {
      label: 'Give you up',
      value: 25,
    },
    {
      label: '',
      value: 75,
      isEmpty: true,
    },
  ]} /> */}
  <Doughnut
          data={datadonut}
          options={{
            
            elements: {
              
              center: {
                legend: { display: false, position: "right" },
                text: "Red is 2/3 the total numbers",
                color: "#FF6384", // Default is #000000
                fontStyle: "Arial", // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
              }
            },
            
          }}
        />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Morris;
