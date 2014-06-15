var myApp = angular.module('arcarius', ['infinite-scroll']);

myApp.controller('ShipsLogController', function($scope, $window, ShipsLog) {
  $scope.shipslog = new ShipsLog();
  $window.scrollTo(0, 0);
});

myApp.factory('ShipsLog', function($http, $q, $sce) {
  var ShipsLog = function() {
    this.items = [];
    this.busy = false;
    this.index = 3;
  };

  ShipsLog.prototype.fetchLinks = function() {
    defer = $q.defer()
    $http.get("/post-index.json").success(function(data) {
      this.post_links = data.posts
      defer.resolve(this.post_links);
    }).error(function(data, status, headers, config) {
      this.defer.reject('error');
      this.post_links = []
      defer.reject(this.post_links);
    }.bind(this));
    return defer.promise;
  };

  ShipsLog.prototype.nextPost = function() {
    this.fetchLinks().then(function(post_links) {
      if (this.busy) return;
      this.busy = true;

      var url = post_links[this.index].href;
      $http.get(url).success(function(data) {
        this.items.push({
          title: $sce.trustAsHtml(post_links[this.index].title),
          body: $sce.trustAsHtml(data)
        });
        this.index += 1;
        this.busy = false;
      }.bind(this));
    }.bind(this))
  };

  return ShipsLog;
});

