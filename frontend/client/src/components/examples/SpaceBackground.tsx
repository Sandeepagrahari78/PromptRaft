import SpaceBackground from '../SpaceBackground';

export default function SpaceBackgroundExample() {
  return (
    <div className="h-screen w-full relative">
      <SpaceBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-white text-xl">Space Background Demo</p>
      </div>
    </div>
  );
}