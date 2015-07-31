angular.module('starter.controllers', ['ngSanitize'])
    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    })
    .controller('ProjectCtrl', function ($scope, Project, $ionicLoading, $q, $timeout) {
        reload();

        function reload() {
            $ionicLoading.show({
                template: '正在载入...'
            });
            var page = 0,
                loader = function () {
                    page++;
                    loadData(page).then(function(data){
                        if (page === data.total_pages) {
                            page = 0;
                        }
                        $timeout(loader, 2000);
                    });
                };
            loader();
        }

        function loadData(page) {
            var defer = $q.defer();
            Project.get({page: page}, function (projects) {
                $scope.projects = projects.data;
                $scope.total_pages = projects.total_pages;
                $ionicLoading.hide();
                defer.resolve(projects);
            });
            return defer.promise;
        }

        //reload();
        //
        //function reload () {
        //    $ionicLoading.show({
        //        template: '正在载入...'
        //    });
        //    var page = 0;
        //    var total_pages = 0;
        //    $interval(function() {
        //        page++
        //        loadData(page);
        //        total_pages = $scope.total_pages;
        //
        //        if(page === total_pages) {
        //            page = 0;
        //        }
        //    }, 3000);
        //}
        //
        //function loadData(page) {
        //    Project.get({page: page}, function (projects) {
        //        $scope.projects = projects.data;
        //        $scope.total_pages = projects.total_pages;
        //    })
        //        .$promise.then(function () {
        //            $ionicLoading.hide();
        //        });
        //}
    })

    .controller('HuihuoCtrl', function ($scope, $stateParams, Huihuo, Project, $ionicLoading) {

        $scope.reload = function () {
            $ionicLoading.show({
                template: '正在载入...'
            });
            Project.get({id: $stateParams.projectId}).$promise.then(function (project) {
                $ionicLoading.hide();
                $scope.project = project;
            });

            Huihuo.query({projectId: $stateParams.projectId}, function (huihuos) {
                $scope.huihuos = huihuos;

            }).$promise.then(function () {
                    $ionicLoading.hide();
                });
        };

        $scope.reload();
    })

    .controller('HomeCtrl', function ($scope, Project, User, $ionicLoading) {
        $scope.reload = function () {
            $ionicLoading.show({
                template: '正在载入...'
            });
            Posts.query(function (posts) {
                $scope.posts = posts;
            })
                .$promise.then(function () {
                    $ionicLoading.hide();
                });
        };

        $scope.reload();
    })
