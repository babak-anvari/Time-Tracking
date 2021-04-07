import { store } from '../../index';

const handleError = (error) => {
    switch (error) {
        case ('session expired'):
            localStorage.removeItem("user");
            store.dispatch({ type: 'userSignOutSuccess' });
            alert('Current session has expired, Please sign in again.');
            break;
        case ('Token missing'):
            alert('Please sign in to continue.');
            break;

    }
}

export default handleError;