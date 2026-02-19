import Image from 'next/image';
export default function Profile() {
  return (
    <div className="relative flex h-full min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-pastel-purple/10 bg-darkBg shadow-inner">
      
      {/* floating emojis and texts */}
      {/* the elements are scattered by assigning them absolute positions on the page, used float animation and hover effects to look more pleasing */}
      <div className="absolute top-10 left-10 animate-float text-lg font-bold text-pastel-pink cursor-default hover:scale-110 transition-transform">✨ notion girly</div>
      <div className="absolute top-24 right-24 animate-float-delayed text-3xl cursor-default hover:scale-125 transition-transform">☕️</div>
      <div className="absolute bottom-20 left-1/4 animate-float text-lg font-bold text-pastel-green cursor-default hover:scale-110 transition-transform">🍵 milk tea addict</div>
      <div className="absolute top-1/3 left-12 animate-pulse-slow text-2xl cursor-default hover:scale-125 transition-transform">📸</div>
      <div className="absolute bottom-1/3 right-10 animate-float-delayed text-lg font-bold text-pastel-yellow cursor-default hover:scale-110 transition-transform">🌽 mais</div>
      <div className="absolute top-1/4 right-1/4 animate-float text-lg font-bold text-pastel-pink cursor-default hover:scale-110 transition-transform">🎀 pink lover</div>
      <div className="absolute bottom-10 right-1/3 animate-float-delayed text-3xl cursor-default hover:scale-125 transition-transform">🎮</div>
      <div className="absolute top-1/2 left-20 animate-float text-lg font-bold text-pastel-blue cursor-default hover:scale-110 transition-transform">📱 mobile legends</div>
      <div className="absolute bottom-12 right-12 animate-pulse-slow text-lg font-bold text-pastel-yellow cursor-default hover:scale-110 transition-transform">🥛 bearbrand</div>
      <div className="absolute top-8 right-1/3 animate-float-delayed text-lg font-bold text-pastel-green cursor-default hover:scale-110 transition-transform">🍰 tiramisu</div>
      <div className="absolute bottom-1/4 left-10 animate-float text-lg font-bold text-pastel-purple cursor-default hover:scale-110 transition-transform">✏️ stationery</div>
      <div className="absolute top-1/2 right-16 animate-float-delayed text-lg font-bold text-pastel-pink cursor-default hover:scale-110 transition-transform">🎞️ photobooth pics</div>

      {/* box containing profile picture and information */}
      <div className="z-10 flex flex-col items-center justify-center space-y-6 rounded-3xl border border-pastel-blue/20 bg-[#28282B]/80 p-10 text-center shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-pastel-blue/50 hover:shadow-[0_0_30px_rgba(191,219,254,0.1)]">
        
        {/* profile picture */}
        <div className="relative flex h-52 w-52 overflow-hidden items-center justify-center rounded-full border-4 border-pastel-pink shadow-[0_0_20px_rgba(251,207,232,0.3)] transition-all duration-300 hover:scale-105">
          <Image 
            src="/profile.jpeg" 
            alt="My Profile Picture"
            fill
            className="object-cover"
          />
        </div>

        {/* information about me */}
        <div className="space-y-3 pt-4">
          <h1 className="text-3xl font-bold tracking-widest text-white pb-2">
            Myles Dominique B. Punzal
          </h1>

          <p className="text-lg text-gray-300">
            <span className="font-semibold text-pastel-purple tracking-wide">Age:</span> 19
          </p>
          <p className="text-lg text-gray-300">
            <span className="font-semibold text-pastel-yellow tracking-wide">Birthday:</span> February 26, 2006
          </p>
          
          <div className="mt-6 rounded-xl bg-black/20 p-4 border border-pastel-green/10">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Studying in</p>
            <p className="font-bold text-pastel-green text-lg">University of the Philippines Manila</p>
            <p className="text-gray-300 font-medium">BS Computer Science</p>
          </div>
        </div>
      </div>

    </div>
  );
}