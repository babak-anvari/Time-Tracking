const getToken = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export default getToken;