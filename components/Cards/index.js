// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
let cards = document.querySelector(".cards-container");

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(function (response) {

    let javascriptContent = response.data.articles.javascript;
    let bootstrapContent = response.data.articles.bootstrap;
    let technologyContent = response.data.articles.technology;
    let jqueryContent = response.data.articles.jquery;
    let nodeContent = response.data.articles.node;

    javascriptContent.forEach((item) => {
      cards.appendChild(cardCreator(item));
    });

    bootstrapContent.forEach((item) => {
        cards.appendChild(cardCreator(item));
    });

    technologyContent.forEach((item) => {
        cards.appendChild(cardCreator(item));
    });

    jqueryContent.forEach((item) => {
        cards.appendChild(cardCreator(item));
    });

    nodeContent.forEach((item) => {
        cards.appendChild(cardCreator(item));
    });


    // for (let property in response.data.articles) {
    //   property.forEach((item) => {
    //     cards.appendChild(cardCreator(item));
    //   });
    // }

    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

let cardCreator = function (newsArticle) {
  let card = document.createElement("div");
  card.classList.add("card");

  let headline1 = document.createElement("div");
  headline1.classList.add("headline");
  headline1.textContent = newsArticle.headline;

  let author = document.createElement("div");
  author.classList.add("author");

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  let image = document.createElement("img");
  image.src = newsArticle.authorPhoto;

  imageContainer.appendChild(image);

  let byAuthor = document.createElement("span");
  byAuthor.textContent = `By ${newsArticle.authorName}`;

  author.appendChild(imageContainer);
  author.appendChild(byAuthor);

  card.appendChild(headline1);
  card.appendChild(author);

  return card;
};
