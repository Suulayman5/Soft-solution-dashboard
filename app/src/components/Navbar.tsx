import mail from '../assets/mail.svg';
import bell from '../assets/bell.svg';
import Avatar from '../assets/Avatar.svg';
import Search from '../assets/Search.svg';

const Navbar = () => {
  return (
    <nav className="bg-[#fffff] top-[-4px] px-3 lg:w-[1080px] h-[96px] flex justify-between items-center">
      <div className="flex flex-col top-[20px] md:left-[48px] md:gap-[4px]">
        <h1 className="text-inter font-[700] text-[24px] leading-[31.2px] md:w-[118px] h-[31px] text-[#111827]">
          Hi, Taylor!
        </h1>
        <p className="text-[#718096] md:w-[187px] h-[22px] text-[14px] leading-[22.4px] font-[400]">
          Let's check your story today
        </p>
      </div>
      <div className="flex items-center gap-4 flex-wrap md:left-[962px]">
        <div className="relative lg:w-64">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <img src={Search} alt="Search icon" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="lg:w-[282px] h-[48px] top-[24px] rounded-[12px] pl-10
              border-[1px] text-[#fafafa] border-[#d9d9d9] placeholder:font-sans placeholder:font-normal 
              placeholder:text-sm placeholder:text-[#adaec0] placeholder:leading-[22.4px]"
          />
        </div>
        <div className="flex gap-4 items-center">
          <img src={mail} alt="Mail" />
          <img src={bell} alt="Bell" />
        </div>
        <div className="flex items-center gap-[16px] md:top-[24px] md:left-[962px]">
          <img src={Avatar} alt="User avatar" />
          <span className="ml-2 hidden md:block truncate max-w-[150px]">Tynisha Obey</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
