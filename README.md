# GalleryJs


### HTML code
This is an HTML code for a webpage that creates a gallery of images. The webpage includes a video background that plays automatically and is muted, two divs with the class "head" that contain images and a div with the class "main" that also contains an image. The images in the "head" divs have the onclick event that changes the src of the image in the "main" div to the src of the image that was clicked.

The "content" div, which has the "hiden" class and an id of "cont", is used to display additional information when the main image is clicked. The h1 and p element inside the "content" div are used to display the heading and additional content.

The CSS stylesheet is linked to the HTML document and the JavaScript file is included at the end of the body. The JavaScript file is expected to include the code you provided earlier to attach event listeners to the "main" element and perform actions based on user interactions.

### javaScript code 

This is a JavaScript code that adds click and contextmenu event listeners to an HTML element with the class "main".

When the element is clicked, the code hides all images on the page except for the fifth one and adds a class "cover" to the "main" element. It also changes the background color of the body element to #006 and removes the "hiden" class from an element with the id "cont" and logs the element to the console.

When the "main" element is right clicked, the code removes the "hiden" class from all images except for the fifth one, removes the class "cover" from the "main" element, and changes the background of the body element to a video.




