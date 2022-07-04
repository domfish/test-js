function list() {
    const tbody = document.getElementById('tbody')
    var societes = JSON.parse(localStorage.getItem('societes') || '[]')
    societes.map((societe, index) => {
        tbody.innerHTML += `
    <tr>
    <td scope="col">${societe.companyName}</td>
    <td scope="col">${societe.adress}</td>
    <td scope="col">${societe.email}</td>
    <td scope="col">${societe.employees}</td>
    <td scope="col"><button class="btn btn-outline-info" onclick="ToUpdate(${index})" type="button">update</button>
    <button class="btn btn-outline-danger" type="button" onclick="removeProduct(${index})" id="delete">delete</button>
    </td>
  </tr>
    `;
    })
}
function removeProduct(index) {
    var societes = JSON.parse(localStorage.getItem('societes') || '[]')
    societes.splice(index, 1,societe)
    localStorage.setItem('societes', JSON.stringify(societes))
    // console.log(products);
    location.reload();
}
function ToUpdate(index) {
    localStorage.setItem('updateIndex', JSON.stringify(index))
    location.href='updateSociete.html'
}