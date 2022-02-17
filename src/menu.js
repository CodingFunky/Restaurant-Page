export const drawMenu = function (target) {
    // Menu Page
    const menu = document.createElement('div');
    const menuBurger = document.createElement('div');
    const menuSteak = document.createElement('div');
    const menuFedex = document.createElement('div');
    menu.classList = 'menu';
    menuBurger.classList = 'menu-item';
    menuSteak.classList = 'menu-item';
    menuFedex.classList = 'menu-item';

    // create header ele
    const headerMenu = document.createElement('h1')
    headerMenu.innerText = 'Menu'

    // menu content
    // burger
    const titleBurger = document.createElement('h2')
    titleBurger.classList = 'title-burger'
    titleBurger.textContent = 'Royale with Cheese Burger'
    const desBurger = document.createElement('p')
    desBurger.classList = 'des-burger'
    desBurger.textContent = 'The Royale with Cheese Burger comes with cheese and a beef patty. Two buns...some letuce but you can say no lecture if you dont want any...honest..we dont mind, its your shitty letuceless burger'
    const priceBurger = document.createElement('h4')
    priceBurger.classList = 'price-burger'
    priceBurger.textContent = 'Price: $8.99'
    // Steak
    const titleSteak = document.createElement('h2')
    titleSteak.classList = 'title-Steak'
    titleSteak.textContent = 'Steak with Pineapple'
    const desSteak = document.createElement('p')
    desSteak.classList = 'des-burger'
    desSteak.textContent = 'Our famous porter-house steak is so so so so soooooo... average. I know i know, "but it cost so much!". Well, thats cause, fuck you.'
    const priceSteak = document.createElement('h4')
    priceSteak.classList = 'price-burger'
    priceSteak.textContent = 'Price: $24.99'
    // FedEx
    const titleFedex = document.createElement('h2')
    titleFedex.classList = 'title-fedex'
    titleFedex.textContent = 'FedEx Packing and Shipping!'
    const desFedex = document.createElement('p')
    desFedex.classList = 'des-fedex'
    desFedex.textContent = 'Package things, Ship Things, Package Things, Ship Things, Package things, Ship Things...God I hate this job'
    const priceFedex = document.createElement('h4')
    priceFedex.classList = 'price-fedex'
    priceFedex.textContent = 'Price: $$ Depends on the package idiot. $$'
    // append elements
    menuBurger.append(titleBurger, desBurger, priceBurger)
    menuSteak.append(titleSteak, desSteak, priceSteak)
    menuFedex.append(titleFedex, desFedex, priceFedex)
    menu.append(menuBurger, menuSteak, menuFedex)
    content.appendChild(headerMenu)
    content.appendChild(menu)
}