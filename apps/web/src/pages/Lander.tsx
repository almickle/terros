import { Hero } from '@/components/Hero';
import { OrganicTileGrid } from '@/components/OrganicTileGrid';

export function Lander() {
  return (
    <div className="flex-column">
      <Hero
        title="Terros is a self-contained ecosystem, engineered for balance"
        subtitle="Nature meets technology. A living ecosystem at your fingertips."
      />
      <div className="w-full flex-row items-center justify-around" style={{ height: '1000px' }}>
        <OrganicTileGrid />
        <div className="w-half">
          <img src="terrarium.png" />
        </div>
      </div>
    </div>
  );
}

export default Lander;
