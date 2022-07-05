const Name =document.getElementById('name')
const prenom=document.getElementById('prenom')
const email=document.getElementById('email')
const adresse=document.getElementById('adresse')
const valid=document.getElementById('valid')
const nameReq=document.getElementById('nameReq')
const prenomReq=document.getElementById('prenomReq')
const emailReq=document.getElementById('emailReq')
const adresseReq=document.getElementById('adresseReq')



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
    if (prenom.value == '') {
        prenom.classList.remove('is-valid')
        prenom.classList.add('is-invalid')
        prenomReq.innerText = 'le prenom est obligatoire';
        hasError = true;
    }
    else {
        prenom.classList.add('is-valid')
        prenom.classList.remove('is-invalid')
        prenomReq.innerHTML = '';
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
    if (adresse.value == '') {
        adresse.classList.remove('is-valid')
        adresse.classList.add('is-invalid')
        adresseReq.innerText = 'l\adresse est obligatoire';
        hasError = true;
    }
    else {
        adresse.classList.add('is-valid')
        adresse.classList.remove('is-invalid')
        adresseReq.innerHTML = '';
    }
    if (hasError != true) {
        var employees = JSON.parse(localStorage.getItem('employees')) || [];
        const employe = {
            firstName: Name.value,
            lastName: prenom.value,
            email: email.value,
            adresse: adresse.value,
        }
        employees.push(employe);
        localStorage.setItem('employees', JSON.stringify(employees))
        console.log(employe);
    }

})
function loadSociete(){
    var societes=JSON.parse(localStorage.getItem('societes') || '[]')
    societes.map(societe=>{
        const cat=document.getElementById('search')
        cat.innerHTML+=`
        <option value="${societe.companyName}">                   
        `
        // console.log(category.nameOfCategory);
    })
}



