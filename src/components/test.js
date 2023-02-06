function getDataOnTopic(topic) {
  let secret = "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";
  var axios = require("axios");
  var data = JSON.stringify({
    model: "text-davinci-003",
    prompt:
      topic,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["\n"],
  });

  var config = {
    method: "post",
    url: "https://api.openai.com/v1/completions",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer "+secret,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
getDataOnTopic("how tech works");