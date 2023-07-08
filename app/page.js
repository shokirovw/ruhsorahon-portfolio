import Image from 'next/image'

import { getBlogs, getHomepageContent } from '@/sanity/sanity-utils';
import BlogSlider from '@/app/_lib/components/blog_slider';

import AudioPanel from './_lib/components/audiopanel';

export default async function Home() {
  const { main_image, small_texts, small_pictures, big_title } = await getHomepageContent();

  const blogs = await getBlogs();

  let parsed_title = big_title.split(" ");

  let ml = 0;

  return (
    <div className='w-full bg-white'>
      <div className='w-full bg-[#c9b284] overflow-hidden'>
        <div className='flex'>
          <div className='img w-4/12 h-screen bg-red-500'>
            <Image src={main_image} width={960} height={1280} priority={true} className='w-full h-full object-cover' />
          </div>
          <div className='w-8/12 p-8 px-4 md:px-16 flex flex-col'>
            <div className="grow mb-6 flex flex-col 2xl:flex-row gap-y-5 md:gap-y-10 w-full">
              <div className='2xl:grow text-4xl md:text-6xl lg:text-8xl leading-snug'>
                {parsed_title.map((chunk) => {
                  ml += 20;
                  return <h1 className={'ml-' + (ml - 20)}>{chunk}</h1>;
                })}
              </div>
              <div>
                <AudioPanel />
              </div>
            </div>
            <div className='w-full'>
              <div className='flex flex-col md:flex-row justify-start gap-x-6 mb-6 md:mb-10 font-second text-sm lg:text-xl font-medium'>
                {small_texts.map((text) => <p className='w-full md:w-1/3'>{text}</p>)}
              </div>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 xl:gap-x-16 gap-y-6'>
                {small_pictures.map((picture_url) => {
                  return <div className='aspect-square'><Image src={picture_url} width={240} height={320} priority={true} className='w-full h-full object-cover rounded-lg' /></div>
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='container w-full max-w-full min-h-[83.6vh] pt-7 pb-16 px-8 md:pt-16 lg:px-16 mx-auto'>
            <div className={`container max-w-6xl mx-auto`}>
                <h1 className='text-7xl lg:text-8xl text-center'>Projects</h1>
                <p className="text-content mt-8 container max-w-2xl mx-auto text-center font-serif text-lg text-black/80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste debitis odio tenetur eveniet architecto aperiam ipsam reiciendis, velit soluta, doloremque maiores reprehenderit eius nisi dolor perferendis quidem magnam autem. Ut.</p>
                <div className="mt-10">
                  <BlogSlider blogs={blogs} />
                </div>
            </div>
        </div>
        <div className="h-fit w-full px-10 flex items-center justify-center">
            <div className='w-full h-fit border-t-[1px] border-black/60 py-4'>
              <p className='text-black/80 text-base md:text-2xl font-second font-bold tracking-wide text-center'>© {new Date().getFullYear()} {big_title}</p>
            </div>
        </div>
      </div>
    </div>
  )
}


