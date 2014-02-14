var main = {
	init: function() {
		this.removeSubmitFallback();
		this.addSubmitEvent();
	},

	// hide normal submit button and show submit link as per spec.
	// note will break all HTML5 validation. 
	removeSubmitFallback: function() {
		var $submitBtn = $(".signup-form #signup-form-submit"),
			$submitLink = $(".signup-form #signup-form-link");

		$submitBtn.hide("fast");
		$submitLink.show("fast");
	},

	addSubmitEvent: function() {

		var $submitFormLink = $("#signup-form-link"),
			$signUpForm = $("#signup-form"),
			$hashResult = $("#hash-result");
		

		$submitFormLink.on("click", function(e) {
            e.preventDefault();

            // shows hash in view
            var hash = $signUpForm .formToHash();
            $hashResult.text(JSON.stringify(hash, undefined, 6));
            
            // submit form to server
            // $signUpForm.submit();

        });
	}
};



