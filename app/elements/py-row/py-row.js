(function () {
  'use strict';
  Polymer({
    created: function() {
      this.rowContent = {}; // Initialize and hint type to an object.
    },
    ready: function() {
      this.rowContentAsArray = Object.getOwnPropertyNames(this.rowContent);
    }
  });
})();