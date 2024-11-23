import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer, updateCustomer } from '../redux/customerMenuSlice';
import { Add } from '@mui/icons-material';

interface Customer {
  id: number;
  name: string;
  email: string;
  image: string | undefined;
}

interface CustomerFormProps {
  existingCustomer?: Customer;
  onClose: () => void;
}

const CustomerForm = ({ existingCustomer, onClose }: CustomerFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [, setImage] = useState<File | null>(null); // For image file
  const [imagePreview, setImagePreview] = useState<string | null>(existingCustomer?.image || null); // For image preview

  const dispatch = useDispatch();

  useEffect(() => {
    if (existingCustomer) {
      setName(existingCustomer.name);
      setEmail(existingCustomer.email);
      setImagePreview(existingCustomer.image || null);
    }
  }, [existingCustomer]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // Set the image preview
      };
      reader.readAsDataURL(file); // Read the image file as a data URL
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const customerData: Customer = {
      id: existingCustomer ? existingCustomer.id : Date.now(),
      name,
      email,
      image: imagePreview || undefined, // Save preview as the image
    };

    if (existingCustomer) {
      dispatch(updateCustomer(customerData));
    } else {
      dispatch(addCustomer(customerData));
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">{existingCustomer ? 'Edit' : 'Add'} Customer</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-lg p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium mb-1">
          Profile Picture
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border rounded-lg p-2 w-full"
        />
      </div>
      {imagePreview && (
        <div className="mb-4">
          <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-full" />
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
      >
        <Add className="mr-2" />
        {existingCustomer ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default CustomerForm;





