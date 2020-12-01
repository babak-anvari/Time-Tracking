const validate = (propertyName, propertyValue) => {
    if (propertyName == 'hour') {
        if (propertyValue <= 0) {
            return ('hours spent on the task should be more than zero');
        }
    }
    return ('validated');
}

export default validate;