export const formErrorValidators = object => {
  let resp = false
  Object.keys(object).forEach(item => {
    if (object[item] === true) {
        resp =  true;
    } 
  });
  return resp
};

