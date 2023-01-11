function addItem() {
  var listElement = document.getElementById('list');
  var textItem = document.getElementById('newI').value;
  /*console.log(textItem)*/

  var liElement = document.createElement('li');
  liElement.innerText = textItem;
  liElement.classList.add('new');
  listElement.appendChild(liElement);

  var colorActual = 'green';

  liElement.addEventListener('click', function () {
    if (colorActual === 'green') {
      this.style.color = 'gray';
      colorActual = 'gray';
    } else {
      this.style.color = 'green';
      colorActual = 'green';
    }
  });
}
