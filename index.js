function validName(name, ) {
    if(typeof name === 'string' && name != '') {
        return name
    } else {
        let errMsg = document.getElementById('err');
        errMsg.innerHTML = 'Invalid name';
        return
    }
}

function saveDetails() {

    // accessing input element value
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let phone = document.getElementById('phone').value;
    let errMsgTag = document.getElementById('err');

    name = validName(name, errMsgTag);

    // accessing tbody container
    let tbodyContainer = document.getElementById('tbody-container');

    // creating tr and td container on-demand when clicking the 'save' button
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdAge = document.createElement('td');
    let tdPhone = document.createElement('td');

    // embeding value to the tag container to show in webpage
    tdName.innerHTML = name;
    tdAge.innerHTML = age;
    tdPhone.innerHTML = phone;

    // appending the td container to tr container
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdPhone);

    // appending tr container to tbody container
    tbodyContainer.appendChild(tr);

    // Reset the input container to empty string
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('phone').value = '';
}