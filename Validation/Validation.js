function validateForm() 
{
    var form = document.getElementById('myForm');
    var name = form.elements['name'];
    var email = form.elements['email'];
    var password = form.elements['password'];
    var isValid = true;
    clearErrors();
    if (name.value.trim() === '') 
        {
        isValid = false;
        showError(name, 'Name is required.');
    }
        if (email.value.trim() === '') 
            {
        isValid = false;
        showError(email, 'Email is required.');
    } 
    else if (!isValidEmail(email.value.trim())) 
        {
        isValid = false;
        showError(email, 'Enter a valid email address.');
    }
    if (password.value.trim() === '') 
        {
        isValid = false;
        showError(password, 'Password is required.');
    }
    if (isValid) 
        {
        saveAndShowDetails(name.value.trim(), email.value.trim());
    }

    return false;
}
function clearErrors() 
{
    var errors = document.querySelectorAll('.error');
    errors.forEach(function(error) {
        error.textContent = '';
    });
}
function showError(input, message) 
{
    var errorElement = input.nextElementSibling;
    errorElement.textContent = message;
}
function isValidEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function saveAndShowDetails(name, email) 
{
    var detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = '';
    var nameLabel = document.createElement('p');
    nameLabel.textContent = 'Name: ' + name;
    detailsContainer.appendChild(nameLabel);
    var emailLabel = document.createElement('p');
    emailLabel.textContent = 'Email: ' + email;
    detailsContainer.appendChild(emailLabel);
    detailsContainer.style.display = 'block';
}