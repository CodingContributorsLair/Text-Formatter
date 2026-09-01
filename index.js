const inputField = document.getElementById('inputField');
const outputField = document.getElementById('outputField');

if (inputField && outputField) {
    inputField.addEventListener('keyup', () => {
        outputField.textContent = inputField.value;
    });
}

// Helper to apply text transforms
const applyTransform = (transformFn) => {
    if (outputField) {
        outputField.textContent = transformFn(outputField.textContent);
    }
};

document.querySelector('.uppercase')?.addEventListener('click', () => {
    applyTransform(text => text.toUpperCase());
});

document.querySelector('.lowercase')?.addEventListener('click', () => {
    applyTransform(text => text.toLowerCase());
});

document.querySelector('.capitalize')?.addEventListener('click', () => {
    applyTransform(text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
});

// Helper to toggle CSS style classes
const toggleStyle = (btnSelector, styleProp, activeValue, inactiveValue) => {
    const btn = document.querySelector(btnSelector);
    btn?.addEventListener('click', () => {
        if (outputField) {
            const isActive = btn.classList.toggle('active');
            outputField.style[styleProp] = isActive ? activeValue : inactiveValue;
        }
    });
};

toggleStyle('.bold', 'fontWeight', '700', '400');
toggleStyle('.italic', 'fontStyle', 'italic', 'normal');
toggleStyle('.underline', 'textDecoration', 'underline', 'none');
