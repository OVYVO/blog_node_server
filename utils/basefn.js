const isEmptyObject = function (obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    return false;
  } else {
    return !Object.keys(obj).length;
  }
};

export default { isEmptyObject }