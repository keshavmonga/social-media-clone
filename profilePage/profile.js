const div = document.getElementsByClassName('dp')[0]
const input = document.getElementsByTagName('input')[0]
const dp = document.getElementsByTagName('img')[1]
const posts = document.getElementsByClassName('post')

Array.from(posts).forEach(post => {
  post.style.backgroundImage = 'url("./post-placeholder.jpg")'
})

console.log(dp, div, input)

input.addEventListener('change', (e) => {
  let file = e.target.files[0]
  const reader = new FileReader();
  reader.addEventListener('load', (e) => {
    dp.src = e.target.result
  })
  reader.readAsDataURL(file);
})

dp.addEventListener('click', () => { input.click() })