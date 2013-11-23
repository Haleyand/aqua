var aquaControllers = angular.module('aquaControllers', []);

aquaControllers.controller('chromeCtrl', ['$scope', '$location',
   function ($scope, $location) {
      $scope.$on('$locationChangeSuccess', function(event) {
         var pathClass = $location.path().replace('/', '');
         $scope.pathClass = pathClass ? pathClass : 'home';
      });
   }
]);

aquaControllers.controller('aboutCtrl', ['$scope', '$http',
   function ($scope, $http) {
   }
]);

aquaControllers.controller('productsCtrl', ['$scope', '$http',
   function ($scope, $http) {
      $scope.products = [
         {
            'name': 'Basil',
            'imgSrc': 'basil.jpg',
            'desc': "Basil is a great thing. It's a delicious addition to any dish. Basil is a great thing. It's a delicious addition to any dish."
         },
         {
            'name': 'Fields of green',
            'imgSrc': 'field.jpg',
            'desc': "Leafy greens are a great thing. It's a delicious addition to any dish. Leafy greens are a great thing. It's a delicious addition to any dish. Leafy greens are a great thing."
         },
         {
            'name': 'Leafy greens',
            'imgSrc': 'mixed.jpg',
            'desc': "Leafy greens are a great thing. It's a delicious addition to any dish."
         },
         {
            'name': 'Lettuce',
            'imgSrc': 'seedlings.jpg',
            'desc': "Lettuce is a great thing. We've got red lettuce, green lettuce, all kinds of lettuce. It's a delicious addition to any dish."
         }
      ];
   }
]);

aquaControllers.controller('servicesCtrl', ['$scope', '$http',
   function ($scope, $http) {
   }
]);
