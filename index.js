import express from "express"
import 'dotenv/config'
const app = express()
const port = process.env.PORT

const gitData = {
    "login": "Vikash0216",
    "id": 184534425,
    "node_id": "U_kgDOCv_FmQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/184534425?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Vikash0216",
    "html_url": "https://github.com/Vikash0216",
    "followers_url": "https://api.github.com/users/Vikash0216/followers",
    "following_url": "https://api.github.com/users/Vikash0216/following{/other_user}",
    "gists_url": "https://api.github.com/users/Vikash0216/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Vikash0216/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Vikash0216/subscriptions",
    "organizations_url": "https://api.github.com/users/Vikash0216/orgs",
    "repos_url": "https://api.github.com/users/Vikash0216/repos",
    "events_url": "https://api.github.com/users/Vikash0216/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Vikash0216/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Vikash Mahato",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": true,
    "bio": "Web Developer",
    "twitter_username": null,
    "public_repos": 21,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-10-10T15:17:38Z",
    "updated_at": "2025-03-25T08:35:12Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/about", (req,res)=>{
    res.send("Hello I am about")
})

app.get("/github", (req,res)=>{
    res.json(gitData)
})

app.get("/vikash",(req,res)=>{
    res.send("Hii Vikash here")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})