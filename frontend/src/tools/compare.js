  export default function compare(a, b) {
    if ( isText(a) ) return a.localeCompare(b);
    else return parseCommaFloat(b) - parseCommaFloat(a);
  }
  /*
   * returns false if @a contain numbers 
   */
  function isText(a) {
    return !/\d/.test(a);
  }
  /*
   *Parses a StringNumber with comma to float with period, like "1,5" to 1.5  
   */
  function parseCommaFloat(stringNum) {
    if (typeof(numstring) === "number") return stringNum;
    return parseFloat(stringNum.replace(",", "."));
  }
