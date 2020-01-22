**Auto Loader Jquery Plugin**

   If you need auto ajax load function when scrolling end, this plugin can help you to achieve it.

Settings

$(&quot;.data\_container&quot;).autoload({

        scrollContainer: $(document), //optional

        loader : null,                //optional

        bottomOffset : 100,           //optional

        autoScrollPx : 200,           //optional

        ajax : {

         url : null,                  //require

         method :&amp;quot;GET&amp;quot;,     //optional

         data : null,                 //optional

         dataType : &amp;quot;html&amp;quot;, //optional

         onSuccess : null,            //require

        },

        responsive : null,            //optional

});

Example 1 :

$(&quot;.data\_container&quot;).autoload({

   ajax : {

            url : &quot;put your link to call ajax data&quot;,

            onSuccess : function(){

             $(&quot;.data\_container&quot;).append(response);

            }

           },

  });