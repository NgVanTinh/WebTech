let formReg = document.querySelector('.popup_form');

// Xử lí ngày sinh nhật
let daySelect = document.getElementById('day');
let monthSelect = document.getElementById('month');
let yearSelect = document.getElementById('year');

// Lấy ngày, tháng và năm hiện tại
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

// Đặt giá trị cho các select box
for (let i = 1; i <= 31; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    daySelect.appendChild(option);
}

for (let i = 1; i <= 12; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = 'Tháng ' + i;
    monthSelect.appendChild(option);
}

for (let i = currentYear; i >= 1900; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
}

// Xử lí chọn giới tính

const customRadioButton = document.getElementById("custom");
const customInput = document.getElementById("custom_input");
const genderRadios = document.querySelectorAll('.gender');
// console.log(genderRadios)

customRadioButton.addEventListener("change", function () {
    if (this.checked) {
        customInput.style.display = "block";
    } else {
        customInput.style.display = "none";
    }
});

genderRadios.forEach(function (radio) {
    radio.addEventListener('change', function () {
        if (!customRadioButton.checked) {
            customInput.style.display = "none";
        }
    });
});


// // Hiện ra gợi ý khi nhập tên, email, password 
formReg.ho.onfocus = function () {
    document.querySelectorAll('.error_mess').forEach(element => {
        element.style.display = 'none';
    });
    document.querySelector('.ho').style.display = 'inline-block';
}
formReg.ho.onblur = function () {
    document.querySelector('.ho').style.display = 'none';
    if (this.value == '') this.classList.add("input_error");
    else this.classList.remove("input_error");
}

formReg.ten.onfocus = function () {
    document.querySelectorAll('.error_mess').forEach(element => {
        element.style.display = 'none';
    });
    document.querySelector('.ten').style.display = 'inline-block';
}
formReg.ten.onblur = function () {
    document.querySelector('.ten').style.display = 'none';
    if (this.value == '') this.classList.add("input_error");
    else this.classList.remove("input_error");
}

formReg.email.onfocus = function () {
    document.querySelectorAll('.error_mess').forEach(element => {
        element.style.display = 'none';
    });
    document.querySelector('.email').style.display = 'inline-block';
}
formReg.email.onblur = function () {
    document.querySelector('.email').style.display = 'none';
    document.querySelector('.fail_email').style.display = 'none';
    if (this.value == '') this.classList.add("input_error");
    else this.classList.remove("input_error");
}

formReg.pw.onfocus = function () {
    document.querySelectorAll('.error_mess').forEach(element => {
        element.style.display = 'none';
    });
    document.querySelector('.pw').style.display = 'inline-block';
}
formReg.pw.onblur = function () {
    document.querySelector('.pw').style.display = 'none';
    if (this.value == '') this.classList.add("input_error");
    else this.classList.remove("input_error");
}


//Kiểm tra nhập đúng form chưa
let email = document.getElementById("email");
let password = document.getElementById("password")
let Ho = document.getElementById("Ho");
let Ten = document.getElementById("Ten");


formReg.addEventListener("submit", (e) => {
    e.preventDefault();

    let phoneRegEx = /^[0-9]{10,11}$/;
    let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Kiểm tra input có đầy đủ không
    if (Ho.value.trim() === "") {
        document.querySelector('.ho').style.display = 'inline-block';
    }
    else if (Ten.value.trim() === "") {
        document.querySelector('.ten').style.display = 'inline-block';
    }
    else if (email.value.trim() === "") {
        document.querySelector('.email').style.display = 'inline-block';
    }

    else if (password.value.trim() === "") {
        document.querySelector('.pw').style.display = 'inline-block';
    }
    if (Ho.value.trim() === "") {
        Ho.classList.add("input_error");
    }

    if (Ten.value.trim() === "") {
        Ten.classList.add("input_error");
    }
    if (email.value.trim() === "") {
        email.classList.add("input_error");
    }
    if (password.value.trim() === "") {
        password.classList.add("input_error");
    }
    if (phoneRegEx.test(email.value) === false && emailRegEx.test(email.value) === false)
        document.querySelector('.fail_email').style.display = 'inline-block';

    if (daySelect.value === ""
        || monthSelect.value === ""
        || yearSelect.value === "") {
        document.querySelector('.birthday').classList.add("input_error");
        document.querySelector('.err_birthday').style.display = 'inline-block';
    }
    else if (daySelect.value !== "" || monthSelect.value !== "" || yearSelect.value !== "") {
        document.querySelector('.birthday').classList.remove("input_error");
        document.querySelector('.err_birthday').style.display = 'none';
    }

    let selectedGender = null;
    genderRadios.forEach(function (radio) {
        if (radio.checked) {
            selectedGender = radio.id;
        }
    });
    if (selectedGender === null) {
        document.querySelector('.header_gender').classList.add("input_error");
        document.querySelector('.err_gender').style.display = 'inline-block';
    }
    else{
        document.querySelector('.header_gender').classList.remove("input_error");
        document.querySelector('.err_gender').style.display = 'none';
    }
    let customSelect = document.getElementById('select_gender_custom');

    if (selectedGender === "custom") {

        if (customSelect.value === "0") {
            document.querySelector('.err_customer').style.display = 'inline-block';
            document.querySelector('.select_gender_custom').classList.add("input_error");
        }
    }

    if (Ho.value.trim() !== "" && Ten.value.trim() !== ""
        && (phoneRegEx.test(email.value) === true || emailRegEx.test(email.value) === true)
        && (daySelect.value !== "" || monthSelect.value !== "" || yearSelect.value !== "")
        && (selectedGender !== null)) {
        if (selectedGender === "custom") { if (customSelect.value !== "0") alert("success!"); }
        else alert("success!");
    }
})
