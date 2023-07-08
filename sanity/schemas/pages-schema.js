const project = {
    name: "page",
    title: "Pages",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Page Name",
            type: 'string'
        },
        {
            name: "main_image",
            title: 'Main Image',
            type: 'image',
            description: "Recommended size is 9:16",
            options: {
                hotspot: true
            }
        },
        {
            name: "big_title",
            title: "Big title",
            type: 'string',
            description: "Recommended pattern is firstname and surname",
            validation: Rule => Rule.max(40).warning(`A long title will not look amazing.`)
        },
        {
            name: 'small_texts',
            title: 'Small Texts',
            type: 'array',
            of: [{type: 'string'}],
            validation: Rule => Rule.min(1).max(3)
        },
        {
            name: "small_pictures",
            title: "Small Pictures",
            type: 'array',
            of: [{
                type: 'image',
                options: {
                    hotspot: true
                }
            }],
            validation: Rule => Rule.length(5)
        }
    ]
}

export default project;