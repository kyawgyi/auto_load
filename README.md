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
         method :&quot;GET&quot;,     //optional
         data : null,                 //optional
         dataType : &quot;html&quot;, //optional
         onSuccess : null,            //require
        },
        responsive : null,            //optional

    });