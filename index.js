const formToggle = document.getElementById('formToggle')
window.addEventListener('load', () => {
  formToggle.reset()
})

//Close the form after entry
toggle = () => {
  if (formToggle.style.display === 'flex') {
    formToggle.style.display = 'none'
  } else {
    formToggle.style.display = 'flex'
  }
}
//Close the form without any entry
closeForm = () => {
  formToggle.style.display = 'none'
}

// Here we'll sed the id from our html button to php query to delete a specific data
function deleteData(id) {
  var xhr = new XMLHttpRequest()
  xhr.open('POST', 'index.php', true)
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  xhr.send('id=' + id)
  location.reload()
}
