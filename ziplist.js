const letters = ['a', 'b', 'c'];
const nums = [1,2,3];

function ziplist(first, second) {
  let lengthOf = first.length;
  let arrays = [];

  for (let i = 0; i < lengthOf; i++) {
    arrays.push(first[i], second[i]);
  }
  return arrays;
}
console.log(ziplist(letters,nums));

function zipListTheSimpleWay(first, second) {
  let zipped = _.zip(first, second);
  return _.flatten(zipped);
}
console.log(zipListTheSimpleWay(letters, nums));

