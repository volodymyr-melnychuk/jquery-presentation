			(function($){
				$.fn.Highlight = function(options){
				
					// Default options
					var defaults = {
						'color':'red',
						'text-decoration':'underline'
					};
					
					// Merges two objects, the second one has bigger priority
					var settings = $.extend(defaults, options);

					// Applying settings for each element in collection
					// And returning object to save chainability
					return this.each(function(index, elem){
						$.each(settings, function(key, value){
							$(elem).css(key, value);
						});
					});
				};
			})
			(jQuery);
			
			
			