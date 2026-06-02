import React, { useState, useEffect, useMemo } from "react";

const Hero = ({ products }) => {
    const [index, setIndex] = useState(0);

    const filteredData = useMemo(() => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 10);
    }, [products]);

    useEffect(() => {
        if (filteredData.length === 0) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % filteredData.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [filteredData]);

    if (filteredData.length === 0) {
        return (
            <div className="flex items-center justify-center h-[90vh] text-white">
                Loading...
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center h-[90vh] w-full text-white">
            <div className="left w-1/2 px-14">
                <h1 className="text-6xl font-bold mb-2">
                    Summer collection up to 50% off
                </h1>

                <p className="text-2xl mb-2">
                    Explore the latest trends in fashion, electronics, and more —
                    all in one place.
                </p>

                <button className="font-semibold text-xl px-4 py-1 rounded bg-teal-700 text-white">
                    Shop now
                </button>
            </div>

            <div className="flex flex-col right w-1/2 h-full items-center justify-center">
                <img
                    className="h-96 object-cover rounded-lg transition-all duration-700"
                    src={filteredData[index]?.image}
                    alt={filteredData[index]?.title || "Product"}
                />

                <div className="flex gap-2 mt-4">
                    {filteredData.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${i === index
                                ? "bg-black scale-125"
                                : "bg-gray-400 opacity-60"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;