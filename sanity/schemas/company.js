export default {
    name: 'company',
    title: 'Company',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
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
        {
            name:'description',
            title:'Description',
            type:'string',
        },
        {
            name:'facebook',
            title:'Facebook',
            type:'string',
        },
        {
            name:'facebookurl',
            title:'Facebook URL',
            type:'string',
        },
        {
            name:'phone',
            title:'Phone',
            type:'string',
        },
        {
            name:'whatsapp',
            title:'Whatsapp',
            type:'string',
        },
        {
            name:'email',
            title:'Email',
            type:'string',
        },
    ],
};