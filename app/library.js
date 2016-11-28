module.exports = {
getPrimes: function(n) {
var A = [], i, j, primes = [];
	for(i = 2; i <= n; i++){
		 if (!A[i]) { 
	        primes.push(i);
	        for (j = i << 1; j <= n; j += i) {
	            A[j] = true;
	        }
	    }
	}
    return primes;
}    
}
