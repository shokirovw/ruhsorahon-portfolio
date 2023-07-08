const blog = {
    name: "blog",
    title: "Blogs",
    type: "document",
    fields: [
        {
            name: "type",
            title: "Type of information",
            type: 'string'
        },
        {
            name: "title",
            title: 'Main Title',
            type: 'string'
        },
        {
            name: "description",
            title: "Description",
            type: 'string',
            validation: Rule => Rule.min(20)
        },
        {
            name: 'tags',
            title: 'Short Tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags'
            }
        },
        {
            name: "images",
            title: "Pictures to attach",
            type: 'array',
            of: [{
                type: 'image',
                options: {
                    hotspot: true
                }
            }]
        }
    ]
}

export default blog;