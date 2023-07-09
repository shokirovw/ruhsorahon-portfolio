import { AiOutlineClockCircle } from 'react-icons/ai';

const article = {
    name: "article",
    title: "Articles",
    type: "document",
    fields: [
        {
            name: "title",
            title: 'Main Title',
            type: 'string'
        },
        {
            name: "release_date",
            title: "Date",
            type: 'date',
        },
        {
            name: 'url_slug',
            title: 'Article URL slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: "content",
            title: "Article body content",
            type: 'array',
            of: [{type: 'block'}, { type: 'image', options: {hotspot: true}}]
        }
    ]
}

export default article;