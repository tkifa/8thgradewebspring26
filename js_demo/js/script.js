function askName() {
    var nameReturn = document.getElementById('ask-name');
    var name = prompt('Please enter your name in the box below.');
    if (name == '') {
        alert('Please try again.')
    } else {
        nameReturn.innerHTML = 'Hello ' + name + '! Nice to meet you! Welcome to my website.'
    }
    nameReturn.style.fontSize = '30px';
    nameReturn.style.color = 'orange';
}

function askQuestion() {
    var p = prompt('Team Gale or team Peeta?');
    if (p != null) {
        document.getElementById('ask-question').innerHTML = 'Yikes! ' + p + '? Are you sure???'
    }
}