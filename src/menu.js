const loadMenuPage = () => {

    const mainContentDiv = document.getElementById('content');

    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1588419651107-bb8e27af6ff5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    const paragraph = document.createElement('p');
    paragraph.textContent = `
    BLANC DE BLANC\n
    familiar aromas of grape jelly, cherry turnover, and cinnamon with a lively effervescence\n
    LUX PINOT NOIR\n
    ripe red fruit and earthy aromas, delicate yet complex palate with a long, spicy finish\n
    SPARKLING ROSE\n
    creamy with strawberry and crisp green apple flavors\n
    LUX CHARDONNAY\n
    zesty with lemon, green apple, and melon aromas and flavors\n
    `;

    mainContentDiv.appendChild(image);
    mainContentDiv.appendChild(heading);
    mainContentDiv.appendChild(paragraph);
}

export { loadMenuPage };