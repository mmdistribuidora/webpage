export default {
    name: 'features',
    title: 'Features',
    type: 'document',
    fields: [
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: false,
            },
        },
        {
            name:'title',
            title:'Title',
            type:'string',
        },
        {
            name:'description',
            title:'Description',
            type:'string',
        },
    ],
};