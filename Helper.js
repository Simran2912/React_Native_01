const isUndefined = value => {
  return value === '' ||
    value === undefined ||
    value === null ||
    value === 'undefined'
    ? true
    : false;
};

const checkAlphabeticOnly = text => {
  const regex = /^[a-zA-Z ]*$/;
  if (regex.test(text) === false) {
    return false;
  } else {
    return true;
  }
};
const checkIsValidEmail = text => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regex.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

const checkIsValidPhone = text => {
  const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if (regex.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

const checkIsValidPassword = text => {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (regex.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

const check40CharacterOnly = string => {
  return string.length > 40;
};

export const Helper = {
  checkIsValidEmail,
  isUndefined,
  checkIsValidPhone,
  checkIsValidPassword,
  checkAlphabeticOnly,
  check40CharacterOnly,
};
