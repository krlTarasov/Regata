let showProgramButtons = document.getElementsByClassName('article__button');

Array.from(showProgramButtons).forEach((button) => {
    button.addEventListener('click', () => {
        button.closest('.routs__item').children[2].classList.toggle('program_active');
        button.classList.toggle('article__button_active');
    })
})

