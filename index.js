var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {return Object.assign({}, object, { [key]: value })} 

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {Object[key]= value; return object}
  object[key] = value;
function deleteFromObjectByKey(object, key) {var newObj = Object.assign({}, object);delete newObj.key; return newObj;}

function destructivelyDeleteFromObjectByKey(object, key) {delete Object.key; object}