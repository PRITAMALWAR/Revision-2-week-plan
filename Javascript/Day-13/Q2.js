function deepClone(obj, cache = new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (cache.has(obj)) {
    return cache.get(obj);
  }

  const clone = Array.isArray(obj) ? [] : {};
  cache.set(obj, clone);

  Object.keys(obj).forEach((key) => {
    clone[key] = deepClone(obj[key], cache);
  });

  return clone;
}


const obj = {
  name: "John",
  address: { city: "NYC" },
  hobbies: ["reading", "gaming"]
};

obj.self = obj;

const cloned = deepClone(obj);

console.log(cloned);
console.log(cloned.self === cloned); 
