module.exports = {

  randomNumberGen: function () {
    var randomNumber = Math.abs((Math.random() * (0.01 - 0.20) + 0.01).toFixed(2));
    return {
      number: randomNumber
    }
  }


}