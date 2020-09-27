function timeConversion(s){
    for(let i = 0; i < s.length; i++) {
        if(s[s.length-2] === 'A' && s.slice(0,2) !== '12') {
            return s.slice(0,s.length-2);
        }
        else if(s[s.length-2] === 'A' && s.slice(0,2) === '12') {
            return '00' + s.slice(2,s.length-2);
        }
        else if(s[s.length-2] === 'P' && s.slice(0,2) === '12') {
            return '12' + s.slice(2,s.length-2);
        }
        else if (s[s.length-2] === 'P') {
            let pm = parseInt(s.slice(0,2)) + 12;
            return pm.toString() + s.slice(2,s.length-2);
        }
    }
}

console.log(timeConversion('12:05:45AM'));