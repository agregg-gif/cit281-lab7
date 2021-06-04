class CustomError extends Error {
    
    constructor(args) {
        super(args);
        this.message = 'CustomError';
}

throwGenericError () {
    throw new Error("Generic error");
}

throwCustomError () {
    throw new CustomError().message;
}

}

const myError = new CustomError();

console.log("Force generic error");
try {
    console.log("Generic error try block");
    myError.throwGenericError();
} catch {
    console.log("Generic error catch block");
    console.log(myError.throwGenericError());
} finally {
    console.log("Generic error finally block");
}

console.log("Force Custom Error");
try {
    console.log("Custom error try block");
} catch {
    
}
