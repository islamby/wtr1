const Table = ({ data }) => {
    return (
      <div>
        {
          JSON.stringify(data) === "{}"
            ? ""
            : <table className="table">
                <tbody>
                  <tr>
                    <td>name</td>
                    <td>{data.name}</td>
                  </tr>
                  <tr>
                    <td>country</td>
                    <td>{data.country}</td>
                  </tr>
                  <tr>
                    <td>temp</td>
                    <td>{data.temp}</td>  
                  </tr>
                  <tr>
                    <td>description</td>
                    <td>{data.weather[0].description}</td>
                  </tr>
                </tbody>
              </table>
        }
      </div>
    );
  }
  
  export default Table;