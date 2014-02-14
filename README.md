# User Sign Up Form Hash

A HTML5 form that is parsed by a jQuery plugin and a hash of the input values is returned. 

View a live demo at http://formdemo.karimhmaissi.com/

##jQuery plugin FormToHash

Called on a root form element. Returns a JavaScript object with the input name attribute as a key and the input value as a value.

```javascript
$("#signup-form").formToHash();
```

##Notes

1. As IE6 and IE7 does not support box-sizing: border-box the width of form fields may exceed the container column used for responsiveness. Before production this would need to be addressed.

2. By using a link instead of the form submit button as per the brief all HTML5 validation on the form is broken. Such as required and input type=email. HTML5 requires an input type="submit" in order to process validation attributes on fields. 

3. In order to gracefully fall back to browsers not using JS the original submit button is shown and allows the user to submit via a http post request to a server. In cases where JS is enabled the submit button is hidden and a link is used.

4. The resulting hash of the form is shown below the form on submit by JSON.stringify(). The case whereby the hash would be sent to server is commented out in the JS.

5. When the jQuery plugin is called it returns the resulting hash instead of the jQuery object called on. This is considered bad practice and given more time I would allow the user to specify where to send the hash, such as to the text of a DOM element or to a remote server. 

6. The password is entered into the hash as a raw text value. In production this would be need to be encrypted. Also sending the raw password via post would need to be sent using SSL. Another option is to allow the server to create a default password for a new user and then allow them to change it. 

##Tested on
1. IPhone - Chrome, Safari
2. Android - Firefox Chrome
3. Windows - Firefox, Chrome, IE11



