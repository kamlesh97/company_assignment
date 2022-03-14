import React, { useState } from "react";
import { connect } from "react-redux";
import { addDatas, removeData } from "../redux/reducer";
import { IoIosAddCircleOutline } from "react-icons/io";

const mapStateToProps = (state) => {
  return {
    datas: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addData: (obj) => dispatch(addDatas(obj)),
    removeData: (id) => dispatch(removeData(id)),
  };
};
const Company = (props) => {
  const [data, setData] = useState({
    name: "",
    company: "",
    status: "",
    note: "",
  });
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const toggle = () => setModal(!modal);

  const handle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div >
      <div className="main">
        <h1>Team Members</h1>
        <button onClick={toggle}>add members <IoIosAddCircleOutline style={{height:'14px', fontSize:'bold'}} /></button>
      </div>
      {modal ? (
        <div className="modalContainer">
          <div className="modal">
             <div className="header">
             <button onClick={toggle}>X</button>
            </div> 
            <div className="body">
              <input
                type="text"
                placeholder="name"
                name="name"
                onChange={handle}
              />
              <br />
              {data.name === "" && error? <>enter name</> : null}
              <br />
              <input
                type="text"
                placeholder="company"
                name="company"
                onChange={handle}
              />
              <br />
              {data.company === "" && error? <>enter company</> : null}
              <br />
              <input
                type="text"
                placeholder="status"
                name="status"
                onChange={handle}
              />
              <br />
              {data.status === "" && error? <>enter status</> : null}
              <br />
              <input
                type="text"
                placeholder="note"
                name="note"
                onChange={handle}
              />
              <br />
              {data.note === "" && error? <>enter note</> : null}
              <br />
            </div>
            <div className="footer">
            <button onClick={toggle}>cancel</button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (data.name && data.company && data.note && data.status) {
                    props.addData({
                      id: Math.floor(Math.random() * 1000),
                      item: data,
                    });
                    toggle();
                  }
                  else{
                      setError(true)
                  }
                  setData({
                    name: "",
                    company: "",
                    status: "",
                    note: "",
                  });
                }}
              >
                save
              </button>

              
            </div>
          </div>
        </div>
      ) : null}

      <br />
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
