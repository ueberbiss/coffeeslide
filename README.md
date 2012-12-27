![CoffeeSlide Logo][1]

# CoffeeSlide

## Responsive HTML5 Full Page Content Slider (Coffeescript + jQuery)

CoffeeSlide is a full page HTML5 content slider built with CoffeeScript + jQuery; It is fully Responsive thanks to Twitter Bootstrap and it supports both modern browsers & IE thanks to Chrome Frame.

### Usage:

Include jQuery at the top of your page's head, you can use the google's hosted version as in the examples with:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

Then include the **coffe-script.js** file too, as in the example. Now also include the *bootstrap*, *bootstrap-responsive* and one of the *styles* stylesheets, (in fact rename it to only *styles* for convention); Open the **styles.css** file and there you can customize the slider at your heart's content. Basically the file has three comments guiding you about basic things you might want to change: The background's behavior, the height of the transparent overlay where your content reside (which is dynamic by default) and other important styles of that same overlay.

include the **bootstrap.min.js** script down the stylesheets and finally the **viewport meta-tag**

Use the HTML 5 Skeleton of the examples to create your own page... Note that we are including the *coffee* code and the chrome frame **before** closing the *body* tag in the main page. Replace the "destination" attribute of the Chrome Frame Script with the main URL of your site and include the following meta-tag in all other pages of your site (if you have such):

    <meta http-equiv="X-UA-Compatible" content="chrome=1">

You can place any HTML code and/or content in your slides and have as many slides as you want.  

That's all!  

P.S. If you don't want to use bootstrap only for responsiveness, you can safely replace it by any other framework/boilerplate that you want without any problems.

Created by: [@Jmlevick][2]  
License: [Beerware][3]  
Demo: [http://coffeeslide.kawlenet.appspot.com][4]

[![endorse](http://api.coderwall.com/jmlevick/endorsecount.png)](http://coderwall.com/jmlevick)


  [1]: http://commondatastorage.googleapis.com/xenodecdn/coffeeslide-logo.png
  [2]: http://twitter.com/Jmlevick
  [3]: http://en.wikipedia.org/wiki/Beerware
  [4]: http://coffeeslide.kawlenet.appspot.com
