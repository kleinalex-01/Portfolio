const AboutWorksDivider = () => {
  return (
    <div className="about-works-divider">
      <svg
        width="100%"
        height="200"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Felső rész - Hullám forma, About szekció színével egyező (fejjel lefelé forgatva) */}
        <path
          d="M0,75 Q300,125 600,75 T1200,75 L1200,0 L0,0 Z"
          fill="#1d1d32ff"
        />
        {/* Alsó rész - Átlátszó */}
        <path
          d="M0,75 L1200,75 L1200,200 L0,200 Z"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default AboutWorksDivider;