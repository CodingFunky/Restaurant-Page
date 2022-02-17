export const makeHome = function (target) {
    // // switch active class
    // activeTab.classList.remove('active')
    // activeTab.classList.add('not-active')
    // target.classList.add('active')
    // target.classList.remove('not-active')
    // activeTab = homeTab;

    const header1 = document.createElement('h1')
    header1.innerText = 'Burgers, Steaks and FedEx Copy Center!'
    content.appendChild(header1);

    const cardContainer = document.createElement('div')
    cardContainer.id = ('card-container');

    const burgerCard = document.createElement('div')
    const steakCard = document.createElement('div');
    const fedCard = document.createElement('div');

    burgerCard.classList = ('card');
    steakCard.classList = ('card');
    fedCard.classList = ('card');

    const burgerImg = document.createElement('img');
    const steakImg = document.createElement('img');
    const fedImg = document.createElement('img');

    burgerImg.src = ('../src/img/Burger.jpeg');
    burgerImg.classList = 'imgs';
    burgerImg.id = ('Burger-img');
    burgerImg.alt = ('Burger');
    steakImg.src = ('../src/img/Steak.jpeg');
    steakImg.classList = 'imgs';
    steakImg.id = 'Steak-img';
    steakImg.alt = 'Steak';
    fedImg.src = ('../src/img/FedEx.jpeg');
    fedImg.classList = 'imgs';
    fedImg.id = ('FedEx-img');
    fedImg.alt = ('FedEx')

    const burgerTxt = document.createElement('p');
    const steakTxt = document.createElement('p');
    const fedTxt = document.createElement('p');

    burgerTxt.textContent = 'At Burgers, Steaks and FexEx Copy Center we know what it takes to make a great burger. We\'ve been making burgers for like, six months already. So remember, when you come to Burgers, Steaks and Fedex Copy Center, you\'re a costumer.';
    steakTxt.textContent = 'Steak has a special meaning to us here, and that meaning is a cow\'s lower neck and/or upper shoulder butched into thin slices that are cooked by broiling or frying. We like to think its what makes us different from the competition.';
    fedTxt.textContent = 'What? What do you want? To copy something? Well the copiers are over there... Do you like, need me to do it for you? How pathetic.. Oh my gawd, are you still here? what are you like some kind of perv? I\'m calling the cops.';

    burgerCard.append(burgerImg, burgerTxt);
    steakCard.append(steakImg, steakTxt);
    fedCard.append(fedImg, fedTxt);

    cardContainer.append(burgerCard, steakCard, fedCard);
    content.appendChild(cardContainer);
}
