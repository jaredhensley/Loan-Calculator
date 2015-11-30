angular.module('loanCalculator').controller('ng-main-ctrl', function ($scope, bankService) {

  bankService.getInterestRate().then(function (res) {
    $scope.interest_rate = res.data.number;
  });

  $scope.calculatePayment = function () {
    console.log('im in hereeeee');
    $scope.monthly_payment = $scope.principal * $scope.interest_rate / 48;
  }


});