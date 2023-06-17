const chatBoxInput = document.querySelector('#chatBox')
const sendButton = document.querySelector('.fa-paper-plane')
const messages = document.querySelector('.messages')
const regex = new RegExp('^(?=\s*$)')

messages.scrollTo({ top: '100%' })

const sendMessage = (e) => {
  if (e.code !== 'Enter') { return }
  let msg = chatBoxInput.value;
  if (regex.test(msg)) { return }
  const div = document.createElement('div')
  const span = document.createElement('span')
  const recieve = (msg.includes(':recieve') && msg.indexOf(':') === 0)
  recieve ? null :span.classList.add("sent");
  msg = recieve ? msg.substr(9) : msg
  span.innerHTML = msg
  div.appendChild(span)
  messages.appendChild(div)
  span.scrollIntoView({ behavior: "smooth" })
  chatBoxInput.value = ""
}

sendButton.addEventListener('onclick', sendMessage)
document.addEventListener('keyup', sendMessage)