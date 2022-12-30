let userName;
let pw;

userName = prompt("누구신가요?");

if (userName?.toLowerCase() == "admin") {
  pw = prompt("Password : ");

  if (pw == " " || pw == null) {
    alert("취소되었습니다.")
  } else if(pw == "TheMaster") {
    alert("환영합니다! ^_^");
  } else {
    alert("인증에 실패하였습니다.");
  }
} else if (userName == " " || userName == null) {
  alert("취소되었습니다.");
} else {
  alert("인증되지 않은 사용자입니다.");
}