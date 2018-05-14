export default [
    {
        name: 'Rachel Adams',
        role: 'CEO',
        start: true,
        object: 'Account',
        cardData: [
            {
                title: 'Account Details',
                object: 'Account',
                info: 'information Rachel for card number one'
            },
            {
                title: 'Open Opportunities',
                object: 'Opportunity',
                info: 'information Rachel for card number two'
            },
            {
                title: 'Next Best Actions',
                object: 'Coaching',
                info: 'information Rachel for card number three'
            }
        ],
        children: [
            {
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
                        children: [
                            {
                                name: 'Cumulus LLC',
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
                name: 'Katrina Adams',
                role: 'Daughter',
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
                children: null
            }
        ]
    }
]