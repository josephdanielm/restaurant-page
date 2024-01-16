const loadContactPage = () => {

    const mainContentDiv = document.getElementById('content');

    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1527102612281-7fff0660b9bd?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const paragraph = document.createElement('p');
    paragraph.textContent = "Phone : 111-111-1111 \n Email : notreal@veryreal.com";

    mainContentDiv.appendChild(image);
    mainContentDiv.appendChild(heading);
    mainContentDiv.appendChild(paragraph);
}

export { loadContactPage };