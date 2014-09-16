(function () {
  'use strict';
  Polymer({
    created: function() {
      this.tableContent = []; // Initialize and hint type to an object.
    },

    getHeaders: function() {
      var headers = [];
      if(this.tableContent.length > 0) {
        headers = Object.getOwnPropertyNames(this.tableContent[0]);
      }
      return headers;
    },
    
    ajaxResponse: function(event, data) {
      this.tableContent = data.response;
      this.headers = this.getHeaders();
    }
  });
})();