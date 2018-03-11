// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (name) => {return name;};
const createNotEnumerableProperty = (name) => {return Symbol();};
const createProtoMagicObject = () => {
  function Employee() {};
  var fred = new Employee();
  return fred;
  };

let count = 0;
const incrementor = () => {
  count++;
  incrementor.toString = () => count;
  return incrementor;
};

let count2 = 0;
const asyncIncrementor = () => {
  return new Promise((resolve, reject) => {
    resolve(++count2);
  });
};

const createIncrementer = function* gen() {
  let count = 0;
  while (true)
    yield ++count;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(param);
    }, 1000)
  })
};
const getDeepPropertiesCount = (obj, isFirst = true) => {
  if (Object.values(obj).length === 0) {
      return 1;
  } 
  const deeps = Object.values(obj).map((elem) => {
    return getDeepPropertiesCount(elem, false);
  });
  const childrens = deeps.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  return  childrens + (isFirst ? 0 : 1);
};
const createSerializedObject = () => {
  const obj = {a:1};
  obj.valueOf = () => 1;
  obj.toJSON = () => '1';
  return obj;
};
const toBuffer = (obj) => {
  let protos = 0;
  let obj2 = obj;
  do {
    protos++;
    obj2 = obj2.__proto__;
  } while (obj2.__proto__ !== null)
  return protos;
};
const sortByProto = (array) => {
  array.sort((a,b) => -toBuffer(a)+toBuffer(b));
  return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;