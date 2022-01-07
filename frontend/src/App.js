import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  return (
    <div>
      <MyMessage />
    </div>
  );
}

export default App;

function MyMessage() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (message == "") {
      alert("message can not be empty");
      return;
    }

    const url = "http://localhost:4000/add-user";
    const data = {
      message: message,
    };

    await axios.post(url, data);
    const newList = [data, ...list];
    setList(newList);
    setMessage("");
  };

  const textFloat = (index, value) => {
    if (index % 2 == 0) {
      return (
        <div className="alert alert-success text-end">{value.message}</div>
      );
    } else {
      return (
        <div className="alert alert-success text-start">{value.message}</div>
      );
    }
  };

  const Appname = "ExamApp  ";
  const Appmaker = " Dnyanesh Kale_038_KH";

  return (
    <div>
      <div id="header" className="bg-success text-light">
        <div>
          <span className="fs-1">{Appname}</span>
          <span>by {Appmaker}</span>
        </div>
      </div>

      <div id="input area" className="row">
        <div className="col-8">
          <input
            className="form=control form-control-lg w-100 p-3 m-0"
            type="text"
            name=""
            id=""
            value={message}
            onChange={handleMessage}
            placeholder="Lets chat here"
          />
        </div>
        <div className="col-4">
          <input
            className="btn btn-primary btn-lg w-100 p-3 m-0"
            type="button"
            value="send"
            onClick={sendMessage}
          />
        </div>
      </div>

      <div>
        {list.map((value, index) => (
          <div key="index">
            {textFloat(index, value)}
            <textFloat />
          </div>
        ))}
      </div>
    </div>
  );
}
