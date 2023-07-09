import { Footer } from '@/app/_lib/components/footer';

import { getArticleBySlug } from '@/sanity/sanity-utils';

import { AiOutlineClockCircle } from 'react-icons/ai';

import {PortableText} from '@portabletext/react'

import { BiUser } from 'react-icons/bi';

import Image from "next/image";

function ImageComponent ({ url }) {
    return (
        <Image src={url} width={400} height={300} className='transition-all w-full h-full object-cover' style={{ objectPosition: "50% 50%" }}  />
    );
}

const myPortableTextComponents = {
	types: {
		image: ({ value }) => <ImageComponent url={value.url} />
	}
}

export default async function Article ({ params }) {
	let article_id = params.id;

	let article_data = await getArticleBySlug(article_id);

	return (
		<div className='w-full bg-white'>
      		<div className='w-full bg-[#c9b284] overflow-hidden min-h-screen'>
      			<div className={`container max-w-4xl mx-auto min-h-[92vh] pt-7 pb-16 px-8 md:pt-16 lg:px-16 mx-auto`}>
		            <h1 className='text-6xl lg:text-8xl text-center'>{article_data.title}</h1>
		            <p className="text-content mt-8 container max-w-2xl mx-auto text-center font-serif text-lg text-black/70">{article_data.description}</p>
		            <div className="flex flex-row justify-between mt-8 container max-w-xl mx-auto text-center font-serif text-lg text-black/80">
		            	<div className="flex flex-row gap-x-2 items-center"><AiOutlineClockCircle /><p>02.08.2023</p></div>
		            	<div className="flex flex-row gap-x-2 items-center"><p>Shokirjonova Ruxsoraxon</p><BiUser /></div>
		            </div>
		            <div className="mt-10">
			            <article className="prose prose-lg prose-stone mx-auto max-w-2xl">
			            	<PortableText
							  value={article_data.content}
							  components={myPortableTextComponents}
							/>
			            </article>
		            </div>
		        </div>
		        <div className="h-fit w-full px-10 flex items-center justify-center">
		            <div className='w-full h-fit border-t-[1px] border-black/60 py-4'>
		              <p className='text-black/80 text-base md:text-2xl font-second font-bold tracking-wide text-center'>© {new Date().getFullYear()} Shokirjonova Ruxsoraxon</p>
		            </div>
		        </div>
      		</div>
      	</div>
	);
}