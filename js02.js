function base()
{    var name, age, add, phone, fa, mo;
    name=window.prompt("Enter your Name");
    fa=window.prompt("Enter your Father name");
    mo=window.prompt("ENter your mother name");
    age=window.prompt("Enter your age");
    phone=window.prompt("Enter your phone number !");
    add=window.prompt("Enter your address");

    document.getElementById("Intro").innerHTML="My name is \t" + name +". Am "+age+"\t years young! \t"+", My Father name is\t" + fa+" \tand My Mother name is \t"+mo+". We all live  in\t "+ add+"\tIf you need to contact me then call : \t"+phone+"\nThank you !";

}
console.log("Hello");

function sendMail() {
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var body = document.getElementById("body").value;

  window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
}
