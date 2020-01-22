$.fn.autoload = function(options) {
	var target = $(this);
	var loadStatus = false;
	var previous_maxScroll = 0;
    var previous_scroll = 99999999;
	var settings = $.extend({
        scrollContainer: $(document),
        loader : null,    
        bottomOffset : 100,
        autoScrollPx : 200,
        ajax : {
        	url : null,
        	method :"GET",
        	data : null,
        	dataType : "html",
        	onSuccess : null,
        },
        responsive : null,
    }, options );

    var deviceWidth = screen.width;
    if(settings.responsive){
    	settings.responsive.map(function(r_set){
    		
    		if(r_set.breakpoint >= deviceWidth){
    			settings.bottomOffset = r_set.bottomOffset;
    			settings.autoScrollPx = r_set.autoScrollPx;
    		}
    	});
    }
   

    settings.scrollContainer.scroll(function(){
    	var height = $(this).height();
    	var scrollPos = $(this).scrollTop();
    	var maxScroll = 0;

    	if(settings.scrollContainer[0] == $(document)[0]){
    		maxScroll = $(document).height() - $(window).height();
    	}else{
    		maxScroll = settings.scrollContainer.prop("scrollHeight");
    	}    	
    	
    	if(scrollPos > maxScroll - settings.bottomOffset && previous_scroll < scrollPos)
    	{
    		
    		if( previous_maxScroll != maxScroll && !loadStatus){    			
    			__autoload_ajax_call();    			
    			previous_maxScroll = maxScroll;
    			if(settings.loader)
    			settings.loader.show();
    			loadStatus = true;
    		}
    	} 
        previous_scroll = scrollPos;  	
    });

    function __autoload_ajax_call(){
    	$.ajax({
		  method: settings.ajax.method,
		  url: settings.ajax.url,
		  data: settings.ajax.data,
		  dataType : settings.ajax.dataType,
		})
		  .done(function( response ) {		  	
		    	settings.ajax.onSuccess(response);
		    	var currentPos = settings.scrollContainer.scrollTop();
		    	if(settings.scrollContainer[0] == $(document)[0]){
		    		$("html, body").animate({ scrollTop: currentPos + settings.autoScrollPx },function(){ loadStatus = false; });
		    	}else{
		    		settings.scrollContainer.animate({ scrollTop: currentPos + settings.autoScrollPx },function(){ loadStatus = false; });
		    	} 	
		    	if(settings.loader)
    			settings.loader.hide();	    	
		  });
    }
 
};