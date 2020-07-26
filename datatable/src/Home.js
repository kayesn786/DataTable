import React, { useState } from "react";
import Display from "./Display-table";
import { MDBDataTable, MDBInput } from "mdbreact";
import "./App.css";

const Home = () => {
  const [data1, setData] = useState({
    fileData: null,
  });
  const [file1, setFile] = useState({
    fileD: null,
  });


  return (
    <React.Fragment>
      {console.log(data1, file1)}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <h3 class="navbar-brand">Data Table</h3>
        <a
          href="http://localhost:3000/"
          className="collapse navbar-collapse justify-content-end bgcol"
        >
          Logout
        </a>
      </nav>

      <div className="table-div">

        <Display />

      </div>
    </React.Fragment>
  );
};
export default Home;
