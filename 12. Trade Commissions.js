function tradeCommissions (input){
    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0;

        if (sales >=0 && sales <=500){
            if(city == "Sofia"){
                commission = sales*0.05;
            }
            else if(city == "Varna"){
                commission = sales*0.045;
            }
            else if(city == "Plovdiv"){
                commission = sales*0.055;
            }
            else{
                console.log ("error");
                }
           
        }
        else if (sales > 500 && sales <= 1000){
            if(city == "Sofia"){
                commission = sales*0.07;
            }
            else if(city == "Varna"){
                commission = sales*0.075;
            }
            else if(city == "Plovdiv"){
                commission = sales*0.08;
            }
            else{
                console.log ("error");
                }
            
        }
        else if (sales > 1000 && sales <= 10000){
            if(city == "Sofia"){
                commission = sales*0.08;
            }
            else if(city == "Varna"){
                commission = sales*0.10;
            }
            else if(city == "Plovdiv"){
                commission = sales*0.12;
            }
            else{
                console.log ("error");
                }           
        }
        else if (sales > 10000){
            if(city == "Sofia"){
                commission = sales*0.12;
            }
            else if(city == "Varna"){
                commission = sales*0.13;
            }
            else if(city == "Plovdiv"){
                commission = sales*0.145;
            }
            else{
            console.log ("error");
            }
            
        }
        else {
            console.log ("error");
        }
       
        if (commission>0){
            console.log (commission.toFixed(2));
        }               
}
tradeCommissions (["Sofia", "1500"])