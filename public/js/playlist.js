document.getElementById('submit').addEventListener('click', function (e){
    e.preventDefault();
    const input = document.getElementById('name');
    const list = document.getElementById('playlist');
    const newItem = input.value.trim();
    if (newItem) {
        const li = document.createElement('li');
        li.textContent = newItem;
        list.appendChild(li);
        alert( "Your song "+newItem+" added");
        input.value = ''; 
    } else {
        alert('Please enter a valid item!');
    }
});
document.getElementById('shuffleButton').addEventListener('click', function () {
    const list = document.getElementById('playlist');
    const items = Array.from(list.children);
    const shuffledItems = items.sort(() => Math.random() - 0.5);
    list.innerHTML = '';
    shuffledItems.forEach(item => list.appendChild(item));
})