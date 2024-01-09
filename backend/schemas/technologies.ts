export default {
    name: 'technologies',
    title: 'Technologies',
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
            name: 'order',
            title: 'Order',
            type: 'number'
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};