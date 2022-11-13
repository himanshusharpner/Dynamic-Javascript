const posts = [
    { title: 'Post One', body: 'this is post one', createdAt: new Date().getTime() },
    { title: 'Post two', body: 'this is post two', createdAt: new Date().getTime() }
]
let intervalId = 0;
function getPost() {
    clearInterval(intervalId);
    setInterval(() => {
        let output = '';
        posts.forEach((post,index) => {
             output += `<li>${post.title} -
            last updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago 
            </li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ post, createdAt: new Date().getTime() });
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Something went wrong');
            }
        }, 2000)

    })

}

function deletepost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const lastElement = posts.pop();
                resolve(lastElement)
            } else {
                reject('Arrays is empty now');
            }
        }, 1000);
    });
} 


createPost({ title: 'Post three', body: 'this is post three' })
    .then(() => {
        getPost()
            deletepost().then(() => {
                getPost();
                deletepost().then(() => {
                    getPost();
                    deletepost().then(() => {
                        getPost();
                        deletepost().then(() => {
                        }).catch((err) => {
                            console.log('inside catch block',err)
                        })
                    })

                })

            })

        })

 async function init(){
    await createPost({title: 'Post four', body: 'This is post four'})
    await deletepost();
    getPost();
}     

init();
