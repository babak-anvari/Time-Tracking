import PropTypes from "prop-types";

const validateInputHour = (inputValue) => {
    if (inputValue == 0)
        return ('Hour can not be zero');
    else if (inputValue < 0)
        return ('Hour can not be a negative value');
    else if (inputValue == undefined)
        return ('Please enter hour');
    else
        return null;
}

validateInputHour.propTypes = {
    inputValue: PropTypes.number
}

export default validateInputHour;