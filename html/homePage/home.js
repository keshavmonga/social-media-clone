const storyAvatar = document.getElementsByClassName('avatar')
const userAvatar = document.getElementsByClassName('user-avatar')
const posts = document.getElementsByClassName('main-post')

Array.from(storyAvatar).forEach(avatar => {
  avatar.style.backgroundImage = 'url("./placeholder.jpg")'
})

Array.from(userAvatar).forEach(avatar => {
  avatar.style.backgroundImage = 'url("./placeholder.jpg")'
})

Array.from(posts).forEach(post => {
  post.style.backgroundImage = 'url("./post-placeholder.jpg")'
})