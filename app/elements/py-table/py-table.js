(function () {
  'use strict';
  Polymer({
    created: function() {
      this.tableContent = [
      {
        id: 1,
        title: 'this is the title',
        subject: 'this is a subject',
        descritiopn: 'this is a description'
      },
      {
        id: 2,
        title: 'this is the title 2',
        subject: 'this is a subject 2',
        descritiopn: 'this is a description 2'
      },
      {
        id: 3,
        title: 'this is the title 3',
        subject: 'this is a subject 3',
        descritiopn: 'this is a description 3'
      }]; // Initialize and hint type to an object.

      this.headers = this.getHeaders();
    },

    getHeaders : function() {
      var headers = [];
      if(this.tableContent.length > 0) {
        headers = Object.getOwnPropertyNames(this.tableContent[0]);
      }
      return headers;
    }
  });
})();