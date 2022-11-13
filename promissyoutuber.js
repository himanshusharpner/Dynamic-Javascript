const posts = [
	{title: 'Post One', body: 'Thsis is Post one'},
	{title: 'Post Two', body: 'Thsis is Post two'},
];

function getPosts(){
	setTimeout(() => {
	  let output = '';
	  posts.forEach((post,index) =>{
	  	output += `<li>${post.title}</li>`;
	  	console.log(output);
	  });
	  document.body.innerHTML = output;
	},1000)
}

function createPost(post){
  return new Promise((resolve, reject)=> {
  	setTimeout(() => {
		posts.push(post);
		const error = false;

		if(!error){
			resolve();
		}
		else{
			reject('Error: Somthing went wrong');
		}
	}, 2000)
  });	
}


createPost({title: 'Post Three', body: 'This is post Three'})
.then(getPosts)
.catch(err => console.log(err));
