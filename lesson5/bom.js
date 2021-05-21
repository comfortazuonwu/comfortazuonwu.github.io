const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const ul = document.querySelector('.list');

button.addEventListener('click', () => {
if (input.value != ''){
    let li = document.createElement('li');
    let delbutton = document.createElement('button')
    
    li.textContent = input.value;
    delbutton.textContent = '❌';
    li.append(delbutton);
    ul.append(li);

    delbutton.addEventListener('click', function(){
        ul.removeChild(li);
        input.focus;
    })
    input.value = '';
    input.focus;
}

});