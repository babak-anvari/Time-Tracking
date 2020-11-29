export function handleResponse(response) {
    if (response.status === 200) return response.data;
    if (response.status === 400) {
        const error = response.text();
        throw new Error(error);
    }
}

export function handleError(error) {
    console.error("API call failed. " + error);
    throw error;
}