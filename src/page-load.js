const loadHomePage = () => {

    const mainContentDiv = document.getElementById('content');

    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1517737528656-b04c0992516a?q=80&w=1195&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const heading = document.createElement('h1');
    heading.textContent = 'Creative, artfully presented cocktails in a chic bar';

    const paragraph = document.createElement('p');
    paragraph.textContent = "Warmy cocktail bar in the famous neighborhood of Pigalle, fresh products, fair prices, friendly team... And, this is a 'plus', when you order a cocktail, we automatically give money to charity ;) See you soon !";

    mainContentDiv.appendChild(image);
    mainContentDiv.appendChild(heading);
    mainContentDiv.appendChild(paragraph);
}

export { loadHomePage };