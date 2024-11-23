import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteCustomer } from '../redux/customerMenuSlice';
import { Edit, Delete } from '@mui/icons-material';
import { useState } from 'react';
import CustomerForm from './CustomerForm'; 

const CustomerList = () => {
  const customers = useSelector((state: RootState) => state.customerMenu.customers);
  const dispatch = useDispatch();
  const [editingCustomer, setEditingCustomer] = useState<null | { id: number; name: string; email: string; image: string }>(null);

  const handleEditCustomer = (customer: { id: number; name: string; email: string; image: string }) => {
    setEditingCustomer(customer); 
  };

  const handleAddCustomer = () => {
    setEditingCustomer(null);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Customer List</h2>
        <button onClick={handleAddCustomer} >
          <Edit />
        </button>
      </div>

      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id} className="flex items-center justify-between mb-2">
              
              <div className="flex items-center">
                {customer.image ? (
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-12 h-12 object-cover rounded-full mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div> // Placeholder for no image
                )}
                <div>
                  <p className="font-medium">{customer.name}</p>
                  <p className="text-sm text-gray-600">{customer.email}</p>
                </div>
              </div>
              <button
                onClick={() => handleEditCustomer(customer)}
                className="text-blue-500"
              >
                <Edit />
              </button>
              <button
                onClick={() => dispatch(deleteCustomer(customer.id))}
                className="text-red-500"
              >
                <Delete />
              </button>
            </li>
          ))}
        </ul>
      )}

      {editingCustomer !== null && (
        <CustomerForm existingCustomer={editingCustomer} onClose={() => setEditingCustomer(null)} />
      )}
    </div>
  );
};

export default CustomerList;




