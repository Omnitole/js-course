let user = JSON.parse(localStorage.getItem('chosenUser'))
let userBlock = document.createElement('div');
userBlock.classList.add('userBlock');
let userHeader = document.createElement('h2');
userHeader.innerText = `Name - ${user.name}, id - ${user.id}, username - ${user.username}`;
let mainInfo = document.createElement('p');
mainInfo.innerText = `Email of this user - ${user.email}. This user lives on ${user.address.street}, suite ${user.address.suite} in ${user.address.city}. Zipcode - ${user.address.zipcode}, lat - ${user.address.geo.lat} , lng - ${user.address.geo.lat}${user.address.geo.lng}. Works in ${user.company.name}, catch phrase - ${user.company.catchPhrase}, bs - ${user.company.bs}`
let contacts = document.createElement('p');
contacts.innerText = `You can contact this user via phone - ${user.phone} or via e-mail - ${user.website}`
let button = document.createElement('button');
button.innerText = 'Posts of current user';
button.style.width = '90%'
button.onclick = function (e){
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            let postsBlock = document.createElement('div');
            postsBlock.classList.add('postsBlock');
            for(const post of posts){
                let userPost = document.createElement('div');
                userPost.classList.add('userPost')
                let title = document.createElement('h3');
                title.innerText = post.title;
                let postButton = document.createElement('button');
                postButton.innerText = 'Details of this post';
                postButton.onclick = function (e){
                    e.preventDefault()
                    localStorage.setItem('post',JSON.stringify(post));
                    window.location = 'post-details.html'
                }
                userPost.append(title,postButton)
                postsBlock.append(userPost)
            }
            document.body.append(postsBlock)
        })
}
userBlock.append(userHeader, mainInfo, contacts,button);
document.body.append(userBlock)