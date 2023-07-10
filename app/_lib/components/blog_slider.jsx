'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { urlFor } from '@/sanity/sanity-utils';

function ImageComponent ({ image }) {
    return (
        <Image src={urlFor(image).width(600).url()} width={400} alt={"Image"} height={300} className='transition-all w-full h-full object-cover' style={{ objectPosition: "50% 50%" }}  />
    );
}

export default function BlogSlider ({ blogs }) {
    const aaa = useRef();

  let [sliderprops, setSliderprops] = useState("horizontal");
  let [perpage, setPerPage] = useState(2);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSliderprops("vertical");
    }

    if (window.innerWidth < 730) {
      setPerPage(1);
    }

    function updateSize (e) {
      let w = e.currentTarget.innerWidth;

      if (w < 730 && perpage != 1) {
        setPerPage(1);
      } else if (w > 730 && perpage != 2) {
        console.log("Setting perpage2", perpage);
        setPerPage(2);
      }

      if (w > 1024 && sliderprops != "horizontal") {
        setSliderprops("horizontal")
      } else if (w < 1024 && sliderprops != "vertical") {
        setSliderprops("vertical");
      }
    }
    
    window.addEventListener('resize', updateSize);
  });

    return (
    <div className="w-full h-fit rounded-xl overflow-hidden ring-2 ring-orange-600">
        <Splide ref={aaa} aria-label="My Favorite Images" options={{ drag: 'free', snap: true, height: (sliderprops == "horizontal" ? 380 : 550 ), speed: 800 }}>
            {blogs.map((blog_data, i) => <ASlide blog_data={blog_data} key={i} number={i + 1} sliderprops={sliderprops} perpage={perpage} />)}
        </Splide>
      </div>
    );
}

function ASlide ({ blog_data, number, sliderprops, perpage }) {
  let { images, type, title, description, tags } = blog_data;

  let [images_pack, setImagesPack] = useState([]);

  useEffect(() => {
    setImagesPack(images.map((image) => {
      return <ImageComponent image={image} />
    }));
  }, []);

  return (
    <SplideSlide>
        <div className="flex flex-col lg:flex-row w-full h-full bg-orange-700">
        <div className="w-full lg:w-5/12 lg:h-full lg:overflow-y-scroll bg-orange-100/40 rounded-tr-md rounded-br-md p-3 scrollbar-thin scrollbar-thumb-white/50 scrollbar-thumb-rounded-full transition-all hover:scrollbar-thumb-white/80">
            {sliderprops == "vertical" ? (
            <Splide options={{ height: 220, perPage: perpage, padding: 2 }}>
                {images_pack.map((image, i) => {
                    return (
                      <SplideSlide key={i}>
                        <div className="h-full w-auto rounded-xl overflow-hidden mx-2">{image}</div>
                      </SplideSlide>
                    );
                })} 
            </Splide>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                  {images_pack.map((image, i) => {
                      return (
                        <div className="aspect-[4/3] rounded-xl overflow-hidden" key={i}>{image}</div>
                      );
                  })}
              </div>
            )}
        </div>
        <div className="w-full lg:w-7/12 lg:h-full p-5 relative overflow-auto scrollbar-thin scrollbar-thumb-white/50 scrollbar-thumb-rounded-full transition-all hover:scrollbar-thumb-white/80">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-amber-500/90 mt-3 rotate-90 absolute right-0 top-10">#00{number}</h1>
            <div className="w-10/12">
            <div className="flex justify-between flex-wrap items-center">
                <p className="uppercase text-white/70 text-xs md:text-sm tracking-wider">{type}</p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-orange-200 mt-3">{title}</h1>
            <p className="text-content text-sm md:text-base text-orange-100/90 mt-3 font-serif">{description}</p>
            <div className="flex mt-3 w-fit flex-wrap gap-y-3 gap-x-3">
                {tags.map((tag, i) => {
                  return (<div className="px-2 text-xs sm:text-sm rounded-full text-white/90 bg-amber-500/80" key={i}>{tag}</div>);
                })}
            </div>
            </div>
        </div>
        </div>
    </SplideSlide>
  );
}