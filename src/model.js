export default [
    {
        name: 'Rachel Adams',
        role: 'CEO',
        start: true,
        cardData: [
            {
                title: 'Account Details',
                info: 'information Rachel for card number one'
            },
            {
                title: 'Open Opportunities',
                info: 'information Rachel for card number two'
            },
            {
                title: 'Next Best Actions',
                info: 'information Rachel for card number three'
            }
        ],
        children: [
            {
                name: 'Nigel Adams',
                role: 'husband',
                start: false,
                cardData: [
                    {
                        title: 'Account Details',
                        info: 'information for Nigel card number one'
                    },
                    {
                        title: 'Open Opportunities',
                        info: 'information for Nigel card number two'
                    },
                    {
                        title: 'Next Best Actions',
                        info: 'information for Nigel card number three'
                    }
                ],
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
                cardData: [
                    {
                        title: 'Account Details',
                        info: 'information for Claire card number one'
                    },
                    {
                        title: 'Open Opportunities',
                        info: 'information for Claire card number two'
                    },
                    {
                        title: 'Next Best Actions',
                        info: 'information for Claire card number three'
                    }
                ],
                children: null
            },
            {
                name: 'Billy Adams',
                role: 'Daughter',
                start: false,
                cardData: [
                    {
                        title: 'Account Details',
                        info: 'information for card number one'
                    },
                    {
                        title: 'Open Opportunities',
                        info: 'information for card number two'
                    },
                    {
                        title: 'Next Best Actions',
                        info: 'information for card number three'
                    }
                ],
                children: [
                    {
                        name: 'Stratus Inc.',
                        role: '',
                        start: false,
                        cardData: [
                            {
                                title: 'Account Details',
                                info: 'information for card number one'
                            },
                            {
                                title: 'Open Opportunities',
                                info: 'information for card number two'
                            },
                            {
                                title: 'Next Best Actions',
                                info: 'information for card number three'
                            }
                        ],
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
                        cardData: [
                            {
                                title: 'Account Details',
                                info: 'information for card number one'
                            },
                            {
                                title: 'Open Opportunities',
                                info: 'information for card number two'
                            },
                            {
                                title: 'Next Best Actions',
                                info: 'information for card number three'
                            }
                        ],
                        children: null
                    }
                ]
            },
            {
                name: 'Katrina Adams',
                role: 'Daughter',
                start: false,
                cardData: [
                    {
                        title: 'Account Details',
                        info: 'information for card number one'
                    },
                    {
                        title: 'Open Opportunities',
                        info: 'information for card number two'
                    },
                    {
                        title: 'Next Best Actions',
                        info: 'information for card number three'
                    }
                ],
                children: null
            }
        ]
    }
]