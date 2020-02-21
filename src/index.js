module.exports = function reverse (n) {
  let str = `${n}`;
  return str.split("").filter(item => item != '-').reverse().join("");
}
