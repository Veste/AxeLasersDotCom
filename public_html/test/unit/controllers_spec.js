// A Jasmine test example

describe('PhoneListController', function() {

  beforeEach(module('phonecatApp'));

  it( 'should create a "phones" module with 3 phones',
    inject(function($controller) {
      var scope = {},
          ctrlr = $controller('PhoneListController',
            { $scope: scope });

      expect( scope.phones.length ).toBe(3);

      expect( scope.name ).toBe("PHONECAT");
    })
  );
});