// javascript for details.html


const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.details');


const renderDetails = async () => {
    const res = await fetch("http://localhost:3000/products/" + id)
    const post = await res.json()
    
    const template = `
    <h1> ${post.name}</h1>
    <p> ${post.description}</p>
    `

    container.innerHTML = template
}