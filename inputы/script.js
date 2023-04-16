document.addEventListener('DOMContentLoaded', event => {
    const inputs = document.querySelectorAll('#input');
    const table = document.getElementById('table');
    const form = document.getElementById('form');

    let p = [];

    inputs.forEach((input) => input.addEventListener('input', ()=> {
        input.value = input.value.replace(/[^А-Яа-яЁё -]/g, '');
    }));

    function capitilizeFirstLetter(str) {
        return str[0].toUpperCase() + str.substring(1);
    }

    inputs.forEach((input) => input.addEventListener('blur', () => {
        input.value = input.value.replace(/^ +| +$/g,""); 
        input.value = input.value.replace(/^-+|-+$/g,""); 
        input.value = input.value.replace(/ +/g," "); 
        input.value = input.value.replace(/-+/g,"-"); 

        input.value = capitilizeFirstLetter(input.value)

        p.push(input.value);
        console.log(p);
    }));

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let text = p.join(' ');
        const newP = document.createElement('p');
        newP.innerHTML = text;
        table.appendChild(newP);
        p = [];
        event.target.reset(); 
    }) 
});
