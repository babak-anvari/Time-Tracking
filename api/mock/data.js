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
            date: "2017-12-31T16:00:00.000-08:00",
            hour: 12,
            projectId: "p1",
            activity: "A-200",
            category: "Z-ENG",
            transactionText: "DISCHARGE CONVEYOR"
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