let post = JSON.parse(localStorage.getItem('post'));
console.log(post);
let postBlock = document.createElement('div');
postBlock.classList.add('postBlock')
let postHeader = document.createElement('h2');
postHeader.innerText = `UserId - ${post.userId}, post id - ${post.id}`
let postTitle = document.createElement('h3');
postTitle.innerText = post.title;
let postContent = document.createElement('p');
postContent.style.textAlign = 'center';
postContent.innerText = post.body;
postBlock.append(postHeader,postTitle,postContent);
document.body.appendChild(postBlock);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
       let commentsBlock = document.createElement('div');
       commentsBlock.classList.add('commentsBlock');
        for (const comment of comments) {
            let singleComment = document.createElement('div');
            singleComment.classList.add('comment');
            let commentHeader = document.createElement('div');
            commentHeader.innerText = `Comment id - ${comment.id}, commentator - ${comment.name}, e-mail - ${comment.email}`
            let commentContent = document.createElement('p');
            commentContent.innerText = comment.body;
            singleComment.append(commentHeader,commentContent);
            commentsBlock.append(singleComment)
        }
        document.body.appendChild(commentsBlock)
    })


