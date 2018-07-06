const app = "I don't do much.";

const token = 'bed2a63300baf21462d915152305a90d9a09a3c3'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
