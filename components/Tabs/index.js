// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(function (response) {
    let topics = document.querySelector("div.topics");

    let topicList = Object.values(response.data.topics);

    topicList.forEach((item) => {
      let topic1 = document.createElement("div");
      topic1.classList.add("tab");
      topic1.textContent = item;
      topics.appendChild(topic1);
    });
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
