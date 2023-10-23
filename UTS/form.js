
const form = document.getElementById('form')
function postData() {
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const type = document.getElementById('type').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const card = document.getElementById('card').value;
    const date = document.getElementById('date').value;
    const address = document.getElementById('address').value;


    const mahasiswa = {
        name,
        id,
        type,
        email,
        password,
        card,
        date,
        address,
    };

    let dataMahasiswa = JSON.parse(localStorage.getItem('mahasiswa')) || [];
    dataMahasiswa.push(mahasiswa);
    console.log(dataMahasiswa);
    localStorage.setItem('mahasiswa', JSON.stringify(dataMahasiswa));
    form.reset();
};

const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', postData);