// javascript for create.
const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();

    const doc = {
        name: form.title.value,
        description: form.body.value,
        imageUrl: 0
    }

    await fetch("http://localhost:3000/products", {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {'Content-Type': 'application'}
    })

    window.location.replace('/index.html')
}
form.addEventListener('submit', createPost)