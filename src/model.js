export default [
    {
        name: 'Rachel Adams',
        role: 'CEO',
        start: true,
        children: [
            {
                name: 'Nigel Adams',
                role: 'husband',
                start: false,
                children: [
                    {
                        name: 'Stratus Inc.',
                        role: '',
                        start: false,
                        children: null
                    }
                ]
            },
            {
                name: 'Claire Adams',
                role: 'Daughter',
                start: false,
                children: null
            },
            {
                name: 'Billy Adams',
                role: 'Daughter',
                start: false,
                children: [
                    {
                        name: 'Stratus Inc.',
                        role: '',
                        start: false,
                        children: [
                            {
                                name: 'Stratus Inc.',
                                role: '',
                                start: false,
                                children: null
                            }
                        ]
                    },
                    {
                        name: 'Stratus Inc.',
                        role: '',
                        start: false,
                        children: null
                    }
                ]
            },
            {
                name: 'Katrina Adams',
                role: 'Daughter',
                start: false,
                children: null
            }
        ]
    }
]