function promisify(fn) {
  return (a, b) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(fn(a, b))
      } catch (error) {
        reject(error);
      }
    });
  };
}


const add = (a, b) => a + b

const promisifiedAdd = promisify(add);

promisifiedAdd(1, 2)
  .then(result => console.log(result))
