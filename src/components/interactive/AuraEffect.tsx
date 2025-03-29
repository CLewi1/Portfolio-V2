import './auraEffect.css';

export default function AuraEffect() {
  return (
    <div className="aura-container pointer-events-none absolute top-0 left-0 overflow-hidden w-full h-[18rem] sm:h-[20rem] lg:h-[24rem] z-0">
      <div className="aura-content h-full relative">
        <div className="aura-wrapper aura z-0 opacity-50 w-[300%] h-full absolute left-[-100%] overflow-hidden sm:w-[400%] sm:left-[-150%]">
          <div className="aura-rays-wrapper aura-rays flex items-center absolute inset-0">
            <div className="aura-rainbow-element aura-rainbow aspect-square w-[120%] absolute left-[-10%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
