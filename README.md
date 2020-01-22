**Auto Loader Jquery Plugin**

   If you need auto ajax load function when scrolling end, this plugin can help you to achieve it.

Default Settings
```
        scrollContainer: $(document), //optional
        loader : null,                //optional
        bottomOffset : 100,           //optional
        autoScrollPx : 200,           //optional
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
            onSuccess : function(){
             $(".data_container").append(response);
            }
        },
  });
  ```
  To use loading spinner 
  ```
$(".data_container").autoload({
    loader :  $(".loader"),  //put loader element here, plugin will handle for show / hide action.
    ajax : {
            url : "put your link to call ajax data",
            onSuccess : function(){
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
            onSuccess : function(){
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
    ajax : {
            url : "put your link to call ajax data",
            onSuccess : function(){
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
			breakpoint : 768,
			bottomOffset : 100,
			autoScrollPx : 500,
		}
    ]
    ajax : {
            url : "put your link to call ajax data",
            onSuccess : function(){
             $(".data_container").append(response);
            }
        },
  });
  ```
  
  