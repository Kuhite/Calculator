
      number = (id, x) => {
        id.value = id.value + x;
      };
      calculate = (id) => {
         var c = id.value;
         var d = math.evaluate(c);
         id.value = d;
        
      };

      clean = (id) => {
        id.value ="";
      };

      backspace = id => {
        var l = id.value.length;
        id.value = id.value.slice(0,l-1);

      };

      

      result = async(id,event) => {
       var y = await event.which || event.keycode;
       if(y == 13){
         
         calculate(id);
       }
       if(y == 187 && event.key === '='){
         
          await calculate(id);
          await event.preventDefault();
           
       }

      };
      
   