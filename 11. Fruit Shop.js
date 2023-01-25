function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;


    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {

        if (product == "banana") {
            price = 2.5;
        }
        else if (product == "apple") {
            price = 1.2;
        }
        else if (product == "orange") {
            price = 0.85;
        }
        else if (product == "grapefruit") {
            price = 1.45;
        }
        else if (product == "kiwi") {
            price = 2.7;
        }
        else if (product == "pineapple") {
            price = 5.5;
        }
        else if (product == "grapes") {
            price = 3.85;
        }
        else {
            console.log("error");
        }
    }

    else if (day == "Sunday" || day == "Saturday") {
        if (product == "banana") {
            price = 2.7;
        }
        else if (product == "apple") {
            price = 1.25;
        }
        else if (product == "orange") {
            price = 0.90;
        }
        else if (product == "grapefruit") {
            price = 1.60;
        }
        else if (product == "kiwi") {
            price = 3.00;
        }
        else if (product == "pineapple") {
            price = 5.60;
        }
        else if (product == "grapes") {
            price = 4.20;
        }
        else {
            console.log("error");
        }
    }

    else {
        console.log("error");
    }

    let sum = quantity * price;
    if(sum>0){
    console.log(sum.toFixed(2));
    }
}

fruitShop(["kiwi", "Monday", "2.5"])