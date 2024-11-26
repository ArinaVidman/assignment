function showAlert(event) {
event.preventDefault();
const name = document.getElementById('name').value;
alert('Your song' + name + 'added to the playlist');
}
