export const DUMMY_DATA = [
    {
        isButton: false,
        categoryTitle: 'Labs',
        tabs: [
            {id:'labs-tab1', tabTitle: 'My Labs', tabContent: 'No labs found.'},
            {id:'labs-tab2', tabTitle: 'Invited', tabContent: 'No pending Lab invitations.'}
        ]
    },
    {
        isButton: false,
        categoryTitle: 'Challenges',
        tabs: [
            {id:'challenges-tab1', tabTitle: 'My Challenges', tabContent: 'No challenges found.'},
            {id:'challenges-tab2', tabTitle: 'Invited', tabContent: 'No pending Challenge invitations.'},
            {id:'challenges-tab3',tabTitle: 'Following', tabContent: 'No challenges followed.'}
        ]
    },
    {
        isButton: true,
        categoryTitle: 'Projects',
        tabs: [
            {id:'projects-tab1', tabTitle: 'My Projects', tabContent: 'No projects found.'},
            {id:'projects-tab2', tabTitle: 'Need to assess', tabContent: 'No projects to assess.'},
            {id:'projects-tab3', tabTitle: 'Invited', tabContent: 'No pending Project invitations.'}
        ]
    },
]