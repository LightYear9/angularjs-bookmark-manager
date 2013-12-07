appControllers.controller('BookmarkCtrl', ['$scope', '$http', '$location',
	function BookmarkCtrl($scope, $http, $location) {

		$scope.bookmarks = [];
		$scope.tags = [];

		$http.get('mock/bookmarks.json').success(function(data) {
			$scope.bookmarks = data;
		});

		$http.get('mock/tags.json').success(function(data) {
			$scope.tags = data;
		});

		$scope.addBookmark = function(input) {

		}
		
		$scope.deleteBookmark = function(bookmark) {
			if (bookmark === undefined) {
				return ;
			}

			$scope.bookmarks.forEach(function(b, index) {
				if (b.id == bookmark.id) {
					this.splice(index, 1);
					return ;
				}
			}, $scope.bookmarks);
		}

		$scope.clearBookmarkForm = function(input) {
			input.link = "";
			input.tags = "";
		}

		$scope.addTag = function(input) {
			var tag = {"id": "ab6524df000001", "name": input.name, "color": input.color};
			$scope.tags.push(tag);
			input.name = "";
			input.color = "";
		}

		$scope.deleteTag = function(tag) {
			if (tag === undefined) {
				return ;
			}

			$scope.tags.forEach(function(scopeTag, index) {
				if (scopeTag.id == tag.id) {
					this.splice(index, 1);
					return ;
				}
			}, $scope.tags);

			$scope.bookmarks.forEach(function(scopeBookmark, index) {
				scopeBookmark.tags.forEach(function(scopeTag, indexTag) {
					if (scopeTag.id == tag.id) {
						this.splice(indexTag, 1);
						return ;
					}
				}, scopeBookmark.tags)
				
			}, $scope.tags);
		}

		$scope.deleteTagFromBookmark = function(bookmarkId, tag) {
			$scope.bookmarks.forEach(function(b, index) {
				if (b.id == bookmarkId) {
					b.tags.forEach(function(t, indexTag) {
						if (t.id == tag.id) {
							this.splice(indexTag, 1);
						}
					}, b.tags);
				}
			}, $scope.bookmarks);

		}

		$scope.clearTagForm = function(input) {
			input.name = "";
			input.color = "";
		}
	}
]);
