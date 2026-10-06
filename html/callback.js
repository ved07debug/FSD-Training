function sum(a,b){
    return a+b;
}

function sumWithMsg(clbk,mgs){
    const result = clbk(20,30);
    const fresult= "HI" + mgs +"your score is" + result;
    console.log(fresult);
}

sumWithMsg(sum, "Mr Deepak");