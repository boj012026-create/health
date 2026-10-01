export default function Table({data, refresh}) {
  const headers = Object.keys(data[0]);
  return (
    <table>
      <tr>
      {headers.map( column => (
        <th>{column}</th>
      ))}
      </tr>
    {data.map( row => (
      <tr>
        {headers.map( key => (
          <td>{row[key]}</td>
        ))}
      </tr>
    ))}
    </table>
  )
}
