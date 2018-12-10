import React from "react";
import Code from "react-code-prettify";
import JSONPretty from "react-json-pretty";
// import request from './request.css';
const Request = ({
  name,
  method,
  methodFn,
  methodFn2,
  url,
  data,
  isLoading,
  error
}) => {
  // const loadingClass = isLoading ? 'label-primary' : 'label-default';
  return (
    <div
      style={{
        margin: "20px",
        border: "1px solid #d4d5ec",
        paddingBottom: "4px"
      }}
      className="col-sm-9"
    >
      <div
        style={{ margin: "20px", border: "1px solid #d8d5d5", padding: "7px" }}
      >
        <div>
          HOC: <span className="title">{name}</span>
        </div>
        <div>&nbsp;</div>
        <div>Method: {method}</div>
        <span>&nbsp;</span>

        <div>
          URL : <span style={{ color: "blue" }}>{url}</span>
        </div>
      </div>
      <span className="label label-primary">
        {isLoading ? "Loading..." : ""}
      </span>
      <div style={{ margin: "20px", paddingBottom: "4px" }} className="row">
        <div className="col-xs-4 col-sm-6">
          Code:
          <Code codeString={methodFn} language="javascript">
            {methodFn}
          </Code>
          <div className="col-xs-8 col-sm-6">
            <br /> Result: <JSONPretty id="json-pretty" codeString={data} />
            <pre
              className="force-wrap"
              style={{ whitespace: "normal", wordBreak: "break-all" }}
            >
              <Code
                codeString={data ? JSON.stringify(data) : data}
                language="json"
              />
            </pre>
          </div>
          <div className="error">
            Error{" "}
            <span className="errorData">
              {error ? JSON.stringify(error) : "no error"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
