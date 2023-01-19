function checkSequence(password) {git 
    var isSequence = false;
    for (var i = 0; i < password.length - 2; i++) {
        var c1 = password.charCodeAt(i);
        var c2 = password.charCodeAt(i + 1);
        var c3 = password.charCodeAt(i + 2);
        if (c1 + 1 === c2 && c2 + 1 === c3) {
            isSequence = true;
            break;
        }
    }
    if (isSequence) {
        console.log("Error: Password cannot contain a sequence.");
    } else {
        console.log("Password is valid.");
    }
}
