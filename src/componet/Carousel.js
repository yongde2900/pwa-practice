import { useState } from "react";

const images = [
    "/simpleT.jpg",
    "/theremometer1.jpg",
    "/theremometer2.jpg",
    "/theremometer3.jpg",
    "/theremometer4.jpg"
];

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const previousSlide = () => {
        const index = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(index);
    };

    const nextSlide = () => {
        const index = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(index);
    };

    return (
        <div className="relative w-full ">
            <div className="h-172  mx-auto flex justify-center">
                <img
                    src={images[activeIndex]}
                    alt=""
                    className=" max-h-64 hover:max-h-screen  "
                />
            </div>
            <div className="absolute -bottom-5 left-0 right-0 flex justify-center md:-bottom-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 mx-2 rounded-full ${activeIndex === index ? "bg-black" : "bg-gray-500"
                            }`}
                        onClick={() => setActiveIndex(index)}
                    ></button>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-0 w-12 h-12 bg-black bg-opacity-50 text-white flex items-center justify-center rounded-full hidden md:block"
                onClick={previousSlide}
            >
                {"<"}
            </button>
            <button
                className="absolute top-1/2 right-0 w-12 h-12 bg-black bg-opacity-50 text-white flex items-center justify-center rounded-full hidden md:block"
                onClick={nextSlide}
            >
                {">"}
            </button>
            <div className="absolute bottom-0 left-0 right-0 md:hidden">
                <div className="flex justify-center">
                    <button
                        className="w-6 h-6 mx-2 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center"
                        onClick={previousSlide}
                    >
                        {"<"}
                    </button>
                    <button
                        className="w-6 h-6 mx-2 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center"
                        onClick={nextSlide}
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;