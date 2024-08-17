function sayMessage(fname,lname){
    let message = "Hello";

    function concatMsg(){ //nested functione
        message= `${message} ${fname} ${lname}`;

    }
    concatMsg();

    return message;
}

console.log(sayMessage("Ahmed","Sayed"));
