import Icon1 from '../assets/Icon1.svg';
import Icon2 from '../assets/Icon2.svg';
import Icon3 from '../assets/Icon3.svg';

interface MetricCardProps {
  title: string;
  value: string | number;
  img: string;
}

const MetricCard = ({ title, value, img }: MetricCardProps) => {
  return (
    <div className="bg-white w-[254px] h-[182px] rounded-[12px] border border-gray-200 shadow-sm p-4 flex flex-col items-start">
      <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-100 mb-3">
        <img src={img} alt={title} />
      </div>
      <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
    </div>
  );
};

const MetricsSection = () => {
  return (
    <div className="flex flex-wrap gap-[16px] lg:gap-[30px] lg:w-[1110px] lg:h-auto lg:top-[142px] lg:left-[287px]">
      <MetricCard title="Total Menu" value={345} img={Icon1} />
      <MetricCard title="Total Revenue" value="$37,193.00" img={Icon2} />
      <MetricCard title="Total Customer" value={1349} img={Icon3} />
      <MetricCard title="Total Orders" value={3500} img={Icon1} />
    </div>
  );
};

export default MetricsSection;


