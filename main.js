const dashed = document.querySelector('.dashed');
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const toggle = document.querySelector('#toggle');


add.addEventListener('click', () => {
    dashed.classList.add('reverse');
})

remove.addEventListener('click', () => {
    dashed.classList.remove('reverse');
})

toggle.addEventListener('click', () => {
    dashed.classList.toggle('reverse');
})


