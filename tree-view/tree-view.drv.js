(function() {
    'use strict';

    angular
        .module('apttusApp')
        .directive('treeView', TreeViewDirective);



    TreeViewDirective.$inject = [];
    /** @ngInject */
    function TreeViewDirective() {

        function link(scope) {
            console.log(scope.item);
        }

        return {
            link: link,
            restrict: 'E',
            templateUrl: 'tree-view/tree-view.tpl.html',
            scope: {
                item: "="
            }
        }
    }

}());