import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const firstYear = () => {
    return (
        <div className="container mx-auto p-4 ">
            <h1 className="text-2xl font-bold mb-6 text-center">First Year All Chapters</h1>
            
            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                
                {/* Card 1 */}

                <Link href="/classes/chapters/biology">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
                    <img src="/images/biology.jpg" alt="Chapter 1" className="w-full  object-cover" />
                   
                </div>
                </Link>
           

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
                    <img src="/images/physics.jpg" alt="Chapter 2" className="w-full  object-cover" />
                    <div className="p-4">
        
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
                    <img src="/images/chemistry.jpg" alt="Chapter 3" className="w-full h-100 object-cover" />
                    <div className="p-4">
 
                    </div>
                </div>

           
            

            </div>
        </div>
    );
};

export default firstYear;
