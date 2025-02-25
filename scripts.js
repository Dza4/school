document.addEventListener('DOMContentLoaded', function() {
    let selectedClass = '';

    // Функция для отображения расписания
    function updateSchedule() {
        // Скрыть все строки расписания
        const allRows = document.querySelectorAll('tbody tr');
        allRows.forEach(row => row.style.display = 'none');
        
        // Показать строки для выбранного класса
        if (selectedClass) {
            const selectedRows = document.querySelectorAll(`.schedule-${selectedClass}`);
            selectedRows.forEach(row => row.style.display = 'table-row');
        }
    }

    // Обработчик для классов
    const classButtons = document.querySelectorAll('.class-button');
    classButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedClass = button.getAttribute('data-class');
            updateSchedule(); // Обновить расписание
        });
    });
});
