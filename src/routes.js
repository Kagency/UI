define([
    './app'
], function (app) {
    'use strict';

    return app.config(function ($routeProvider) {
        $routeProvider.when('/test', {
            templateUrl: 'partials/createTask.html',
            controller: function ($scope, kagentService) {
                $scope.task = {
                    type: "Kagency\\Module\\RSS\\Task\\NewFeed",
                    value: null
                };

                $scope.createTask = function() {
                    kagentService.appendTask($scope.task);
                };
            }
        });

        $routeProvider.otherwise({
            redirectTo: '/test'
        });
    });
});
