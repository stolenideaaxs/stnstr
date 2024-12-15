const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black animate-pulse">
      {/* Glowing void effect */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-radial from-brand-red/20 via-transparent to-transparent animate-pulse mix-blend-overlay"></div>
      </div>
      
      <div className="text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-brand-white">STN</span>
          <span className="text-brand-red">STREET</span>
        </h1>
        <p className="text-xl text-brand-white/60">Start building your amazing project here!</p>
      </div>
    </div>
  );
};

export default Index;