const pas = "admin";
const user = "admin";
function validate(){
const u1 = document.getElementById("name").value;
const p1 = document.getElementById("pas").value;
if(u1==user && p1==pas){
    alert("sucesfully login");
    document.write(`welcome ${user} in our website`);
    return true;
}
else{
    alert("wrong username or password");
    return false;
}
}