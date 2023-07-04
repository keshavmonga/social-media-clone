const chatBoxInput = document.querySelector('#chatBox')
const search = document.getElementsByTagName('input')[0]
const sendButton = document.querySelector('.fa-paper-plane')
const messages = document.querySelector('.messages')
const userContainer = document.querySelector('.users-container')
const regex = new RegExp('^(?=\s*$)')

const usersData = []

const getUsers = async () => {
  const res = await fetch('https://dummyjson.com/users/?limit=10');
  const data = await res.json();
  return data.users
}
const result = getUsers()
  .then(users => {
    users.forEach(user => {
      userContainer.innerHTML +=
        `<div class="user">
            <div class="user-avatar"></div>
              <div class="user-info">
              <span>${user.firstName}</span>
              <p>${user.university.substr(1, 12)}</p>
              </div>
            </div>
        <div class="divider"></div>`;
      usersData.push(user)
    })
  })


messages.scrollTo({ top: '100%' })

const handleSearch = (e) => {
  const value = e.target.value.toLowerCase()
  const filteredData = usersData.filter(data => data.firstName.toLowerCase().includes(value))
  userContainer.innerHTML = ''
  filteredData.forEach(user => {
    userContainer.innerHTML +=
      `<div class="user">
            <div class="user-avatar"></div>
              <div class="user-info">
              <span>${user.firstName}</span>
              <p>${user.university.substr(1, 12)}</p>
              </div>
            </div>
        <div class="divider"></div>`
    ;
  })
}

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
search.addEventListener('input', handleSearch)