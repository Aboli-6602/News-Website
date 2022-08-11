
let apiKey = `7f8cf627bb4c4dda9d84a852c2cb6bda`;
let newsAccordion = document.getElementById('newsAccordion');


// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        let newsHtml = ``
        articles.forEach(function(element, index){
            let news = `
                <div class="card my-3">
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                        ${element['title']}
                    </button>
                    <div class="collapse" id="collapse${index}">
                        <div class="card card-body">
                            ${element['content']} <a href=${element['url']} target="_blank">Read more here.</a>
                        </div>
                    </div>
                </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("some error occured");
    }
}

xhr.send();




