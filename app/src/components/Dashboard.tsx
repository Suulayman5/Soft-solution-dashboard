// import Sidebar from './Sidebar';
// import Navbar from './Navbar';
import ChartSection from './ChartSection';
import MetricsSection from './MetricsCard';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* <Sidebar /> Hide sidebar on mobile */}
      <main className="flex-1 bg-gray-50 p-4 sm:p-6">
        {/* <Navbar /> */}
        <MetricsSection />
        <ChartSection />
      </main>
    </div>
  );
};

export default Dashboard;
