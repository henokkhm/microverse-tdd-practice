const stringLength = (string) => {
 const len = string.length;
 if(len >= 1 && len <= 10){
    return len;
 }
 throw new Error("String must be between one and ten characters long, inclusive.")
};

module.exports = { stringLength };
