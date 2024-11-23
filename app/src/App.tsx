import { Provider } from 'react-redux';
import { store } from './redux/store';
import Dashboard from './components/Dashboard';
import CustomerSection from './components/CustomerSection';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';

interface AppProps {
  className?: string;
}

const App = ({ className }: AppProps) => {
  return (
    <Provider store={store}>
      <div className={className}>
        <div className="hidden md:block">
          <Sidebar/>
        </div>
        <div className="flex-1">
          <Navbar />
          <div className='flex-col md:flex'>
            <Dashboard />
            <CustomerSection/>
            <Menu/>
          </div>
           
        </div>
      </div>
    </Provider>
  );
};

export default App;
