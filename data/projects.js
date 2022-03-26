const data = [
  {
    name: 'Booking Line',
    description: 'Auditorium Booking Using Django',
    url: 'https://bookingline2.herokuapp.com/',
    url_name: 'bookingline',
  },
  {
    name: 'Department of Vocational Vocational',
    description: 'Web site for Department in Reactjs',
    url: 'https://fcdepofvocation.netlify.app',
    url_name: 'fcdepofvocation',
  },
  {
    name: 'Alpha',
    description: 'Bot Using Dialogflow API',
    url: 'https://t.me/Alphathetelegrambot',
    url_name: 'Alphathetelegrambot ',
  },
  {
    name: 'Mr.Neagativoli',
    description: 'Bot Using Telegram API',
    url: 'https://t.me/MrNegativoliBot',
    url_name: 'MrNegativoliBot',
  },

  {
    name: 'E-commerce',
    description: 'Sample E-commerce Web-app',
    url: 'https://e-commerceweb-app.herokuapp.com/',
    url_name: 'e-commerceweb-app',
  },
  {
    name: 'Blood Bank',
    description: 'First Web-app',
    url: 'https://sampledjangoapp.herokuapp.com/',
    url_name: 'sampledjangoapp',
  },
  {
    name: 'Todo-List',
    description: 'First React Project',
    url: 'https://amjadcp.github.io/react-todo-list/',
    url_name: 'react-todo-list/',
  },
]

//rendering
for (let i = 0; i < data.length; i++) {
  document.getElementById('table').innerHTML += `
  <tr>
  <th scope="row">${i + 1}</th>
  <td>
    ${data[i]['name']}
  </td>
  <td>${data[i]['description']}</td>
  <td>
    <a href="${data[i]['url']}" target="_blank">
    ${data[i]['url_name']}
    </a>
  </td>
</tr>
`
}
