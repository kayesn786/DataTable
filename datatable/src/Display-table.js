import React, { useState } from "react";
import MaterialTable from "material-table";


export default function DataTable() {
  //State to store file information
  const [file1, setFile] = useState({
    fileD: null,
  });

  //State to tore rows and column data of the table
  const [state, setState] = React.useState({
    columns: [
      {
        title: "Name",
        field: "name",
      },
      {
        title: "Position",
        field: "position",
      },
      {
        title: "Office",
        field: "office",
      },
      {
        title: "Age",
        field: "age",
      },
      {
        title: "Date",
        field: "date",
      },
      {
        title: "Salary",
        field: "salary",
      },
    ],
    data: []
  });

  //Loading the file
  const loadFile = (event) => {
    setFile({ fileD: event.target.files[0] });
  }

  //Uploading the file and displaying it
  const uploadFile = (event) => {
    if (file1.fileD) {
      let reader = new FileReader();
      reader.onload = onReaderLoad;
      reader.readAsText(file1.fileD);
    }
    else {
      alert("Please select a file")
    }
  };
  function onReaderLoad(event) {
    var obj = JSON.parse(event.target.result);
    setState({ ...state, data: obj.data });
  }

  //Downloading the file
  const onSave = () => {
    const fileData = JSON.stringify(state);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'data.json';
    link.href = url;
    link.click();

  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="button a1" onClick={uploadFile}>
          Upload
        </button>
        
        <input type="file"  name="file" accept="application/JSON" onChange={loadFile} />
        
      </div>
      {console.log(state.data)}

      {//Table Structure
      }
      <MaterialTable
        title="Employee Details"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}

      />
      <div><br></br>
        <button className="button a2" onClick={onSave}>save</button>
        <button className="button a3" onClick={uploadFile}>View</button></div>
    </div>
  );
}
