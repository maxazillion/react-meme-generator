export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function toKebabCase(str) {
  let ret = str.toLowerCase();
  return ret.replace(" ", "-");
}
