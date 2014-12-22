var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListController', function($scope) {
  $scope.phones = [
    { name: 'Nexus S',
      snippet: 'Fast just got faster' },
    { name: 'Motorola XOOM w/ WiFi',
      snippet: 'The Next, Next Generation tablet.' },
    { name: 'Motorola XOOM',
      snippet: 'The Next, Next Generation tablet.' },  
  ];

  $scope.name = "PHONECAT";
});