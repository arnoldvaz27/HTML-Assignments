var a = 0;

function primeNumbers()
{
    a = Number(document.getElementById("num").value);

    if(a>100 || a<0)
    {
        alert("Number below 0 and Number above 100 not allowed");
    }
    else{
        document.write("<h3>These are the Prime Numbers till ",a,"</h3>");
        for (var counter = 0; counter <= a; counter++) {

            var notPrime = false;
            for (var i = 2; i <= counter; i++) {
                if (counter%i===0 && i!==counter) {
                    notPrime = true;
                }
            }
            if (notPrime === false) {
                        document.write("<h3>",counter,"</br></h3>");
            }
        }
    }
    
    
}