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
    data: [
        {
            date: 2020 - 11 - 26,
            hour: 12,
            projectId: "p1",
            activity: "A-200",
            category: "Z-ENG",
            transactionText: "DISCHARGE CONVEYOR"
        },
        {
            date: 2020 - 11 - 26,
            hour: 14,
            projectId: "p2",
            activity: "A-200",
            category: "Z-ENG",
            transactionText: "Take up"
        },
        {
            date: 2020 - 11 - 26,
            hour: 30,
            projectId: "p3",
            activity: "A-200",
            category: "Z-ENG",
            transactionText: "Take up"
        }
    ],
    weekEnd: 11 / 17 / 2020,
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