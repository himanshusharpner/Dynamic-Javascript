console.log('person1: show ticket');
console.log('person2: show ticket');
const preMovie = async () => {
const promiseWifeBringingTicks = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('ticket');
	}, 3000)
});

const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

const addButter = new Promise((resolve, reject) => resolve('butter'));

const getColdDrinks = new Promise((resolve, reject) => resolve('coldDrinks'));

let ticket = await promiseWifeBringingTicks;
console.log(`wife: i have the ${ticket}`);
console.log('husband : we should go in');
console.log('wife: no i am hungry');

let popcorn = await getPopcorn;

console.log(`husband: i got some ${popcorn}`);
console.log('husband: we should go in');
console.log('wife: I need butter on my popcorn');

let butter = await addButter;

console.log(`husband : i got some ${butter} on popcorn`);
console.log('husband: anything ele darling?');
console.log('wife: lets got we are getting late');
console.log('husband: thank you for the reminder *grins');
console.log('husband: wait for minutes i forget somthimg');


let coldDrinks = await getColdDrinks;
console.log(`husband : i got some ${coldDrinks} for you`);
console.log('husband: Ok darling?');
console.log('wife: very nice now we can go');

return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log('person4: show ticket');
console.log('person5: show ticket');
