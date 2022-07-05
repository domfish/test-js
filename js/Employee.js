function list() {
    const tbody = document.getElementById('tbody')
    var employees = JSON.parse(localStorage.getItem('employees') || '[]')
    employees.map((employe, index) => {
        tbody.innerHTML += `
    <tr>
    <td scope="col">${employe.firstName}</td>
    <td scope="col">${employe.lastName}</td>
    <td scope="col">${employe.email}</td>
    <td scope="col">${employe.adresse}</td>
    <td scope="col"><button class="btn btn-outline-info" onclick="ToUpdate(${index})" type="button">update</button>
    <button class="btn btn-outline-danger" type="button" onclick="removeProduct(${index})" id="delete">delete</button>
    </td>
  </tr>
    `;
    })
}
function removeProduct(index) {
    var employees = JSON.parse(localStorage.getItem('employees') || '[]')
    employees.splice(index, 1,employees)
    localStorage.setItem('employees', JSON.stringify(employees))
    // console.log(products);
    location.reload();
}
function ToUpdate(index) {
    localStorage.setItem('updateIndexEmpl', JSON.stringify(index))
    location.href='updateEmploye.html'
}