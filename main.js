let passwordbox = document.querySelectorAll("#password");
let length = 12;
let upper = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
let lower = "abcdefghigklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbol = "*-_()@#%$^&=/><~{}[]|+";
let all = upper + lower + numbers + symbol;

function create_pass() {
    let pass = "";
    pass += upper[Math.floor(Math.random() * upper.length)];
    pass += lower[Math.floor(Math.random() * lower.length)];
    pass += numbers[Math.floor(Math.random() * numbers.length)];
    pass += symbol[Math.floor(Math.random() * symbol.length)];
    while (length > pass.length) {
        pass += all[Math.floor(Math.random() * all.length)];
    }
    passwordbox = pass;
}