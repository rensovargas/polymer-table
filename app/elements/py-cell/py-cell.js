(function () {
  'use strict';
  Polymer({
    
    created: function() {
      //this.columns = this.getColumns();
    },
    
    // TODO: Extract method to a helper
    getAlphaIndex: function(index){
        
        var columnBase = 26;
        var digitMax = 7; // ceil(log26(Int32.Max))
        var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        if (index <= 0){
          throw new Error('index must be a positive number');
        }

        if (index <= columnBase){
          return digits[index - 1].toString();
        }

        var sb = [];
        var current = index;
        var offset = digitMax;
        while (current > 0){
            sb[--offset] = digits[--current % columnBase];
            current = parseInt(current / columnBase);
        }
        return sb.join('');
    }
});
})();
