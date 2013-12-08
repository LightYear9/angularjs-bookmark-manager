appDirectives.directive('displayTag', function() {
	return {
		restrict: 'E',
	    scope: {
	    	tag: '=tag',
	    	bookmarkId: "=bookmarkId",
	    	deleteTag: '&'
	    },
		template: '<span class="label" style="background-color:{{tag.color}};">{{tag.name}} <span class="glyphicon glyphicon-remove" ng-click="deleteTag(bookmarkId, tag)"></span> </span>',
	};

});