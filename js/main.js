let programCard = document.querySelector('.program_card'),
    showBtn = document.querySelector('.program .btn_wrap button');

if (programCard) {
    showBtn.onclick = () => {
        programCard.classList.toggle('active');
        showBtn.classList.toggle('active');
    }
}