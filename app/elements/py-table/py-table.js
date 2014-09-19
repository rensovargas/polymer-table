(function () {
  'use strict';
  Polymer({
    created: function() {
      this.tableContent = []; // Initialize and hint type to an object.
      this.configuration = {
        rootNode: 'response',
        columNames: ['Custom Id Title', 'Custom Title', 'Custom Subject', 'Custom Description']
      };
    },

    getHeaders: function() {
      var headers = [];
      if(this.tableContent.length > 0) {
        headers = Object.getOwnPropertyNames(this.tableContent[0]);
      }
      return headers;
    },
    
    ajaxResponse: function(event, data) {
      this.tableContent = data[this.configuration.rootNode];
      if(this.configuration.columNames) {
        this.headers = this.configuration.columNames;
      } else {
        this.headers = this.getHeaders();
      }
    }
  });
})();