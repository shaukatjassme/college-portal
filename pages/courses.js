import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Courses = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // For large screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // For medium screens (tablets)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // For small screens (mobile)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false // Disable arrows on small screens
                }
            }
        ]
    };

    return (
        <>
            <div className="container mx-auto p-4 text-center">
                <h1 className="text-2xl font-bold">Courses Page</h1>
                <p>Welcome to the courses page!</p>

                <div className="carousel-container max-w-4xl mx-auto">
                    <Slider {...settings}>
                        <div>
                            <img src="/images/biology.jpg"  alt="Slide 1" className="mx-auto slide-image  object-cover" />
                        </div>
                        <div>
                            <img src="/images/chemistry.jpg"  alt="Slide 2" className="mx-auto slide-image object-cover" />
                        </div>
                        <div>
                            <img src="/images/physics.jpg" alt="Slide 3" className="mx-auto slide-image object-cover" />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Courses;
