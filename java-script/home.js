window.addEventListener('DOMContentLoaded', () => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHTML = "<tr>" 
                        + "<th></th>    <th> Name </th>    <th> Gender </th>" 
                        + "<th> Department </th>    <th> Salary </th> "
                        + "<th> Start Date </th>    <th> Actions </th>"
                        + "</tr>";

    let innerHTMLFromJS = `${headerHTML}`;
    let empPayrollList = createEmployeePayrollJSON();
    for(let empPayrollData of empPayrollList) {
        innerHTMLFromJS = `${innerHTMLFromJS}
        <tr>
            <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img name="${empPayrollData._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHTMLFromJS;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name:'Rekha Patil',
            _gender:'Female',
            _department:[
                'Engineer'
            ],
            _salary:'400000',
            _startDate: '1 Oct 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -1.png'
        },
        {
            _name:'Rashmi',
            _gender:'Female',
            _department:[
                'React Developer'
            ],
            _salary:'900000',
            _startDate: '28 dec 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/profile-images/Ellipse -7.png'
        },
        {
            _name:'Rishikesh',
            _gender:'Male',
            _department:[
                'React developer'
            ],
            _salary:'900000',
            _startDate: '29 jan 2020',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/profile-images/Ellipse -8.png'
        },
        {
            _name:'Nammu',
            _gender:'Female',
            _department:[
                'Data Engineer'
            ],
            _salary:'300000',
            _startDate: '29 dec 2021',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/profile-images/Ellipse -4.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(let dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`  // first ${deptHtml} is for adding the number of divs we want to put
    }
    return deptHtml;
} 