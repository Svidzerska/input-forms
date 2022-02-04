
function BackgroundChange () {
   let date = new Date();
   let month = date.getMonth();
   console.log(month);
   let background; 
   switch(month) {
      case 11:
      case 0:
      case 1:
        return background = "blue";

      case 8:
      case 9:
      case 10:
        return background = "yellow";

      case 5:
      case 6:
      case 7:
         return background = "orange";

      case 2:
      case 3:
      case 4:
         return background = "green";
   }
}

export default BackgroundChange;