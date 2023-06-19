const actions = document.querySelector('.post-actions')
const like = document.querySelector('.fa-heart')

actions.addEventListener('click',()=>{
  like.classList.toggle('fa-regular')
  console.log("object")
})