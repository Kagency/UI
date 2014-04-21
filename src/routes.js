define(['./app'], function (app) {
    'use strict';

    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/test', {
            templateUrl: 'partials/test.html',
            controller: function ($scope) {
                $scope.version = '0.1.0';
            }
        });

        $routeProvider.otherwise({
            redirectTo: '/test'
        });
    }]);
});
