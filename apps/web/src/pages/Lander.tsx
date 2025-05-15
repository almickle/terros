import { OrganicTileGrid } from '@/components/OrganicTileGrid';

export function Lander() {
  return (
    <div className="w-full flex-row items-center" style={{ height: '1000px' }}>
      <OrganicTileGrid />
      <div className="w-half h-half">
        <img src="terrarium.png" />
      </div>
    </div>
  );
}

export default Lander;
