function gleap(y) {
    if (y % 4 === 0 && y % 100 !== 0) {
        return true;
    } else if (y % 100 === 0 && y % 400 !== 0) {
        return 'l';
    }
     else {
        return false;
    }
}

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
 if(gleap(year)=== true) {
            return '12.09.'.concat(year);
        }
        
        else if(gleap(year)=== 'l')  {
            return '12.09.'.concat(year);
            
        } else if (gleap(year) === false){
            return '13.09.'.concat(year);
        }

}


console.log(dayOfProgrammer(2100));
// result 13.09.2017