const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi pariatur ducimus earum id blanditiis ut fuga facere minima! At, odio? Necessitatibus voluptatum omnis tempore blanditiis impedit dignissimos assumenda magni, consectetur numquam alias. Alias, provident. Rerum voluptates dignissimos aut itaque reprehenderit dolores minima officia fugiat, facilis sapiente vero exercitationem molestias?';

const datas = {
    users: [
        {
            id: 1,
            name: 'Lorem Ipsum',
            subscribers: 114483
        },
        {
            id: 2,
            name: 'Ipsum Lorem',
            subscribers: 1383
        },
        {
            id: 3,
            name: 'Lorem lorem Ipsum',
            subscribers: 2349823
        }
    ],
    videos: [
        {
            id: 1,
            title: `Test video 1`,
            description,
            url: `https://samplelib.com/lib/preview/mp4/sample-5s.mp4`,
            author: 'Lorem'
        },
        {
            id: 2,
            title: `Test video 2`,
            description,
            url: `https://samplelib.com/lib/preview/mp4/sample-10s.mp4`,
            author: 'Ipsum'
        },
        {
            id: 3,
            title: `Test video 3`,
            description,
            url: `https://samplelib.com/lib/preview/mp4/sample-15s.mp4`,
            author: 'Lorem'
        },
        {
            id: 4,
            title: `Test video 4`,
            description,
            url: 'https://samplelib.com/lib/preview/mp4/sample-20s.mp4',
            author: 'Lorem'
        },
        {
            id: 5,
            title: `Test video 5`,
            description,
            url: `https://samplelib.com/lib/preview/mp4/sample-30s.mp4`,
            author: 'Lorem'
        },
    ],
    comments: [
        {
            id: 1,
            video: 1,
            author: 'Ipsum Lorem',
            comment: description
        }
        ,
        {
            id: 2,
            video: 1,
            author: 'Lorem lorem Ipsum',
            comment: description
        },
        {
            id: 3,
            video: 2,
            author: 'Lorem Ipsum',
            comment: description
        },
        {
            id: 4,
            video: 2,
            author: 'Lorem lorem Ipsum',
            comment: description
        },
        {
            id: 5,
            video: 3,
            author: 'Lorem Ipsum',
            comment: description
        },

    ],
    replies: [
        {
            id: 1,
            comment: 1,
            author: 'Lorem Ipsum',
            reply: description
        },
        {
            id: 2,
            comment: 2,
            author: 'Lorem Ipsum',
            reply: description
        },
        {
            id: 3,
            comment: 3,
            author: 'Lorem Ipsum',
            reply: description
        },
        {
            id: 4,
            comment: 4,
            author: 'Lorem Ipsum',
            reply: description
        },
        {
            id: 5,
            comment: 5,
            author: 'Lorem Ipsum',
            reply: description
        },
    ],
    suggested: [1, 2, 3, 4]
}

export default datas;