//hàm kiểm tra cho form đăng ký
function validateRegisterForm(event) {
    //1. Ngăn chặn hành vi gửi mặc định của form
    //Hành động này sẽ giúp js có thời gian kiểm tra dữ liệu trước khi trang bị tải lại
    event.preventDefault();
    // lấy các phần tử HTML và lấy giá trị nhập vào
    const username = document.getElementById("RegisterUsername").value.trim();
    const password = document.getElementById("RegisterPassword").value.trim();
    const repassword = document.getElementById("RegisterRePassword").value.trim();
    const phonenumber = document.getElementById("RegisterPhoneNumber").value.trim();
    const errorDisplay = document.getElementById("RegisterErrorMessages");
    // reset thông báo lỗi trước khi kiểm tra
    errorDisplay.innerHTML = '';
    let errors = [];
    // kiểm tra username
    if(username === "" || password === "" || repassword === "" || phonenumber === ""){
        errors.push("Vui lòng điền đầy đủ thông tin.");
    }
    if( username.length < 6 || username.length > 15 || !/^[a-zA-Z0-9]+$/.test(username)){
        errors.push("Tên đăng nhập phải có từ 6 đến 15 ký tự và chứa chỉ chứa chữ cái và số.");
    }
    // kiểm tra password
    if( password.length <6 || password.length > 15 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)){
        errors.push("Mật khẩu phải có từ 6 đến 15 ký tự  và bao gồm chữ hoa, chữ thường và số.");
    }
    // kiếm tra repassword
    if(password !== repassword){
        errors.push("Mật khẩu không khớp.");
    }
    // kiểm tra số điện thoại
    if(!/^(0[0-9]{9}$)/.test(phonenumber)){
        errors.push("Số điện thoại không hợp lệ.");
    }
    if (errors.length > 0) {
        errors.forEach(err => {
           errorDisplay.innerHTML += '<p>' + err + '</p>';
        });
        return false;
    }
    else {
        alert("Đăng ký thành công!");
        window.location.href = "dang-nhap.html";
    }
}
//Hàm kiểm tra cho form đăng nhập
function validateLoginForm(event) {
    event.preventDefault();
    const username = document.getElementById("LoginUsername").value.trim();
    const password = document.getElementById("LoginPassword").value.trim();
    const errorDisplay = document.getElementById("LoginErrorMessages");
    
    let errors = [];
    errorDisplay.innerHTML = '';
    if(username === "" || password === ""){
        errors.push("Vui lòng điền đầy đủ tên đăng nhâp và mật khẩu.");
    }
    if(errors.length > 0){
        errors.forEach(err => {
           errorDisplay.innerHTML += '<p>' + err + '</p>';
    });
        return false;
    } else {
        alert("Đăng nhập thành công!");
        return false;
    }

}