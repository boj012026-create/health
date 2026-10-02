import {useState} from "react";

export default function Table({data, refresh}) {
  const headers = Object.keys(data[0]);
  const [sortKey, setSortkey] = useState(headers[0]);
  const [reverseSort, setReverseSort] = useState(false)
  
  function setSort(e) {
    const key = e.target.id;
    console.log(key);
    if(sortKey === headers[key]) {
      setReverseSort((prev) => !prev);
    } else {
      setSortkey(headers[key]);
      setReverseSort(false);
    }
    refresh();
  }

  function sort(arr) {
    if (reverseSort) {
      return arr.sort((a, b) => compare(a[sortKey], b[sortKey]));
    } else {
      return arr.sort((b, a) => compare(a[sortKey], b[sortKey]));
    }
  }

  function compare(a, b) {
    if ( isText()) return a.localeCompare(b);
    else return parseCommaFloat(a) - parseCommaFloat(b);
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
  

  return (
    <table>
      <tr>
      {headers.map( (column, index) => (
        <th><button id={index} onClick={e => setSort(e)}>{column} ⇅</button></th>
      ))}
      </tr>
    
    {sort(data).map( row => (
      <tr>
        {headers.map( key => (
          <td>{row[key]}</td>
        ))}
      </tr>
    ))}
    </table>
  )
}
