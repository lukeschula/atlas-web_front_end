function changeMode(size, weight, transform, background, color) {
    const pageSelector = document.querySelector('html');

    return function() {
        pageSelector.style.fontSize = size;
        pageSelector.style.fontWeight = weight;
        pageSelector.style.textTransform = transform;
        pageSelector.style.backgroundColor = background;
        pageSelector.style.color = color;
    };
};

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    const contentDiv = document.getElementById('content');

    const pTag = document.createElement('p');
    const pText = document.createTextNode('Welcome Holberton!');
    pTag.appendChild(pText);
    contentDiv.appendChild(pTag);

    const spookyButton = document.createElement('button');
    const spookyText = document.createTextNode('Spooky');
    spookyButton.appendChild(spookyText);
    contentDiv.appendChild(spookyButton);

    const darkButton = document.createElement('button');
    const darkText = document.createTextNode('Dark Mode');
    darkButton.appendChild(darkText);
    contentDiv.appendChild(darkButton);

    const screamButton = document.createElement('button');
    const screamText = document.createTextNode('Scream Mode');
    screamButton.appendChild(screamText);
    contentDiv.appendChild(screamButton);

    spookyButton.addEventListener('click', spooky);
    darkButton.addEventListener('click', darkMode);
    screamButton.addEventListener('click', screamMode);
}

main();
