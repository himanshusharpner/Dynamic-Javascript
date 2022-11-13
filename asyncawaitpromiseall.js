console.log('person1: show ticket');
console.log('person2: show ticket');
const preMovie = async () => {
const promiseWifeBringingTicks = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('ticket');
	}, 3000)
});

const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

const getCandy = new Promise((resolve, reject) => resolve('candy'));

const getCock = new Promise((resolve, reject) => resolve('cock'));

let ticket = await promiseWifeBringingTicks;

let [popcorn, candy, cock] = await Promise.all([getPopcorn, getCandy, getCock]); 

console.log(`${popcorn}, ${candy}, ${cock}`);
return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log('person4: show ticket');
console.log('person5: show ticket');
