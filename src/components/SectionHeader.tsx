import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-start justify-center flex-col relative mb-2">
      <h1 className="absolute bg-indigo-200 z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
        {title}
      </h1>
      <h1 className="absolute md:translate-y-2 translate-y-1 opacity-60 bg-indigo-600 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
        {title}
      </h1>
      <h1 className="absolute md:translate-y-4 translate-y-2 opacity-50 bg-indigo-700 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
        {title}
      </h1>
      <h1 className="absolute md:translate-y-6 translate-y-3 opacity-40 bg-indigo-800 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
        {title}
      </h1>
      <h1 className="absolute md:translate-y-8 translate-y-4 opacity-30 bg-indigo-900 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;
