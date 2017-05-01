(function() {
    'use strict';
    angular
        .module('apttusApp', []);
}());

(function() {
    'use strict';

    angular
        .module('apttusApp')
        .controller('apttusApp.mainCtrl', MainCtrl)

    MainCtrl.$inject = ['$scope', '$compile', 'httpRequest']

    /** @ngInject */
    function MainCtrl($scope, $compile, httpRequest) {
        var vm = this;

        init();

        function init() {

            vm.onSubmit = function() {
                if (vm.urlField !== "") {
                    var urlArray, promiseArr = [];
                    urlArray = vm.urlField.split(",");
                    // call URL as http://127.0.0.1:8080/data/jsondata.json, http://127.0.0.1:8080/data/persondata.json
                    httpRequest.get(urlArray).then(function(responseArray) {
                        vm.responseArr = "";
                        for (var i = 0; i < responseArray.length; i++) {
                            if (vm.responseArr !== "") {
                                vm.responseArr += "\n";
                            }
                            vm.responseArr += "Response " + (i + 1) + "\n" + JSON.stringify(responseArray[i].data);
                        }
                    }, function(error) {
                        console.error(error);
                    })
                } else {
                    console.error("Invalid URLs entered");
                }
            };
        }

    }

}());