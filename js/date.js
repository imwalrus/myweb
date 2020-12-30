// date.js
let inputs = document.getElementsByTagName('input');
for(let i = 0; i < inputs.length; i++) {
    inputs[i].onchange = createCal;
}


function createCal(e) {
    let yyyy = document.getElementById('yyyy').value;
    let mm = document.getElementById('mm').value;
    let show = document.getElementById('show');
    if (show.children.length) {
        show.removeChild(show.children[0]);
    }
    showCal(yyyy, mm);
}

function createHeader() {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
    let tr = document.createElement('tr');
    for(day of days) {
        let td = document.createElement('td');
    th.innerHTML = a;
    tr.append(th);
    tb.append(tr);
}


function showCal(yyyy, mm) {
    let today = new Date(yyyy + '-' + mm + '-01');
    let firstDay = today.getDay();
    today = new Date(yyyy, mm, 0);
    let lastDay = today.getDate();

    let tb = document.createElement('table');
    tb.setAttribute('border', '1');
    let tr, td;
    tr = document.createElement('tr');
    for (let i = 1; i <= lastDay; i++) {
        td = document.createElement('td');
        td.innerHTML = i;
        tr.append(td);
        if ((i + firstDay) % 7 == 0) {
            tb.append(tr);
            tr = document.createElement('tr');
        }
        tb.append(tr);
    }
    document.getElementById('show').append(tb);
}