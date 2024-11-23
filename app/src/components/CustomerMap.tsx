import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';
import MapIcon from '../assets/MapIcon.svg';

const customIcon = new L.Icon({
  iconUrl: MapIcon, 
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const markers: { position: LatLngTuple; name: string; customers: number; }[] = [
  { position: [37.7749, -122.4194], name: 'San Francisco', customers: 201 },
  { position: [38.5816, -121.4944], name: 'Sacramento', customers: 150 },
  { position: [37.4419, -122.143], name: 'Palo Alto', customers: 90 },
  { position: [37.7749, -123.12], name: 'Paradise Cay', customers: 201 },
  { position: [38.8654, -124.11], name: 'Vallejo', customers: 15 },
  { position: [39.6331, -125.6311], name: 'Vallejo', customers: 225 },
  { position: [37.2431, -124.6311], name: 'Vallejo', customers: 10 },
  { position: [38.2431, -122.6311], name: 'Vallejo', customers: 109 },
];

const CustomerMap = () => {
  return (
    <div
      className="rounded-lg shadow-md p-4 bg-white"
      style={{
        width: '100%',
        maxWidth: '545px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
        borderRadius: '12px',
      }}
    >
      <div>
        <h2 className="font-inter font-semibold text-[16px] leading-[24px] text-[#081734] mb-2">
          Customer Map
        </h2>
        <hr className="border-t border-[#e6e8f0] w-full mt-1 mb-2" />
      </div>

      <div
        className="map-container"
        style={{
          width: '100%',
          height: '318px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <MapContainer
          center={[37.7749, -122.4194]} 
          zoom={8}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position} icon={customIcon}>
              <Popup>
                <strong>{marker.name}</strong>
                <br />
                {marker.customers} Customers
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CustomerMap;

