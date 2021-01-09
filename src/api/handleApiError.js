const handleApiError = (error) => {
    let { status, statusText, data } = error.response;
    console.log(`Status Code: ${status} - Status text: ${statusText} - Message: ${data}`);
    if (status === 400) {
        switch (data) {
            case ('Timesheet already exist'):
                throw ('Timesheet already exist');
            case ('actions ID is not specified'):
                throw ('Action ID is required to make changes to the database');
        }

    }
    else if (status === 401) {
        switch (data) {
            case ('jwt expired'):
                throw ('session expired');
        }

    }
    else if (status === 403) {
        switch (data) {
            case ('Token is not provided'):
                throw ('Token missing');
        }

    }
    else {
        throw ('Unknown error');
    }
}

export default handleApiError;