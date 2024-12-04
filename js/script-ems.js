// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    { id: 10123456, name: 'Aaliyah Johnson', extension: 1234, email: 'A.Johnson@example.com', department: 'Engineering' },
    { id: 10123457, name: 'Joseph Smith', extension: 5678, email: 'J.Smithh@example.com', department: 'Marketing' },
    { id: 10123458, name: 'Lisa Doe', extension: 9101, email: 'L.Doe@example.com', department: 'Executive' },
    { id: 10123459, name: 'Christopher Williams', extension: 1121, email: 'C.Williams@example.com', department: 'Sales' },
    { id: 10123460, name: 'Aaron Brown', extension: 3141, email: 'A.Brown@example.com', department: 'QA' },
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
}

// GET DOM ELEMENTS
const empTable = document.querySelector('#empTable tbody');
const empCount = document.querySelector('#empCount');
const form = document.querySelector('#addForm');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
document.addEventListener('DOMContentLoaded', buildGrid);

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.querySelector('#id').value;
    const name = document.querySelector('#name').value;
    const extension = document.querySelector('#extension').value;
    const email = document.querySelector('#email').value;
    const department = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = {
        id,
        name,
        extension,
        email,
        department
    };

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            const rowIndex = e.target.parentNode.parentNode.rowIndex - 1;

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex, 1);

            // BUILD THE GRID
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.innerHTML = '';

    // REBUILD THE TBODY FROM SCRATCH
    for (const employee of employees) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.extension}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td><button class="btn btn-danger btn-sm delete">Delete</button></td>
        `;
        //BIND THE TBODY TO THE EMPLOYEE TABLE (Done automatically by adding rows to `empTable`)
        empTable.appendChild(row);
    }

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = `(${employees.length})`;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
}