function toggleList(element) {
    // Получаем все элементы списка
    const allLists = document.querySelectorAll('.toggle-list');
    
    // Получаем текущее состояние списка и изображения для элемента, на который кликнули
    const currentList = element.querySelector('ul');
    const currentImg = element.querySelector('.insert-image');

    // Проверяем, открыто ли текущее изображение
    const isCurrentlyOpen = currentList.style.display === 'block';

    // Скрываем все открытые списки и изображения
    allLists.forEach(item => {
        const list = item.querySelector('ul');
        const img = item.querySelector('.insert-image');
        list.style.display = 'none';
        img.style.display = 'none'; // Скрываем изображение
    });

    // Если текущее изображение не было открыто, открываем его
    if (!isCurrentlyOpen) {
        currentList.style.display = 'block';
        currentImg.style.display = 'block'; // Показываем изображение
    }
}