(function () {
  'use strict';
  Polymer({
    data : [
      {
        id: 1,
        title: 'this is the title',
        subject: 'this is a subject',
        description: 'this is a description'
      },
      {
        id: 2,
        title: 'this is the title 2',
        subject: 'this is a subject 2',
        description: 'this is a description 2'
      },
      {
        id: 3,
        title: 'this is the title 3',
        subject: 'this is a subject 3',
        description: 'this is a description 3'
      }],
    created: function() {
      this.columns = this.getColumns();
      
    },

    getColumns : function() {
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
    }
  });
})();