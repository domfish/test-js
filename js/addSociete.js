const Name =document.getElementById('name')
const address=document.getElementById('adress')
const email=document.getElementById('email')
const employees=document.getElementById('employees')
const valid=document.getElementById('valid')
const nameReq=document.getElementById('nameReq')
const addressReq=document.getElementById('addressReq')
const emailReq=document.getElementById('emailReq')
const employeesReq=document.getElementById('employeesReq')



valid.addEventListener('click',(e)=>{
    e.preventDefault();
    var hasError = false ;
    if (Name.value == '') {
        Name.classList.remove('is-valid')
        Name.classList.add('is-invalid')
        nameReq.innerText = 'le nom est obligatoire';
        hasError = true;
    }
    else {
        Name.classList.add('is-valid')
        Name.classList.remove('is-invalid')
        nameReq.innerHTML = '';
    }
    if (address.value == '') {
        address.classList.remove('is-valid')
        address.classList.add('is-invalid')
        addressReq.innerText = 'l\adresse est obligatoire';
        hasError = true;
    }
    else {
        address.classList.add('is-valid')
        address.classList.remove('is-invalid')
        addressReq.innerHTML = '';
    }
    if (email.value == '') {
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
        emailReq.innerText = 'l\'adresse mail est obligatoire';
        hasError = true;
    }
    else {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
        emailReq.innerHTML = '';
    }
    if (employees.value == '') {
        employees.classList.remove('is-valid')
        employees.classList.add('is-invalid')
        employeesReq.innerText = 'le nom de l\'employe est obligatoire';
        hasError = true;
    }
    else {
        employees.classList.add('is-valid')
        employees.classList.remove('is-invalid')
        employeesReq.innerHTML = '';
    }
    if (hasError != true) {
        var societes = JSON.parse(localStorage.getItem('societes')) || [];
        const societe = {
            companyName: Name.value,
            adress: address.value,
            email: email.value,
            employees: [employees.value],
        }
        societes.push(societe);
        localStorage.setItem('societes', JSON.stringify(societes))
        console.log(societe);
    }

})



