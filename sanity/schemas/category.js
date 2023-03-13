export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: false,
            },
        },
        {
            name:'name',
            title:'Name',
            type:'string',
        },
    ],
};