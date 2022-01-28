const timeConversion = (s) => {
    // Write your code here
     // Write your code here
    const hours = s.slice(0,2);
    const timeWithoutEnding = s.slice(0,-2);
    const timeWithoutHoursAndEnding = s.slice(2, -2)
    console.log(s[8])
    if(s[8] === "A" && hours === "12") {
        return "00" + timeWithoutHoursAndEnding;
    }
    if(hours === "12" || s[8] === "A") {
        return timeWithoutEnding;   
    }
    
    return (parseInt(hours) + 12) + timeWithoutHoursAndEnding;
}

timeConversion('07:05:45PM')