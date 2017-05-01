(function() {
    'use strict';

    angular
        .module('apttusApp')
        .factory('httpRequest', HttpRequestFactory)

    HttpRequestFactory.$inject = ['$q', '$http'];

    function HttpRequestFactory($q, $http) {

        return {
            get: get
        };

        function get(urlArray) {
            var promiseArr = [];
            angular.forEach(urlArray, function(url) {
                var deferred = $q.defer();
                $http({
                    url: url,
                    method: 'GET'
                }).then(function(data) {
                    deferred.resolve(data);
                }, function(error) {
                    deferred.reject();
                });
                promiseArr.push(deferred.promise);
            });
            return $q.all(promiseArr);
        }
    }

}());