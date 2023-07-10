'use client';

import { createClient, groq } from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: "jbvmfa1g",
    dataset: "production",
    apiVersion: "2023-07-07",
    useCdn: true
});

import Image from "next/image";

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export default function ImageComponent ({ image }) {
    return (
        <Image src={urlFor(image).width(400).url()} width={400} alt={"Image"} height={300} className='transition-all w-full h-full object-cover' style={{ objectPosition: "50% 50%" }}  />
    );
}