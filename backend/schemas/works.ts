export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'descriptionPT',
            title: 'DescriptionPT',
            type: 'string',
        },
        {
            name: 'descriptionES',
            title: 'DescriptionES',
            type: 'string',
        },
        {
            name: 'descriptionEN',
            title: 'DescriptionEN',
            type: 'string',
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ]
        },
    ],
};