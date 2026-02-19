import Image from 'next/image';
export default function Hobbies() {
    // list of hobbies with added themed colors
    const hobbies = [
        { title: 'Reading', image: '/read.jpeg', color: 'border-pastel-yellow', bg: 'bg-pastel-yellow/10', text: 'text-pastel-yellow', icon: '📚' },
        { title: 'Preserving Flowers', image: '/preserve.jpeg', color: 'border-pastel-pink', bg: 'bg-pastel-pink/10', text: 'text-pastel-pink', icon: '🌸' },
        { title: 'Solo Dates', image: '/solodate.jpeg', color: 'border-pastel-purple', bg: 'bg-pastel-purple/10', text: 'text-pastel-purple', icon: '🍷' },
        { title: 'Eating', image: '/eat.jpeg', color: 'border-pastel-green', bg: 'bg-pastel-green/10', text: 'text-pastel-green', icon: '🍜' },
      ];
  
    return (
      <div className="flex h-full flex-col">
        <div className="mb-8 border-b border-pastel-purple/20 pb-4">
          <h1 className="text-4xl font-bold tracking-wide text-white">
            My <span className="text-pastel-yellow">Hobbies</span>
          </h1>
          <p className="mt-2 text-gray-400">Things I love doing in my free time.</p>
        </div>
  
        {/* CSS grid to layout the photos */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className="group relative flex h-72 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border bg-[#28282B] shadow-lg transition-all duration-700 hover:rotate-1 hover:scale-105 hover:shadow-2xl"
            >
              {/* image */}
                <Image 
                src={hobby.image} 
                alt={hobby.title} 
                fill 
                className="object-cover opacity-30 transition-all duration-700 group-hover:opacity-50 group-hover:scale-110" 
                />
                {/* pastel transluscent filter */}
                <div className={`absolute inset-0 ${hobby.bg} mix-blend-overlay`}></div>
              
              {/* glow on hover effect */}
              <div className={`absolute inset-0 border-2 ${hobby.color} opacity-30 transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]`}></div>
  
              {/* hobby title */}
              <div className="z-10 flex flex-col items-center space-y-3 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-5xl drop-shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse-slow">
                  {hobby.icon}
                </span>
                <h2 className={`text-2xl font-bold tracking-wider ${hobby.text}`}>
                  {hobby.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }