import { createClient, groq } from "next-sanity";

import { cache } from "react";

const client = createClient({
    projectId: "jbvmfa1g",
    dataset: "production",
    apiVersion: "2023-07-07",
    useCdn: false
});

const clientFetch = cache(client.fetch.bind(client))

export async function getHomepageContent () {
    return clientFetch(
        groq`*[_type == "page" && name == "Homepage"]{
            _id,
            _createdAt,
            name,
            "main_image": main_image.asset->url,
            big_title,
            small_texts,
            "small_pictures": small_pictures[].asset->url
        }[0]`
    );
}

export async function getBlogs () {
    return clientFetch(
        groq`*[_type == "blog"]{
            _id,
            _createdAt,
            type,
            title,
            description,
            tags,
            "images": images[].asset->url
        }`
    );
}