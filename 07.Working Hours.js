function workingHours (input){
    let hourOfDay = Number(input[0]);
    let dayOfWeek = input[1];
    if( hourOfDay < 19 && hourOfDay > 9 && dayOfWeek !== "Sunday" ){
        console.log ("open");

    }
    else{
        console.log ("closed");
    }

}
workingHours (["11", "Monday"])