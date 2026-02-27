// 1. Localiza o container no HTML
const newsList = document.getElementById('news-list');

document.addEventListener('DOMContentLoaded', () => {
    loadingNews();
})

async function loadingNews() {
    try {
        const response = await fetch('./src/data/news.json');
        
        const data = await response.json();
        
        showNews(data.news);
        
    } catch (error) {
        console.error("Erro ao carregar o JSON:", error);
    }
}

function showNews(list) {
    list.forEach(newsObj => {
        const article = `
            <article class="container__noticia">
                <a href="#">
                    <img class="noticia__imagem" src="${newsObj.banner}" alt="${newsObj.imageAlt}">
                </a>
                <div class="container__noticia__div">
                    <h2>
                        <a class="container__noticia__titulo" href="#">
                            ${newsObj.title}
                        </a>
                    </h2>
                    <p class="container__noticia__info">${newsObj.resume}</p>
                </div>
            </article>
        `;
        
        newsList.innerHTML += article;
    });
}