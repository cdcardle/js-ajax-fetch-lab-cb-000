const user = cdcardle

function getToken() {
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {Authorization: `token ${getToken()}`}
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">${json.html_url}</a>`;
}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Auythorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
