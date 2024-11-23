import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Charts from '../assets/Charts.svg'
import Charts1 from '../assets/Charts1.svg'

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const RevenueChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Pending',
        data: [10000, 12000, 15000, 8000, 19000, 24000, 18000, 22000, 20000, 23000, 25000, 27000],
        backgroundColor: ['#D3D3D3', '#98FB98', '#9370DB', '#FF6347', '#FF69B4', '#32CD32', '#BA55D3', '#40E0D0', '#FF4500', '#DDA0DD', '#8A2BE2', '#8B008B'],
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as 'bottom', // Explicitly specifying the type
      },
      title: {
        display: true,
        text: 'Revenue',
        font: {
          size: 14,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000,
        },
      },
    },
  };
  
  

  return (
    <div className="w-[545px] h-[370.83px]">
      <Bar data={data} options={options} height={200} />
      <p className="text-lg font-bold mt-2">$112,340</p>
    </div>
  );
};


const CustomersChart = () => {
  // Chart data configuration
  const data = {
    labels: ['Current customers', 'New customers', 'pending customers'],
    datasets: [
      {
        data: [25.3, 35.7, 40.0], // Data values
        backgroundColor: [
          'linear-gradient(180deg, #4c73ff 0%, #ffb7f5 100%)',
          'linear-gradient(180deg, #9ec600 0%, #cdf4ff 100%)',
          'rgba(244, 251, 255, 0.6)',
        ],
        width: ['73,29px', '124.68px'],
        blur:['46.94'],
        dropShadow:['#677efe','#0f123f'],
        cutout: '75%' // Creates a donut shape
      }
    ]
  };

  // Chart options configuration
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false // Hide default legend
      },
      tooltip: {
        callbacks: {
          label: (context: { label: any; raw: any; }) => `${context.label}: ${context.raw}%`
        }
      }
    }
  };

  return (
    <div
    className="rounded-lg shadow-md p-6 bg-white"
    style={{
      width: '545px',
      height: '370.83px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)', // Subtle shadow to match Figma
    }}
  >
    {/* Header */}
    <div>
      <h2 className="font-inter font-extrabold text-[18px] leading-[24px] text-[#081734] mb-1">
        Customers
      </h2>
      <p className="font-inter font-normal text-[12px] leading-[16px] text-[#8f95b2]">
        Customers that buy our products
      </p>
      <hr className="border-t border-[#e6e8f0] w-full mt-4" />
    </div>
  
    {/* Chart Container */}
    <div className="flex justify-center mt-6">
      <div style={{ width: '160px', height: '160px', position: 'relative' }}>
        <Doughnut data={data} options={options} />
        {/* Central Percentage Display */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <span className="text-2xl font-bold text-[#081734]">82.3%</span>
          <p className="text-sm text-[#8f95b2]">Total</p>
        </div>
      </div>
    </div>
  
    {/* Legend */}
    <div className="flex justify-center mt-6 gap-8">
      <div className="flex items-center">
        <span
          className="w-3 h-3 rounded-full mr-2"
          style={{ backgroundColor: '#665CF2' }}
        ></span>
        <span className="text-xs text-[#8f95b2]">Current customers</span>
      </div>
      <div className="flex items-center">
        <span
          className="w-3 h-3 rounded-full mr-2"
          style={{ backgroundColor: '#8BC740' }}
        ></span>
        <span className="text-xs text-[#8f95b2]">New customers</span>
      </div>
    </div>
  
    {/* Metrics */}
    <div className="flex justify-between mt-6">
      <div className="flex items-center">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#e0e7ff' }}
        >
         <img src={Charts}/>
        </div>
        <div className="ml-2">
          <p className="text-sm font-semibold text-[#081734]">+18%</p>
          <p className="text-xs text-[#8f95b2]">Daily customers</p>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#e9f5e0' }}
        >
          <img src={Charts1}/>
        </div>
        <div className="ml-2">
          <p className="text-sm font-semibold text-[#081734]">+14%</p>
          <p className="text-xs text-[#8f95b2]">Weekly new customers</p>
        </div>
      </div>
    </div>
  </div>
  
  );
};



const ChartSection = () => (
  <div className="flex flex-col md:flex-row gap-[13px] lg:w-[1117px] h-[371px]">
    <RevenueChart />
    <CustomersChart />
  </div>
);


export default ChartSection;
