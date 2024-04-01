header("Access-Control-Allow-Origin: *");

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.php-email-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        const submitButton = document.querySelector('button[type="submit"]');
        const loadingMessage = document.querySelector('.loading');
        const errorMessage = document.querySelector('.error-message');
        const sentMessage = document.querySelector('.sent-message');

        submitButton.setAttribute('disabled', 'true');
        loadingMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        sentMessage.style.display = 'none';

        fetch(form.getAttribute('action'), {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            loadingMessage.style.display = 'none';
            if (data.status === 'success') {
                sentMessage.style.display = 'block';
                form.reset();
            } else {
                errorMessage.style.display = 'block';
            }
            submitButton.removeAttribute('disabled');
        })
        .catch(error => {
            console.error('Fetch error:', error);
            loadingMessage.style.display = 'none';
            errorMessage.style.display = 'block';
            submitButton.removeAttribute('disabled');
        });
    });
});
