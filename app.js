

let newsAcc = document.getElementById('main');

function getData(){
    console.log("Started getData")
    url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0f9b4062c0834d46ab541613cc85ff84";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
      //  console.log(data);
        let json = data;
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function(element, index) {
             console.log(element, index)
             let news = `<div class="">
                         <div class="card" style="width: 18rem;  ">
                         <img src="${element['urlToImage']}" class="card-img-top" alt="...">
                          <div class="card-body">
                           <h5 class="card-title"><b>Breakings News ${index}</b> <br>${element.title}</h5>
                           <p class="card-text">${element.description}</p>
                           <a target="_blank"  href="${element.url}" class="btn btn-primary">Read More</a>
                         </div>
                       </div>
                       </div>`
                       newsHtml += news;

        })
        newsAcc.innerHTML = newsHtml;
    })


}
//getData()
