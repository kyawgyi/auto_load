
**Auto Loader Jquery Plugin**

   If you need auto ajax load function when scrolling end, this plugin can help you to achieve it.

Default Settings
```
        scrollContainer: $(document), //optional
        loader : null,                //optional
        bottomOffset : 100,           //optional
        autoScrollPx : 200,           //optional
        autoScrollSpeed: 1000,        //optional
        ajax : {
            url : null,                  //require
            method : "GET",             //optional
            data : null,                 //optional
            dataType : "html",          //optional
            onSuccess : null,            //require
        },
        responsive : null,            //optional
```
Example 1 :
Let say we are working on Product listing. We will have container for product list.
we can use auto load on that container as follow.
```
$(".data_container").autoload({
   ajax : {
            url : "put your link to call ajax data",
            onSuccess : function(response){
             $(".data_container").append(response);
            }
        },
  });
  //when doing ajax call, page number will added by plugin.
  //page number will also increase after each call
  //plugin assume page 1 data is already load and will start with page 2 on first ajax call.

  ```
  To use loading spinner 
  ```
$(".data_container").autoload({
    loader :  $(".loader"),  //put loader element here, plugin will handle for show / hide action.
    ajax : {
            url : "put your link to call ajax data",
            onSuccess : function(response){
             $(".data_container").append(response);
            }
        },
  });
  ```
  It will auto load next page data when we reach scroll end. but it is not real end point. 
  Default setting for offset point from bottom is 100. We can set our own number.
  This mean that data loading will happen when we reach the 100px above the scroll end point.
   ```
$(".data_container").autoload({
    loader :  $(".loader"),  //put loader element here, plugin will handle for show / hide action.
    bottomOffset : 200,      //no need to add px
    ajax : {
            url : "put your link to call ajax data",
            onSuccess : function(response){
             $(".data_container").append(response);
            }
        },
  });
  ```
  When you test plugin, you can see scrolling animation when data loading is complete.
  You may need to customize scrolling length depend on your project.
   ```
$(".data_container").autoload({
    loader :  $(".loader"),  //put loader element here, plugin will handle for show / hide action.
    autoScrollPx : 500,      //when loading finish, scroll up to 500px
    autoScrollSpeed : 500,   //can adjust the scrolling speed. (milisecond)
    ajax : {
            url : "put your link to call ajax data",
            onSuccess : function(response){
             $(".data_container").append(response);
            }
        },
  });
  ```
  
  Sometime you many need to set button offset and scrolling length separately for different device.
  example :  100 for pc and 200 for mobile
  plugin can support for responsive breakpoint to set

```
$(".data_container").autoload({
    loader :  $(".loader"),  //put loader element here, plugin will handle for show / hide action.
    bottomOffset : 200,      //no need to add px
    responsive : [
      {
        breakpoint : 768,   //setting will effect when device width <= 768px
        bottomOffset : 100, //(optional)if need to overwrite the bottomOffset value on this screen size
        autoScrollPx : 500, //(optional)if need to overwrite the autoScrollPx value on this screen size
        ajax_url : "put your link",//(optional)if need to overwrite the ajax url value on this screen size
        ajax_data : {pagesize: 5}, //(optional)if need to overwrite the ajax url value on this screen size
		  }
    ]
    ajax : {
            url : "put your link to call ajax data",
            onSuccess : function(response){
             $(".data_container").append(response);
            }
        },
  });
```

  *ScrollingContainer*

  In most case, Scrollingcontainer will be document itself because we want to load data on document scrolling event.Sometime, you may want to use a DIV tag as an scrollingcontainer to control its content.
  
  
  