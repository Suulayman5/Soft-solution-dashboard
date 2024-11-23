import Background6 from "../assets/Background6.png"
import Background5 from "../assets/Background5.png"
import Background4 from "../assets/Background4.png"
import Background3 from "../assets/Background3.png"
import Background2 from "../assets/Background2.png"
import Background from "../assets/Background.png"
interface MenuItem {
  id: number;
  name: string;
  price: string;
  served: number;
  BackgroundUrl: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Surf & Turf Gift Basket",
    price: "$89.24",
    served: 456,
    BackgroundUrl: Background6
  },
  {
    id: 2,
    name: "Shaking Beef Tri-Tip",
    price: "$69.46",
    served: 456,
    BackgroundUrl: Background,
  },
  {
    id: 3,
    name: "BBQ Rib Dinner",
    price: "$69.21",
    served: 456,
    BackgroundUrl: Background2,
  },
  {
    id: 4,
    name: "Chicken & Ribs Combo",
    price: "$98.49",
    served: 456,
    BackgroundUrl: Background3,
  },
  {
    id: 5,
    name: "Fried Chicken Dinner",
    price: "$83.56",
    served: 456,
    BackgroundUrl: Background4,
  },
  {
    id: 6,
    name: "Dark & Stormy",
    price: "$90.58",
    served: 456,
    BackgroundUrl: Background5,
  },
];

const Menu = () => {
    return (
        <div className="p-6">
          {/* Header */}
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Menu</h1>
            <nav>
              <ul className="flex space-x-4">
                <li className="text-purple-600 font-semibold cursor-pointer">
                  All Category
                </li>
                <li className="cursor-pointer">Breakfast</li>
                <li className="cursor-pointer">Lunch</li>
                <li className="cursor-pointer">Dinner</li>
              </ul>
            </nav>
          </header>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative rounded-lg overflow-hidden shadow-lg group"
              >
                {/* Image */}
                <img
                  src={item.BackgroundUrl}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                {/* Text Content */}
                <div className="absolute inset-x-0 bottom-4 mx-4 bg-white/40 backdrop-blur-lg p-4 rounded-md shadow-custom-light">
                  <h3 className="text-sm font-semibold truncate">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.served} Served</p>
                  <p className="text-sm font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Menu;
