const people = [
    { name: 'adri' },
    { name: 'becky' },
    { name: 'chris' },
    { name: 'dillon' },
    { name: 'evan' },
    { name: 'frank' },
    { name: 'georgette' },
    { name: 'hugh' },
    { name: 'igor' },
    { name: 'jacoby' },
    { name: 'kristina' },
    { name: 'lemony' },
    { name: 'matilda' },
    { name: 'nile' },
    { name: 'ophelia' },
    { name: 'patrick' },
    { name: 'quincy' },
    { name: 'roslyn' },
    { name: 'solene' },
    { name: 'timothy' },
    { name: 'uff' },
    { name: 'violet' },
    { name: 'wyatt' },
    { name: 'x' },
    { name: 'yadri' },
    { name: 'zack' },
];

const searchInput = document.getElementById('searchInput');
const list = document.getElementById('list');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');

searchInput.addEventListener("input", (e) => {
    let value = e.target.value;

    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();

        setList(people.filter(person => {
            return person.name.includes(value);
        }));
    } else {
        clearList();
    }
});

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let value = searchInput.value;

    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();

        setList(people.filter(person => {
            return person.name.includes(value);
        }));
    } else {
        clearList();
    }
});

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.value = ''; // Clear the input field
    clearList(); // Clear any previous results from the page
});

function setList(results) {
    clearList();
    for (const person of results) {
        const resultItem = document.createElement('li');
        resultItem.classList.add('result-item');
        const text = document.createTextNode(person.name);
        resultItem.appendChild(text);
        list.appendChild(resultItem);
    }

    if (results.length === 0) {
        noResults();
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function noResults() {
    const error = document.createElement('li');
    error.classList.add('error-message');
    const text = document.createTextNode('No results found. Sorry!');
    error.appendChild(text);
    list.appendChild(error);
}
