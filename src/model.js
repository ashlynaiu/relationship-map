export default [
    {
        id: 1,
        name: 'Rachel Adams',
        role: 'CEO',
        start: true,
        object: 'Account',
        cardData: [
            {
                title: 'Customer',
                object: 'Account',
                info: [
                    {
                        label: 'Total Loans',
                        field: '$1,378,123'
                    },
                    {
                        label: 'Total Deposits',
                        field: '$1,100,281'
                    },
                    {
                        label: 'Tier',
                        field: 'Platinum'
                    },
                    {
                        label: 'Wallet Share',
                        field: '84%'
                    },
                    {
                        label: 'Marketing Segment',
                        field: 'High Net Worth'
                    },
                    {
                        label: 'Status',
                        field: 'Active'
                    }
                ]
            },
            {
                title: 'Summary',
                object: 'Account',
                info: [
                    {
                        label: 'Number of Financial Accounts',
                        field: '$1,378,123'
                    },
                    {
                        label: 'Last Interaction',
                        field: 'March 15, 2018'
                    }
                ]
            },
            {
                title: 'Next Best Actions',
                object: 'Coaching',
                info: 'information Rachel for card number three'
            }
        ],
        children: [
            {
                id: 2,
                name: 'Nigel Adams',
                role: 'husband',
                start: false,
                object: 'Contact',
                cardData: [
                    {
                        title: 'Contact Details',
                        object: 'Contact',
                        info: 'information for Nigel card number one'
                    },
                    {
                        title: 'Open Opportunities',
                        object: 'Opportunity',
                        info: 'information for Nigel card number two'
                    },
                    {
                        title: 'Next Best Actions',
                        object: 'Coaching',
                        info: 'information for Nigel card number three'
                    }
                ],
                children: [
                    {
                        id: 3,
                        name: 'Stratus Inc.',
                        role: '',
                        start: false,
                        object: 'Account',
                        cardData: [
                            {
                                title: 'Account Details',
                                object: 'Account',
                                info: 'information for Nigel card number one'
                            },
                            {
                                title: 'Open Opportunities',
                                object: 'Opportunity',
                                info: 'information for Nigel card number two'
                            },
                            {
                                title: 'Next Best Actions',
                                object: 'Coaching',
                                info: 'information for Nigel card number three'
                            }
                        ],
                        children: null
                    }
                ]
            },
            {
                id: 4,
                name: 'Claire Adams',
                role: 'Daughter',
                start: false,
                object: 'Contact',
                cardData: [
                    {
                        title: 'Contact Details',
                        object: 'Contact',
                        info: 'information for Claire card number one'
                    },
                    {
                        title: 'Open Opportunities',
                        object: 'Opportunity',
                        info: 'information for Claire card number two'
                    },
                    {
                        title: 'Next Best Actions',
                        object: 'Coaching',
                        info: 'information for Claire card number three'
                    }
                ],
                children: null
            },
            {
                id: 5,
                name: 'Billy Adams',
                role: 'Son',
                start: false,
                object: 'Contact',
                cardData: [
                    {
                        title: 'Contact Details',
                        object: 'Contact',
                        info: 'information for card number one'
                    },
                    {
                        title: 'Open Opportunities',
                        object: 'Opportunity',
                        info: 'information for card number two'
                    },
                    {
                        title: 'Next Best Actions',
                        object: 'Coaching',
                        info: 'information for card number three'
                    }
                ],
                children: [
                    {
                        id: 6,
                        name: 'Stratus Inc.',
                        role: 'Foundation',
                        start: false,
                        object: 'Account',
                        cardData: [
                            {
                                title: 'Account Details',
                                object: 'Account',
                                info: 'information for card number one'
                            },
                            {
                                title: 'Open Opportunities',
                                object: 'Opportunity',
                                info: 'information for card number two'
                            },
                            {
                                title: 'Next Best Actions',
                                object: 'Coaching',
                                info: 'information for card number three'
                            }
                        ],
                        children: [
                            {
                                id: 7,
                                name: 'Cumulus LLC',
                                role: 'Services',
                                start: false,
                                object: 'Account',
                                cardData: [
                                    {
                                        title: 'Account Details',
                                        object: 'Account',
                                        info: 'information for card number one'
                                    },
                                    {
                                        title: 'Open Opportunities',
                                        object: 'Opportunity',
                                        info: 'information for card number two'
                                    },
                                    {
                                        title: 'Next Best Actions',
                                        object: 'Coaching',
                                        info: 'information for card number three'
                                    }
                                ],
                                children: null
                            },
                            {
                                id: 8,
                                name: 'Sam Hubburd',
                                role: 'Attorney',
                                start: false,
                                object: 'Contact',
                                cardData: [
                                    {
                                        title: 'Contact Details',
                                        object: 'Contact',
                                        info: 'information for Sam card number one'
                                    },
                                    {
                                        title: 'Open Opportunities',
                                        object: 'Opportunity',
                                        info: 'information for Sam card number two'
                                    },
                                    {
                                        title: 'Next Best Actions',
                                        object: 'Coaching',
                                        info: 'information for Sam card number three'
                                    }
                                ],
                                children: null
                            }
                        ]
                    },
                    {
                        id: 9,
                        name: 'Stratus Inc.',
                        role: '',
                        start: false,
                        object: 'Account',
                        cardData: [
                            {
                                title: 'Account Details',
                                object: 'Account',
                                info: 'information for card number one'
                            },
                            {
                                title: 'Open Opportunities',
                                object: 'Opportunity',
                                info: 'information for card number two'
                            },
                            {
                                title: 'Next Best Actions',
                                object: 'Coaching',
                                info: 'information for card number three'
                            }
                        ],
                        children: null
                    }
                ]
            },
            {
                id: 10,
                name: 'Cloud LLC',
                role: 'Subsidary',
                start: false,
                object: 'Account',
                cardData: [
                    {
                        title: 'Account Details',
                        object: 'Account',
                        info: 'information for card number one'
                    },
                    {
                        title: 'Open Opportunities',
                        object: 'Opportunity',
                        info: 'information for card number two'
                    },
                    {
                        title: 'Next Best Actions',
                        object: 'Coaching',
                        info: 'information for card number three'
                    }
                ],
                children: null
            },
            {
                id: 11,
                name: 'Cloud LLC',
                role: 'Subsidary',
                start: false,
                object: 'Account',
                cardData: [
                    {
                        title: 'Account Details',
                        object: 'Account',
                        info: 'information for card number one'
                    },
                    {
                        title: 'Open Opportunities',
                        object: 'Opportunity',
                        info: 'information for card number two'
                    },
                    {
                        title: 'Next Best Actions',
                        object: 'Coaching',
                        info: 'information for card number three'
                    }
                ],
                children: null
            }
        ]
    }
]