// javascript for index.html
const container = document.querySelector('.blogs');

const renderPosts = async () => {
    let uri = 'http://localhost:3000/products?_sort=imageUrl&_order=desc'

    const res = await fetch(uri);
    const posts = await res.json()
    
    let template = ""

    posts.forEach(post => {
        template += `
        <div class="post">
        
            <h2>${post.name}</h2>
            <p><small>${post.imageUrl} likes</small></p>
            <p>${post.description}</p>
            <a href="details.html?id=${post.id}">read more...</a>
        
        </div>
        `
    })

    container.innerHTML = template
}

window.addEventListener('DOMContentLoaded', () => renderPosts())