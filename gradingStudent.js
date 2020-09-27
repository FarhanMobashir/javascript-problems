function near(n) {
    if (n.length == 1) {
        if(n[0] < 7 && n[n.length-1] >= 3) {
            return '5';
    
        } else if(n[0] < 3 && n[n.length-1] >= 0) {
            return '0';
    
        }
         else if (n[0] >= 7) {
            return 1+ '0';
        } 
        
    }
    if(n[n.length-1] < 5 && n[n.length-1] >= 3) {
        return n[0]+'5';

    } else if (n[n.length-1] == 5 ) {
    return n;
    }
    else if (n[n.length-1] < 3 && n[n.length-1] > 0 ) {
        return n[0]+'0';
    
    } else if ((n[n.length-1] >= 7)){
        return parseInt(n[0])+1 + '0';
    } else if(n[n.length-1] < 7 && n[n.length-1] > 5 ) {
        return n[0]+'5';
    }
}

console.log(near('9'));

function grading(grades) {
    
    let result = [];
    for(let i = 0; i < grades.length;i++) {
        if(grades[i] < 38 ) {
            result.push(grades[i]);
        } else if (Math.abs(near(grades[i].toString())) - grades[i] < 3) {
            result.push(parseInt(near(grades[i].toString())));
        }
        else if (Math.abs(near(grades[i].toString()) - grades[i]) >= 3) {
        result.push(grades[i]);
        }
       
    }
    return result;
    
}

console.log(grading([4,0,12,73,67,38,33,77,89,98,3,9,23,18]));