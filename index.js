let articleBox = document.getElementById("box");
let list = document.getElementById("list");

fetch(
  "https://newsapi.org/v2/everything?q=tesla&from=2022-04-17&sortBy=publishedAt&apiKey=2cec3bee1cc4401699aab2d713ee705e"
)
  .then((res) => res.json())
  .then((res) => {
    const data = res;
    console.log(data);
    data?.articles?.map((item) => {
      let test = document.createElement("li");

      test.innerHTML = `
        <div class="id">
          <div id="news_list">
            <img src="${item.urlToImage}" class="urlToImage"></span>
              <div class="text_list">
                <span class="title">${item.title}</span>
                <span class="content">${item.content}</span>
                <span class="description">${item.description}</span>
                <span class="url">${item.url}</span>
              </div>
              <div class=under_list">
                <hr class="hr">
                <span class="author">${item.author}</span>
                <span class="publishedAt">${item.publishedAt}</span>
              </div>
          </div>
        </div>`;

      console.log(test);
      list.appendChild(test);
    });
  });
