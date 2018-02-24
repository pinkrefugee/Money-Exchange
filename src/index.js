// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var obj = {};
    if(currency <= 0) return obj;
    

    if(currency > 10000)
    {    
        obj[ 'error' ] = "You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    }

    var arr = [50,25,10,5,1];
    function Rest(i)
    {
      if(i > 0)
      {
        return (Rest(i-1))%arr[i];
      }
      else return currency%arr[i];
    }
    
    var h = Math.floor(currency/50);
    var q = Math.floor(Rest(0)/25);
    var d = Math.floor(Rest(1)/10);
    var n = Math.floor(Rest(2)/5);
    var p = Math.floor(Rest(3)/1);
    
    
    if(h > 0) obj[ 'H' ] = h;
    if(q > 0) obj[ 'Q' ] = q;
    if(d > 0) obj[ 'D' ] = d;
    if(n > 0) obj[ 'N' ] = n;
    if(p > 0) obj[ 'P' ] = p;

    return obj;

}

