export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'imgurl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        }
    ]
}