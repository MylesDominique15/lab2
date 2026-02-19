import Image from 'next/image';
export default function Interests() {
    // list of interests with added themed colors
    const interests = [
        { title: 'K-Pop', image: '/kpop.jpeg', color: 'border-pastel-pink', bg: 'bg-pastel-pink/10', text: 'text-pastel-pink', icon: '🎤' },
        { title: 'Gilmore Girls', image: '/gilmore.jpeg', color: 'border-pastel-yellow', bg: 'bg-pastel-yellow/10', text: 'text-pastel-yellow', icon: '🍂' },
        { title: 'Cream Cheese Milk Tea', image: '/milktea.jpeg', color: 'border-pastel-blue', bg: 'bg-pastel-blue/10', text: 'text-pastel-blue', icon: '🧋' },
        { title: 'Flower Arrangement', image: '/flower.jpeg', color: 'border-pastel-green', bg: 'bg-pastel-green/10', text: 'text-pastel-green', icon: '💐' },
      ];
  
    return (
      <div className="flex h-full flex-col">
        <div className="mb-8 border-b border-pastel-purple/20 pb-4">
          <h1 className="text-4xl font-bold tracking-wide text-white">
            My <span className="text-pastel-blue">Interests</span>
          </h1>
          <p className="mt-2 text-gray-400">Things that bring me joy and inspiration.</p>
        </div>
  
        {/* CSS grid for photo layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="group relative flex h-72 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border border-transparent bg-[#28282B] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-pastel-purple/30 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)]"
            >
              {/* image */}
                <Image 
                src={interest.image} 
                alt={interest.title} 
                fill 
                className="object-cover opacity-20 transition-all duration-500 group-hover:opacity-40 group-hover:scale-110" 
                />
                {/* pastel transluscent filter */}
                <div className={`absolute inset-0 ${interest.bg} mix-blend-overlay`}></div>
              
              <div className="z-10 flex flex-col items-center space-y-4">
                {/* icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/30 text-4xl shadow-inner transition-transform duration-500 group-hover:animate-float">
                  {interest.icon}
                </div>
                
                {/* interest title */}
                <h2 className={`text-2xl font-bold tracking-wider text-gray-200 transition-colors duration-300 group-hover:${interest.text}`}>
                  {interest.title}
                </h2>
                <div className={`h-1 w-12 rounded-full bg-gray-600 transition-all duration-500 group-hover:w-24 ${interest.bg.replace('/10', '')}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }