import { createClient, groq } from "next-sanity";

import { cache } from "react";

import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: "jbvmfa1g",
    dataset: "production",
    apiVersion: "2023-07-07",
    useCdn: false
});

const clientFetch = cache(client.fetch.bind(client))

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export async function getHomepageContent () {
    return clientFetch(
        groq`*[_type == "page" && name == "Homepage"]{
            _id,
            _createdAt,
            name,
            "main_image": main_image.asset->url,
            big_title,
            small_texts,
            "small_pictures": small_pictures[].asset->url,
            blogs_subheading,
            videos_subheading,
            articles_subheading
        }[0]`
    );
}

export async function getArticlesList () {
    return clientFetch(
        groq`*[_type == "article"]{
            _id,
            _createdAt,
            title,
            release_date,
            "url_slug": url_slug.current
        }`
    );
}

export async function getArticleBySlug (article_slug) {
    return clientFetch(
        groq`*[_type == "article" && url_slug.current == $slug]{
  ...,
  content[]{
    ...,
    _type == "image" => {
      ...,
      "url": asset->url
    }
  }
}[0]`,
        {slug: article_slug}
    );
}

export async function getVideos () {
    return clientFetch(
        groq`*[_type == "video"]`
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
            images
        }`
    );
}