(function () {
  'use strict';
  Polymer({
    
    created: function() {
      this.tableContent = []; // Initialize and hint type to an object.
      
    },

    getHeaders: function() {
      var headers = [];
      var columns = {};
      if(this.data.length > 0) {
        headers = Object.keys(this.data[0]);
        for(var i in headers){
          columns[headers[i]] = parseInt(i) + 1;
        }
      }
      
      return columns;
    },
    
    // TODO: Extract method to a helper
    keys: function(object) {
      return Object.keys(object);
    },
    
    index: function(element, array){
      return array.indexOf(element) + 1;
    },
    
    foo: function(array){
      return array.length;
    },
    
    debug: function(object){
      console.log("debug", object);
      return headers;
    },
    
    ajaxResponse: function(event, data) {
      this.tableContent = data.response;
      this.headers = this.getHeaders();
    }
  });
})();