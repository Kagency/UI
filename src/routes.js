define([
    './app',
    './task'
], function (app, Task) {
    'use strict';

    return app.config(function ($routeProvider) {
        $routeProvider.when('/test', {
            templateUrl: 'partials/createTask.html',
            controller: function ($scope, kagentService) {
                $scope.task = new Task("Kagency\\Module\\RSS\\Task\\NewFeed");

                $scope.createTask = function() {
                    kagentService.appendTask($scope.task);
                    $scope.task = $scope.task.set("value", null);
                };
            }
        });

        $routeProvider.otherwise({
            redirectTo: '/test'
        });
    });
});
