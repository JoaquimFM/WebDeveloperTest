var letters = "aaaabbbbbcca";
var countLetters = new Array();
var amount = 1;

function count(text){

    for(i = 0; i < text.length - 1; i++){

        var c1 = text.substr(i, 1);
        var c2 = text.substr(i + 1, 1);

        if(c1 == c2){
            amount++;
        }
        else{
            var arrayLet = [c1, amount];
            countLetters.push(arrayLet);
            amount = 1;
        }
    }

    var c1 = text.substr(-2, 1);
    var c2 = text.substr(-1, 1);

    if(c1 == c2){
        var arrayLet = [c1, amount];
        countLetters.push(arrayLet);
    }
    else{
        amount = 1;
        var arrayLet = [c2, amount];
        countLetters.push(arrayLet);
    }

    return countLetters;
}

console.log(count(letters));