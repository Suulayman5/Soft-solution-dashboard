import { useState } from 'react';
import CustomerBar from './CustomerBar';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import { Add } from '@mui/icons-material';

const Customer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="p-4">
      <CustomerBar />
      {isFormOpen && (
        <CustomerForm onClose={() => setIsFormOpen(false)} />
      )}
      <button
        onClick={() => setIsFormOpen(true)} >
      <Add />
    </button>
    <CustomerList />
    </div>
  );
};

export default Customer;
