**Auto Loader Jquery Plugin**

   If you need auto ajax load function when scrolling end, this plugin can help you to achieve it.

Settings

$(&quot;.data\_container&quot;).autoload({

        scrollContainer: $(document), //optional
        loader : null,
        bottomOffset : 100,
        autoScrollPx : 200,
        ajax : {
         url : null,
         method :&quot;GET&quot;,
         data : null,
         dataType : &quot;html&quot;,
         onSuccess : null,
        },
        responsive : null,
    });