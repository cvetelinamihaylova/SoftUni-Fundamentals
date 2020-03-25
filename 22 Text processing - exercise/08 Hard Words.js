function solve(arr){
let text = arr[0];
let words = arr[1].sort((a,b)=> b.length - a.length);

for (const word of words) {
    text = text.replace('_'.repeat(word.length), word)
}
console.log(text)
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)