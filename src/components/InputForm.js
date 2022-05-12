import React from "react";

function InputForm() {
  return (
    <div
      style={{
        direction: "flex",
      }}
    >
      <form
        style={{
          backgroundColor: "grey ",
          width: "20%",
          position: "relative",
          borderRadius: "20px",
          position: "center",
          justifyContent: "column",
          padding: "12px 20px",
          direction: "flex",
          display: "grid",
          margin: "auto",
          border: "2px solid blue",
        }}
      >
        <input
          style={{
            margin: "8px 0",
            width: "100%",
            padding: "12px 20px",
            border: "none",
            borderBottom: "2px solid blue",
            boxSizing: "border-box",
          }}
          type="text"
          placeholder="FirstName"
          autoFocus
        ></input>

        <input
          style={{
            margin: "8px 0",
            width: "100%",
            padding: "12px 20px",
            border: "none",
            borderBottom: "2px solid blue",
            boxSizing: "border-box",
          }}
          type="text"
          placeholder="LastName"
          autoFocus
        ></input>
        <input
          style={{
            margin: "8px 0",
            width: "100%",
            padding: "12px 20px",
            border: "none",
            borderBottom: "2px solid blue",
            boxSizing: "border-box",
          }}
          type="text"
          placeholder="BusinessEmail"
          autoFocus
        ></input>

        <input
          style={{
            margin: "8px 0",
            width: "100%",
            padding: "12px 20px",
            border: "none",
            borderBottom: "2px solid blue",
            boxSizing: "border-box",
          }}
          type="text"
          placeholder="BusinessName"
          autoFocus
        ></input>

        <input
          style={{
            margin: "8px 0",
            width: "100%",
            padding: "12px 20px",
            border: "none",
            borderBottom: "2px solid blue",
            boxSizing: "border-box",
          }}
          type="text"
          placeholder="Country"
          autoFocus
        ></input>

        <label
          style={{
            fontSize: "1rem",
            marginBottom: "8px",
            marginTop: "8px",
          }}
        >
          Intrested in
        </label>
        <lable>
          {" "}
          <input
            style={{
              top: "0",
              cursor: "pointer",
              left: "0",
              height: "25px",
              width: "25px",
              backgroundColor: "#eee",
            }}
            type="checkbox"
            checked="checked"
          ></input>
          <span className="checkmark"></span>
          PEP and Sanction Check
        </lable>

        <label>
          <input
            style={{
              top: "0",
              cursor: "pointer",
              left: "0",
              height: "25px",
              width: "25px",
              backgroundColor: "#eee",
            }}
            type="checkbox"
            checked=""
          ></input>
          <span className="checkmark"></span>
          Adverse media checks
        </label>

        <label>
          <input
            style={{
              top: "0",
              cursor: "pointer",
              left: "0",
              height: "25px",
              width: "25px",
              backgroundColor: "#eee",
            }}
            type="checkbox"
            checked=""
          ></input>
          <span className="checkmark"></span>
          ID verification
        </label>

        <button
          onSubmit={(e) => e.preventDefault()}
          className="btn"
          style={{
            fontSize: "1rem",
            padding: "8px 16px",
            cursor: "pointer",
          }}
        >
          submit
        </button>
        <input
          style={{
            margin: "8px 0",
            width: "100%",
            padding: "50px 30px",
            border: "2px solid blue",
            boxSizing: "border-box",
          }}
          type="text"
          placeholder="please type your message here"
          autoFocus
        ></input>
      </form>
    </div>
  );
}

export default InputForm;
