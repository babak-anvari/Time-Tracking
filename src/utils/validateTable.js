import { v4 as uuid } from 'uuid';
import validate from './validate';

const validateTable = (tableData) => {
    let errors = [];
    tableData.map(row => {
        Object.getOwnPropertyNames(row).map(propertyName => {
            let validation = validate(propertyName, row[propertyName]);
            if (validation !== 'validated') {
                errors = [...errors, { id: uuid(), rowNumber: row.rowNumber, message: validation }];
            }
        })
    })
    if (errors.length == 0) {
        return null;
    }
    else {
        return errors;
    }
}

export default validateTable