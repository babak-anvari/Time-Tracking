import validateProject from '../../utils/validateProject'
import validateInputHour from '../../utils/validateInputHour'

const validateTasks = (tasks, projects) => {
    let errors = [];
    tasks.map(task => {
        let error = {};
        let hourError = validateInputHour(task.hour);
        if (hourError) {
            error = { ...error, id: task.id, hourError }
        }
        let projectNumberError = validateProject(task.projectNumber, projects);
        if (projectNumberError) {
            error = { ...error, id: task.id, projectNumberError }
        }
        if (Object.getOwnPropertyNames(error).length > 0) {
            errors = [...errors, error];
        }
    })
    return errors;
}

export default validateTasks;