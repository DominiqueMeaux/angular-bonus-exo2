var app = angular.module('windowAlert', []);
 app.controller('alertCtrl', function($scope){
$scope.message='bijour!';
$scope.doMessage =function(message){
    window.alert(message);
};
});
