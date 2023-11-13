document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.classList.contains('operator')) {
                display.value += ` ${button.value} `;
            } else if (button.classList.contains('clear')) {
                display.value = '';
            } else if (button.classList.contains('calculate')) {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                display.value += button.value;
            }
        });
    });
});
