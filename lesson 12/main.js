// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати,
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        for (const post of posts){
            let postik = document.createElement('div');
            postik.classList.add('post')
            let title = document.createElement('h2');
            title.innerText = post.title;
            let userId = document.createElement('p');
            userId.innerText = post.userId;
            let id = document.createElement('p');
            id.innerText = post.id;
            let content = document.createElement('p');
            content.innerText = post.body;
            postik.append(title,userId,id,content);
            wrap.append(postik)
        }
        document.body.append(wrap)
    })
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        let wraper = document.createElement('div');
        wraper.classList.add('wrapper');
        for (const comment of comments) {
            let divCard = document.createElement('div');
            divCard.classList.add('comment');
            divCard.innerHTML = `
                        <h3>ID: ${comment.id}</h3>
                        <h4>Name: ${comment.name}</h4>
                        <h5>Email: ${comment.email}</h5>
                        <h6>Body: ${comment.body}</h6>
                        `;
            wraper.appendChild(divCard);
            document.body.appendChild(wraper);
        }
    })
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments