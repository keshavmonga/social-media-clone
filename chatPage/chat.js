const chatBoxInput = document.querySelector('#chatBox')
const sendButton = document.querySelector('.fa-paper-plane')
const messages = document.querySelector('.messages')
const userContainer = document.querySelector('.users-container')
const regex = new RegExp('^(?=\s*$)')

const users = [
  { name: "Hinish", lastMsg: 'Hi' },
  { name: "Hridyesh", lastMsg: 'Bro' },
  { name: "Ishmeet", lastMsg: 'Hello' },
  { name: "Jatin", lastMsg: 'Bhai' },
]

users.forEach(user => {
  userContainer.innerHTML +=
    `<div class="user">
    <div class="user-avatar"></div>
    <div class="user-info">
      <span>${user.name}</span>
      <p>${user.lastMsg}</p>
    </div>
  </div>
  <div class="divider"></div>`;
})


messages.scrollTo({ top: '100%' })

const sendMessage = (e) => {
  if (e.code !== 'Enter') { return }
  let msg = chatBoxInput.value;
  if (regex.test(msg)) { return }
  const div = document.createElement('div')
  const span = document.createElement('span')
  const recieve = (msg.includes(':recieve') && msg.indexOf(':') === 0)
  recieve ? null : span.classList.add("sent");
  msg = recieve ? msg.substr(9) : msg
  span.innerHTML = msg
  div.appendChild(span)
  messages.appendChild(div)
  span.scrollIntoView({ behavior: "smooth" })
  chatBoxInput.value = ""
}

sendButton.addEventListener('onclick', sendMessage)
document.addEventListener('keyup', sendMessage)