'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Profile', href: '/' }, // We'll make the home page your profile
  { name: 'Daily Life', href: '/daily-life' },
  { name: 'Hobbies', href: '/hobbies' },
  { name: 'Interests', href: '/interests' },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-darkBg border-r border-pastel-purple/20">
      {/* --- New "Mais" Profile Section --- */}
      <div className="group mb-8 flex h-20 w-full items-center justify-start gap-3 rounded-xl border border-pastel-yellow/20 bg-[#28282B] p-3 transition-all duration-300 hover:border-pastel-yellow/50 hover:bg-pastel-yellow/5 hover:shadow-[0_0_15px_rgba(254,240,138,0.1)] md:h-24">
        
        {/* Mini Profile Icon */}
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-pastel-yellow shadow-sm transition-transform duration-300 group-hover:scale-105 md:h-14 md:w-14">
          <Image 
            src="/icon.jpeg" // Make sure this matches your actual profile picture name!
            alt="Mais's Icon"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Nickname Text */}
        <div className="flex flex-col overflow-hidden transition-all duration-300 group-hover:translate-x-1">
          <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
            argh me!
          </span>
          <span className="truncate text-xl font-bold tracking-wider text-pastel-yellow md:text-2xl">
            mais 🌽
          </span>
        </div>
      </div>
      
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-pastel-blue/20 hover:text-pastel-blue md:flex-none md:justify-start md:p-2 md:px-3
                ${isActive ? 'bg-pastel-purple/20 text-pastel-purple border-l-4 border-pastel-purple' : 'text-gray-300'}`}
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
      </div>
    </div>
  );
}