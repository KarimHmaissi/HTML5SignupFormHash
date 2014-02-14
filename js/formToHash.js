/**
 *  jQuery plugin serializes form fields and returns a hash. 
 *	Name field is used as a key and value is used as the value.
 */
;(function ($, window, document, undefined) {

	function FormToHash(element) {
		this.element = element;
		this.$element = $(element);
		this.hash = {};

		//begin
		this.run();

		return this.hash;
	}

	FormToHash.prototype = {

		run: function() {
			var self = this, 
				inputFields = self.getElements();

			self.getHashFromElements(inputFields);
		},

		getElements: function() {
			var self = this;
			var inputFields  = this.$element.find(":input");
			return inputFields;
		},

		getHashFromElements: function(inputFields) {
			var self = this;

			if(inputFields) {
				// loops over fields, checks they are not disabled and contain a name attr, then adds to hash
				$.each(inputFields, function() {
					if(this.name && !this.disabled && !($(this).val() === undefined)) {
						self.hash[this.name] = $(this).val();

					}
				});
			}
		}
	}


	$.fn.formToHash = function() {

		return new FormToHash(this);

	}

})(jQuery, window, document, undefined);