export default {
    name: 'customers',
    title: 'Customers',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
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
    ],
};