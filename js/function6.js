function input_friend() {
    let table1 = document.getElementById('friends');

    let tr = document.createElement('tr');

    let td = document.createElement('td');
    let names = document.getElementById('name');
    td.innerHTML = names.value;

    let td2 = document.createElement('td');
    let ages = document.getElementById('age');
    td2.innerHTML = ages.value;

    let td3 = document.createElement('td');
    let hobbys = document.getElementById('hobby');
    td3.innerHTML = hobbys.value;

    tr.append(td);
    tr.append(td2);
    tr.append(td3);

    table1.append(tr);
    console.log(names.value, ages.value, hobbys.value);
}
    // console.log(names.value, ages.value, hobbys.value);
    // document.getElementById('result').value = names.value + ', ' + ages.value + ', ' + hobbys.value
