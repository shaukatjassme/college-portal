import React from 'react';
import Image from 'next/image';
export const Zoology = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-6">Zoology</h1>

      {/* Video Player */}
      <div className="flex justify-center mb-6">
        <iframe width="711" height="400" src="https://www.youtube.com/embed/9rV4k95bGag" title="Definition of Zoology | What do we study in Zoology...?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>

      {/* Other content */}
      <p className="text-gray-600">
        Explore different aspects of Zoology, from animal behavior to evolutionary biology.
      </p>
    </div>
  );
};

export default Zoology;
