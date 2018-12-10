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
    <div className="col-sm-9">
      <span className="title">{name}</span>
      <span>&nbsp;</span>
      <span>Method {method}</span>
      <span>&nbsp;</span>

      <Code codeString={methodFn} language="javascript">
        {methodFn}
      </Code>

      <span>&nbsp;</span>
      <span>URL : {url}</span>
      <span className="label label-primary">
        {isLoading ? "Loading..." : ""}
      </span>
      <div className="row">
        <div className="col-xs-8 col-sm-6">
          Result <JSONPretty id="json-pretty" codeString={data} />
          <pre style={{ whitespace: "normal", wordBreak: "break-all" }}>
            <Code
              codeString={data ? JSON.stringify(data) : data}
              language="json"
            />
          </pre>
        </div>
        <div className="col-xs-4 col-sm-6">
          <pre className="error">
            Error{" "}
            <pre className="errorData">
              {error ? JSON.stringify(error) : "no error"}
            </pre>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Request;
