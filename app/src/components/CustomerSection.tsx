import CustomerMap from './CustomerMap'; // Your map card component
import Customer from './Customer'; // Your existing customer list component

const CustomerSection = () => {
  return (
    <div
      className="flex flex-col md:flex-row gap-4 bg-[#F9FAFB] p-4"
      style={{
        borderRadius: '12px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Customer Map */}
      <div
        className="flex-1"
        style={{
          borderRadius: '12px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <CustomerMap />
      </div>

      {/* Customer List */}
      <div
        className="flex-1"
        style={{
          borderRadius: '12px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Customer />
      </div>
    </div>
  );
};

export default CustomerSection;
