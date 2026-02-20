import Image from 'next/image';

export default function DailyLife() {
  // list of activities with added themed colors and descriptions
  const categories = [
    { title: 'Study Set-up', image: '/study.jpeg', color: 'border-pastel-blue', bg: 'bg-pastel-blue/10', text: 'text-pastel-blue', icon: '📝', description: 'I like studying alone in cafés or at school because I do not have a space at home to study.' },
    { title: 'After-school Walks', image: '/walks.jpeg', color: 'border-pastel-green', bg: 'bg-pastel-green/10', text: 'text-pastel-green', icon: '🏋🏻‍♀️', description: 'I am accomplishing my 2026 goal of walking 10 steps a day for at least 2 days in a week.' },
    { title: 'Dates', image: '/dates.jpeg', color: 'border-pastel-pink', bg: 'bg-pastel-pink/10', text: 'text-pastel-pink', icon: '🫀', description: 'My partner takes me on a date whenever we are not too busy with school works.' },
    { title: 'Girl Friends', image: '/girls.jpeg', color: 'border-pastel-purple', bg: 'bg-pastel-purple/10', text: 'text-pastel-purple', icon: '👯‍♀️', description: 'My friends! They help me a lot through my studies and they are a great support system.' },
    { title: 'Reading', image: '/read.jpeg', color: 'border-pastel-yellow', bg: 'bg-pastel-yellow/10', text: 'text-pastel-yellow', icon: '📖', description: 'I read whenever I am not too busy. I like fiction books, especially fantasy and romance.' },
    { title: 'Food', image: '/food.jpeg', color: 'border-pastel-blue', bg: 'bg-pastel-blue/10', text: 'text-pastel-blue', icon: '🥞', description: 'I love food! I like trying different places that serve good and affordable meals. This is where all my allowance go.' },
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="mb-8 border-b border-pastel-purple/20 pb-4">
        <h1 className="text-4xl font-bold tracking-wide text-white">
          Daily <span className="text-pastel-pink">Life</span>
        </h1>
        <p className="mt-2 text-gray-400">A glimpse into my everyday routine.</p>
      </div>

      {/* used CSS grid to layout the photos */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.title}
            className="group relative flex h-64 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border bg-[#28282B] shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* image */}
            <Image 
              src={category.image} 
              alt={category.title} 
              fill 
              className="object-cover opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-110" 
            />
            {/* pastel transluscent filter */}
            <div className={`absolute inset-0 ${category.bg} mix-blend-overlay`}></div>
            
            {/* glow on hover effect */}
            <div className={`absolute inset-0 border-2 ${category.color} opacity-20 transition-all duration-500 group-hover:opacity-100`}></div>

            {/* activity titles and description */}
            <div className="z-10 flex flex-col items-center space-y-2">
            <span className="text-5xl drop-shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse-slow">
                {category.icon}
              </span>
              <p className={`text-lg font-semibold tracking-wider ${category.text} transition-all duration-300`}>
                [{category.title}]
              </p>
              {/* description */}
              <p className="px-6 text-center text-sm text-gray-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}