// Write your solution here!
// index.js
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function destructivelyRemoveLastCat() {
    cats.pop();
}

function appendCat(name) {
    const newcats = [...cats, name];
    return newcats;
}
function prependCat(name) {
    const newcats = [name, ...cats];
    return newcats;
}
function removeLastCat() {
const newcats = cats.slice(0,-1)
return newcats;
}
function removeFirstCat() {
    const newcats = cats.slice(1);
    return newcats;
}