document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.php-email-form');
  
    form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        var loadingElement = form.querySelector('.loading');
        var errorElement = form.querySelector('.error-message');
        var successElement = form.querySelector('.sent-message');
  
        loadingElement.style.display = 'block';
        errorElement.style.display = 'none';
        successElement.style.display = 'none';
  
        var formData = new FormData(form);
  
        fetch(form.action, {
            method: 'POST',
            body: formData
        }).then(response => {
            loadingElement.style.display = 'none';
  
            if (response.ok) {
                successElement.style.display = 'block';
            } else {
                return response.text().then(text => { throw new Error(text); });
            }
        }).catch(error => {
            loadingElement.style.display = 'none';
            errorElement.textContent = error.message;
            errorElement.style.display = 'block';
        });
    });
  });
  