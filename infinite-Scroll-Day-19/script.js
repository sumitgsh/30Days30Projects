const container = document.getElementById('container');
const loading = document.querySelector('.loader');

const titles = [
	'Lorem ipsum dolor sit amet.',
	'Officia sit hic nihil quisquam?',
	'In laudantium quidem hic ipsam?',
	'Dolorum nostrum culpa magni reprehenderit?',
	'Rerum corporis nisi ea eum.'
];

const texts = [
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex aut numquam quaerat deserunt rerum minima dolor autem reiciendis mollitia!',
	'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit repellendus soluta nobis, dolorum officiis debitis vero. Earum dignissimos maxime ipsum ratione nisi, accusamus enim!',
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nam commodi laudantium sapiente provident? Non officiis temporibus quo ipsa, voluptas eveniet accusamus excepturi, enim ratione, adipisci atque dolorem iure ad.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestiae fugit laudantium porro dicta mollitia cum corrupti placeat dignissimos. Autem maiores consectetur reiciendis repudiandae architecto officia ut placeat sapiente. Perferendis, doloremque veniam dignissimos nemo recusandae ipsa sint magni, aliquid repudiandae libero quidem et facilis ad odit, quia eligendi error cum!'
];

// // Scroll

window.addEventListener('scroll', () => {
    
    console.log(document.documentElement)
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    console.log(scrollTop,scrollHeight,clientHeight);
	// console.log('scroll', scrollTop + clientHeight, scrollHeight - 50);
	
	if(scrollTop + clientHeight >= scrollHeight - 5) {
		showLoading();
	} 
});

function showLoading() {
	// show loading animation
	loading.classList.add('show');
	
	setTimeout(() => {
		// remove loading animation after 1 second
		loading.classList.remove('show');
		
		setTimeout(() => {
			// create new posts after a little while (wait for the loading to dissappear)
			createPost();
		}, 300);
	}, 1000);
}

// create initial posts
createPost();
createPost();
createPost();

function createPost() {
	const post = document.createElement('div');
	post.classList.add('post');
	post.innerHTML = `
        <img src="./images/profile-3.jpg" alt="" />
			<div class="post-info">
			<h2 class="post-title">${randomFrom(titles)}</h2>
			<small class="post-date">11/11/2020</small>
			<p class="post-excerpt">${randomFrom(texts)}</p>
		</div>
	`;
	
	container.appendChild(post);
}

function randomFrom(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}


