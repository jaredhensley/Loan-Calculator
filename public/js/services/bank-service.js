angular.module('loanCalculator').service('bankService', function ($http) {

  this.getInterestRate = function () {

    return $http({

      method: 'GET',
      url: 'http://localhost:3001/interest_rate'

    });
  }
});