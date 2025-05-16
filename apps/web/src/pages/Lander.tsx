import { Hero } from '@/components/Hero';
import { Splash } from '@/components/Splash';
// import { OrganicTileGrid } from '@/components/OrganicTileGrid';

export function Lander() {
  return (
    <div className="flex-column">
      <Hero
        title="Terros is a self-contained ecosystem, engineered for balance"
        subtitle="Nature meets technology. A living ecosystem at your fingertips."
        mobileTitle="Engineered balance. Living design."
        mobileSubtitle="Nature meets technology. A living ecosystem at your fingertips."
      />
      <div className="w-full flex-row items-center justify-around">
        {/* <OrganicTileGrid /> */}
        <Splash />
      </div>
    </div>
  );
}

export default Lander;
