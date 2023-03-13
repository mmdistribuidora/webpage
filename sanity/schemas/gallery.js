export default{
    name:'gallery',
    title:'Gallery',
    type:'document',
    fields: [
        {
          name: 'images',
          type: 'array', // supports drag'n'drop of multiple files
          options: {
            layout: 'grid'
          },
          of: [{
            type: 'image'
          }]
        },
        {
          name: 'midText',
          title: 'MidText',
          type: 'string',
        },
        {
            name: 'largeText1',
            title: 'LargeText1',
            type: 'string',
        },
        {
          name: 'buttonText',
          title: 'ButtonText',
          type: 'string',
      },
      ]
}