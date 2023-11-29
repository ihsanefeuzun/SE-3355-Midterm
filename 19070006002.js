
// Fetch data from the API
fetch('https://run.mocky.io/v3/0cbd2c91-13fc-473c-a6d3-63d816dba987')
    .then(response => response.json())
    .then(data => {

        const companyDropdown = document.getElementById('companyDropdown');
        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item.company;
            option.text = item.company;
            companyDropdown.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// Fetch data from the API
fetch('https://run.mocky.io/v3/2d6ea01e-0e7a-4130-a3f1-423ff5ea5114')
    .then(response => response.json())
    .then(data => {
        var dropdown = document.getElementById('areaDropdown');
        data.areaCodes.forEach(item => {
            var option = document.createElement('option');
            option.value = item.code;
            option.text = item.city + " (0" + item.code + ")";
            dropdown.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


// Fetch data from the API
fetch('https://run.mocky.io/v3/f6e71737-8062-4da6-baa4-937ad5941270')
    .then(response => response.json())
    .then(data => {
        var dropdown = document.getElementById('subjectDropdown');
        data.companySubjects.forEach(item => {
            var option = document.createElement('option');
            option.value = item.name;
            option.text = item.name;
            dropdown.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


function checkForm() {

    event.preventDefault();

    // Check if Name is empty
    var nameValue = document.getElementById('name').value;
    if (nameValue.trim() === "") {
        alert("Name cannot be empty.");
        return false;
    }

    // Check if Surname is empty
    var surnameValue = document.getElementById('surname').value;
    if (surnameValue.trim() === "") {
        alert("Surname cannot be empty.");
        return false;
    }
    // Check if the areaDropdown is not selected
    var selectedCompanyIndex = document.getElementById('companyDropdown').selectedIndex;
    if (selectedCompanyIndex === 0) {
        alert("Please select an option from the dropdown.");
        return false;
    }

    // Check if the email is valid
    var emailValue = document.getElementById('email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailValue)) {
        //alert("Valid email address: " + emailValue);
    } else {
        alert("Invalid email address. Please enter a valid email.");
        return false;
    }

    // Check if the areaDropdown is not selected
    var selectedAreaIndex = document.getElementById('areaDropdown').selectedIndex;
    if (selectedAreaIndex === 0) {
        alert("Please select an option from the dropdown.");
        return false;
    }

    // Check if the phoneNumber has 7 digits
    var phoneNumberValue = document.getElementById('phoneNumber').value;
    var digitsRegex = /^\d{7}$/;
    if (digitsRegex.test(phoneNumberValue)) {
        //alert("phoneNumberValue contains a valid 7-digit number: " + phoneNumberValue);
    } else {
        alert("Invalid input. Please enter a 7-digit number.");
        return false; // Prevent form submission
    }

    // Check if the areaDropdown is not selected
    var selectedAreaIndex = document.getElementById('areaDropdown').selectedIndex;
    if (selectedAreaIndex === 0) {
        alert("Please select an option from the dropdown.");
        return false;
    }

    // Check the status of radio button selection
    var yesRadioSelected = document.getElementById('inlineRadio1').checked;
    var noRadioSelected = document.getElementById('inlineRadio2').checked;
    if (yesRadioSelected || noRadioSelected) {
       // alert("Radio button is selected.");
    } else {
        alert("No radio button is selected.");
        return false;
    }

    return true;
}

function submitForm() {
    if (checkForm()) {
        window.location.href = 'Submitted.html';
    } else {
        alert("Form cannot be submitted.");
    }
}
