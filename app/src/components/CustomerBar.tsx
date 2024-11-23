import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const CustomerBar = () => {
  const customerCount = useSelector((state: RootState) => state.customerMenu.customers.length);

  return (
    <div className="bg-primary text-white rounded-lg p-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold">Total Customers</h2>
      <span className="text-xl font-bold">{customerCount}</span>
    </div>
  );
};

export default CustomerBar;
