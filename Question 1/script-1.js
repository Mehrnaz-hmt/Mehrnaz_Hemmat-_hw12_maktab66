function myFunction(e) {
   e.preventDefault();
   const forElement = e.target;
   const values = {};
    for (input of forElement) {
        if(input.name) {
            values[input.name]
        }
        console.log(values)
    }

  }