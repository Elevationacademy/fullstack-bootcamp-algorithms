let tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 5,
                    children: []
                },
                {
                    value: 6,
                    children: [
                        {
                            value: 10,
                            children: []
                        },
                        {
                            value: 11,
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            value: 3,
            children: []
        },
        {
            value: 4,
            children: [
                {
                    value: 7,
                    children: []  
                },
                {
                    value: 8,
                    children: [
                        {
                            value: 12,
                            children: []
                        },
                        {
                            value: 13,
                            children: []
                        }
                    ]
                },
                {
                    value: 9,
                    children: [
                        {
                            value: 14,
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
}

module.exports = tree