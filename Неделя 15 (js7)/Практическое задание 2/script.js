cities = [
    {
        city: 'Москва',
        temperature: ''
    },
    {
        city: 'Санкт-Петербург',
        temperature: ''
    },
    {
        city: 'Екатеринбург',
        temperature: ''
    },
    {
        city: 'Владивосток',
        temperature: ''
    },
    {
        city: 'Улан-Удэ',
        temperature: ''
    },
];

window.onload = function () {
    let mininum = 999;
    let maximum = -999;
    for (let i = 0; i < cities.length; i++) {
        cities[i].temperature = prompt('Введите температуру для города ' + cities[i].city);
        let p = document.createElement('p');
        document.querySelector('.container').appendChild(p);
        p.innerText = 'Температура в городе ' + cities[i].city + ': ' + cities[i].temperature + '°C';
        if (Number(cities[i].temperature) > maximum) {
            maximum = Number(cities[i].temperature);
        }
        if (Number(cities[i].temperature) < mininum) {
            mininum = Number(cities[i].temperature);
        }
    }
    let p = document.createElement('p');
    document.querySelector('.container').appendChild(p);
    p.innerText = 'Максимальная температура: ' + maximum + '°C';
    p = document.createElement('p');
    document.querySelector('.container').appendChild(p);
    p.innerText = 'Минимальная температура: ' + mininum + '°C';
}
