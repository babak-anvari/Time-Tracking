let users = [
    {
        id: "u1",
        firstName: "Tim",
        lastName: "Smith",
        email: "tim@getMaxListeners.com",
        currentPosition: "Mechanical Engineer",
        employmentDate: "11/17/2020"
    }
];

let projects = [];

let timesheet = {
    userId: 22,
    tasks: [
        {
            date: new Date('2020,2,3'),
            hour: 12,
            number: "120",
            activity: "A-200",
            category: "Z-ENG",
            transactionText: "DISCHARGE CONVEYOR"
        },
        {
            date: new Date('2020,2,3'),
            hour: 14,
            number: "121",
            activity: "A-200",
            category: "Z-ENG",
            transactionText: "Take up"
        },
        {
            date: new Date('2020,2,3'),
            hour: 30,
            number: "122",
            activity: "A-200",
            category: "Z-ENG",
            transactionText: "Take up"
        }
    ],
    weekEnd: new Date('2020,12,12'),
    weekEnding: {
        year: 2020,
        month: 8,
        day: 12
    },
};

module.exports = {
    users,
    projects,
    timesheet
};