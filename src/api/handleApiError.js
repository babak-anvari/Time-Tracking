const handleApiError = (error) => {
    let { status, statusText, data } = error.response;
    console.log(`Status Code: ${status} Status text: ${statusText} Message ${data}`);
    if (status === 401) {
        switch (data) {
            case ('jwt expired'):
                throw ('session expired');
        }

    }
    if (status === 403) {
        switch (data) {
            case ('Token is not provided'):
                throw ('Token missing');
        }

    }
}

export default handleApiError;