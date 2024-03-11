let formReg = document.querySelector('.popup_form');

// Xử lí ngày sinh nhật
let daySelect = document.getElementById('day');
let monthSelect = document.getElementById('month');
let yearSelect = document.getElementById('year');

// Lấy ngày, tháng và năm hiện tại
let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
let currentYear = currentDate.getFullYear();

// Đặt giá trị cho các select box
for (let i = 1; i <= 31; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    if (i === currentDay) {
        option.selected = true;
    }
    daySelect.appendChild(option);
}

for (let i = 1; i <= 12; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = 'Tháng ' + i;
    if (i === currentMonth) {
        option.selected = true;
    }
    monthSelect.appendChild(option);
}

for (let i = currentYear; i >= 1900; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    if (i === currentYear) {
        option.selected = true;
    }
    yearSelect.appendChild(option);
}

// Xử lí chọn giới tính

const customRadioButton = document.getElementById("custom");
const customInput = document.getElementById("custom_input");
const genderRadios = document.querySelectorAll('.gender');

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


// // Kiểm tra nhập tên, email, password chưa
// formReg.ho.onfocus = function () {
//     document.querySelectorAll('.error_mess').forEach(element => {
//         element.style.display = 'none';
//     });
//     document.querySelector('.ho').style.display = 'inline-block';
// }
// formReg.ho.onblur = function() {
//     if(this.value == '') this.classList.add("input_error");
//     else this.classList.remove("input_error");
// }

// formReg.ten.onfocus = function () {
//     document.querySelectorAll('.error_mess').forEach(element => {
//         element.style.display = 'none';
//     });
//     document.querySelector('.ten').style.display = 'inline-block';
// }
// formReg.ten.onblur = function () {
//     if (this.value == '') this.classList.add("input_error");
//     else this.classList.remove("input_error");
// }

// formReg.email.onfocus = function () {
//     document.querySelectorAll('.error_mess').forEach(element => {
//         element.style.display = 'none';
//     });
//     document.querySelector('.email').style.display = 'inline-block';
// }
// formReg.email.onblur = function () {
//     if (this.value == '') this.classList.add("input_error");
//     else this.classList.remove("input_error");
// }

// formReg.pw.onfocus = function () {
//     document.querySelectorAll('.error_mess').forEach(element => {
//         element.style.display = 'none';
//     });
//     document.querySelector('.pw').style.display = 'inline-block';
// }
// formReg.pw.onblur = function () {
//     if (this.value == '') this.classList.add("input_error");
//     else this.classList.remove("input_error");
// }

// formReg.ngay.onblur = function () {
//     if (this.value == '') this.classList.add("input_error");
//     else this.classList.remove("input_error");
// }

//Kiểm tra nhập đúng form chưa
let email = document.getElementById("email");
console.log(email);
formReg.addEventListener("submit", (e) => {
    e.preventDefault();

    let phoneRegEx = /^[0-9]{10,11}$/;
    let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!phoneRegEx.test(email.value) && !emailRegEx.test(email.value))
        document.querySelector('.fail_email').style.display = 'inline-block';

})
