export const drawContact = function () {
    const contactHeader = document.createElement('h1')
    contactHeader.classList = 'contact-header';
    contactHeader.textContent = 'Contact Us';
    content.appendChild(contactHeader);

    const contactContainer = document.createElement('div');
    contactContainer.classList = 'contact-container'
    const form = document.createElement('form')
    form.classList = 'contact-form'

    const nameLabel = document.createElement('label')
    const nameField = document.createElement('input')
    nameLabel.textContent = 'Full Name: ';
    nameField.type = 'text';
    nameField.classList = 'name-field';
    form.append(nameLabel, nameField);
    const emailLabel = document.createElement('label');
    const emailField = document.createElement('input');
    emailLabel.textContent = 'Email: ';
    emailField.type = 'text';
    emailField.classList = 'email-field'
    form.append(emailLabel, emailField)
    const textLabel = document.createElement('label');
    const textField = document.createElement('input');
    textLabel.textContent = 'Message: ';
    textField.classList = 'text-field';
    form.append(textLabel, textField)
    const sumbitBtn = document.createElement('input')
    sumbitBtn.type = 'submit';
    form.append(sumbitBtn);

    contactContainer.append(form);
    content.append(contactContainer)
}