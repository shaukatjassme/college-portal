import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export const Biology = () => {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-6 text-center">Biology Chapters</h1>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Chapter 1 */}
        <Link href="/classes/chapters/bio-topics/zology">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl cursor-pointer">
          <img src="/images/intro-biology.jpg" alt="Chapter 1" className="w-full  object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Chapter 1: Introduction to Biology</h3>
            <p className="text-gray-600">An introduction to the study of life and living organisms.</p>
          </div>
        </div>
        </Link>

        {/* Chapter 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl cursor-pointer">
          <img src="/images/cell.jpg" alt="Chapter 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Chapter 2: Cell Biology</h3>
            <p className="text-gray-600">Discover the building blocks of life—cells and their structures.</p>
          </div>
        </div>

        {/* Chapter 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl cursor-pointer">
          <img src="/images/genetics.jpg" alt="Chapter 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Chapter 3: Genetics and Evolution</h3>
            <p className="text-gray-600">Learn about inheritance, DNA, and the evolution of species.</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Biology;
