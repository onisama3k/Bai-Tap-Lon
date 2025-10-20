import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { auth, db } from "./firebase-config.js";
//hàm kiểm tra cho form đăng ký
async function validateRegisterForm(event) {
    //1. Ngăn chặn hành vi gửi mặc định của form
    //Hành động này sẽ giúp js có thời gian kiểm tra dữ liệu trước khi trang bị tải lại
    event.preventDefault();
    // lấy các phần tử HTML và lấy giá trị nhập vào
    const username = document.getElementById("RegisterUsername").value.trim();
    const password = document.getElementById("RegisterPassword").value.trim();
    const repassword = document.getElementById("RegisterRePassword").value.trim();
    const email = document.getElementById("RegisterEmail").value.trim();
    const phonenumber = document.getElementById("RegisterPhoneNumber").value.trim();
    const address = document.getElementById("RegisterAddress").value.trim();
    const errorDisplay = document.getElementById("RegisterErrorMessages");
    // reset thông báo lỗi trước khi kiểm tra
    errorDisplay.innerHTML = '';
    let errors = [];
    // kiểm tra username
    if(username === "" || password === "" || repassword === "" || phonenumber === "" || address === "" || email === ""){
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
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        errors.push("Email không hợp lệ.");
    }
    // kiểm tra số điện thoại
    if(!/^(0[0-9]{9}$)/.test(phonenumber)){
        errors.push("Số điện thoại không hợp lệ.");
    }
    if(address.length < 10){
        errors.push("Vui lòng nhập địa chỉ đầy đủ.");
    }
    if (errors.length > 0) {
    const box = document.getElementById("errorBox");
    errorDisplay.innerHTML = ''; // reset
    errors.forEach(err => {
       errorDisplay.innerHTML += '<p>' + err + '</p>';
    });
    box.style.display = "flex"; //  bật hiển thị lại hộp
    return false;
    }
else {
    document.getElementById("errorBox").style.display = "none";

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", userCredential.user.uid), {
            username: username,
            email: email,
            phone: phonenumber,
            address: address,
            createdAt: new Date()
        });

        alert("Đăng ký thành công!");
        window.location.href = "dang-nhap.html";
    } catch (error) {
        showErrorRegister(error.message);
    }
    }
    return false;
}
//Hàm kiểm tra cho form đăng nhập
async function validateLoginForm(event) {
    event.preventDefault();
    const password = document.getElementById("LoginPassword").value.trim();
    const email = document.getElementById("LoginEmail").value.trim();
    const errorDisplay = document.getElementById("LoginErrorMessages");
    
    let errors = [];
    errorDisplay.innerHTML = '';
    if(email === "" || password === ""){
        errors.push("Vui lòng điền đầy đủ email và mật khẩu.");
    }
    if(errors.length > 0){
      showErrorLogin(errors.join('<br>'));
      return false;
    } else {
        document.getElementById("errorBox").style.display = "none";
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Đăng nhập thành công!");
        window.location.href = "trang-chu.html";
        } catch (error){
            showErrorLogin(error.message);
        }
    }
    return false;
}
function showErrorRegister(message) {
  const box = document.getElementById("errorBox");
  const msg = document.getElementById("RegisterErrorMessages");
  
  msg.textContent = "❗ " + message;  // đổi nội dung lỗi
  box.style.display = "flex";         // hiển thị lại hộp lỗi
}
function showErrorLogin(message) {
  const box = document.getElementById("errorBox");
  const msg = document.getElementById("LoginErrorMessages");
  msg.innerHTML = "❗ " + message;
  box.style.display = "flex";
}
function closeErrorBox() {
document.getElementById("errorBox").style.display = "none";
}