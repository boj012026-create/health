import {useState} from "react";
import compare from "../tools/compare.js";

export default function Table({data, refresh}) {
  const headers = Object.keys(data[0]);
  const [sortKey, setSortkey] = useState(headers[0]);
  const [reverseSort, setReverseSort] = useState(false)
  /*
   * @e is the column header user clicked to sort by.
   * @headers contains all sortKeys, indexed by coulmn number,
   * which is also the column header id
   */
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
  /*
   * Sorts an @arr based on @sortKey 
   */
  function sort(arr) {
    if (reverseSort) {
      return arr.sort((a, b) => compare(a[sortKey], b[sortKey]));
    } else {
      return arr.sort((b, a) => compare(a[sortKey], b[sortKey]));
    }
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
