function checkForPrimeNumber(num) {
    if (typeof num !== 'number' || Number.isNaN(num)) {
      console.log('Not a number');
      return false;
    }
  
    num = Math.floor(num);
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(checkForPrimeNumber(NaN));