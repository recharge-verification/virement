document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-button');
    const loadingSpinner = document.getElementById('loading-spinner');

    submitButton.addEventListener('click', function() {
        const codeInput = document.getElementById('code-input').value;

        if (codeInput) {
            loadingSpinner.style.display = 'none';
        } else {
            alert('Please enter a code.');
        }
    });
});