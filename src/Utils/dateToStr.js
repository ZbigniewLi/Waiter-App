

const dateToStr = function(dateObj){
    return dateObj.toISOString().slice(0, 10);
  };

  export default dateToStr;