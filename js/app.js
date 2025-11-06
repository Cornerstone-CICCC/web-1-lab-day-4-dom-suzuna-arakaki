const form = document.querySelector('form')

const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const email = document.querySelector('#email')
const hireDate = document.querySelector('#hire_date')
const employeeList = document.querySelector('#employeeList')

const btnSubmit = document.querySelector('#btn-submit')


form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form) // What's happening here lol
        // console.log(formData.get('photo').name)
        const fileName = formData.get('photo').name // use 'get'

        // console.log(firstName.value); //display the data in console
        // console.log(lastName.value);
        // console.log(email.value);
        // console.log(hireDate.value);

        const row = document.createElement('tr');

        const tdImg = document.createElement('td');
        tdImg.innerHTML = `<img src="/images/${fileName}">`
        row.append(tdImg);

        const tdFirstName = document.createElement('td');
        tdFirstName.textContent = firstName.value;
        row.append(tdFirstName);

        const tdLastName = document.createElement('td');
        tdLastName.textContent = lastName.value;
        row.append(tdLastName);

        const tdEmail = document.createElement('td');
        tdEmail.textContent = email.value;
        row.append(tdEmail);

        const tdHireDate = document.createElement('td');
        tdHireDate.textContent = hireDate.value;
        row.append(tdHireDate);

        const tdActions = document.createElement('td');
        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Delete"
        btnDelete.addEventListener('click', function() {
                const confirmation = confirm("Are you sure you want to delete this?")
                if (confirmation) {
                        row.remove();
                }     
        });
        tdActions.append(btnDelete);
        row.append(tdActions);


        employeeList.append(row);





        // This code is wrong!! -->>

        // const allData = [
        //         photo.value,
        //         firstName.value,
        //         lastName.value,
        //         email.value,
        //         hireDate.value
                
        // ]
        // [firstName, lastName, email, hireDate, photo]

        // allData.forEach(item => {
        //         // 'tr'
        //         const row = document.createElement('tr');

        //         // 'td'
        //         const cells = document.createElement('td');
        //         cells.textContent = item;
        //         row.append(cells);

        //         // add row?
        //         employeeList.append(row);
        // })
        
        // row.textContent = [photo, firstName, lastName, email, hireDate, actions]
});