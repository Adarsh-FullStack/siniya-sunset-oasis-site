
export const WaveFooter = () => {
  return (
    <div className="relative bg-sunset-dark">
      {/* Wave SVG */}
      <div className="absolute bottom-full left-0 right-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          className="w-full h-auto -mb-1"
          preserveAspectRatio="none"
        >
          <path 
            fill="#1A1F2C" 
            fillOpacity="1" 
            d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,170.7C672,181,768,171,864,149.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          
          {/* Second wave with different color and animation */}
          <path 
            fill="#0EA5E9" 
            fillOpacity="0.2" 
            d="M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,160C672,181,768,235,864,229.3C960,224,1056,160,1152,133.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-[gradient-x_15s_ease_infinite]"
          ></path>
          
          {/* Third wave with different animation */}
          <path 
            fill="#33C3F0" 
            fillOpacity="0.1" 
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,133.3C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-[gradient-x_20s_ease_infinite]"
          ></path>
        </svg>
      </div>
    </div>
  );
};
