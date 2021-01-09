const apiError = (message, status) => {
    class ApiError extends Error {
        constructor(message, status) {
            super();
            Error.captureStackTrace(this, this.constructor);
            this.name = this.constructor.name;
            this.message = message || 'Something went wrong. Please try again.';
            this.status = status || 500;
        }
    }
    console.log(`*********** Api error : ${message}`);
    throw new ApiError(message, status);
}

export default apiError;