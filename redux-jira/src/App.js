import "./App.css";
import JiraClient from "jira-connector";
function App() {
  const JiraCall = () => {
    const fetch = require("node-fetch");

    fetch("https://ruivalente.atlassian.net/rest/api/3/issue/hel-5", {
      mode: "no-cors",
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(
          "rui.valente99@gmail.com:uXbobXwH1qPCkFdnov9O97BB"
        ).toString("base64")}`,
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(
          `Response: ${response.status} ${response.statusText} ${response}`
        );
        console.log(response);
        return response.text();
      })
      .then((text) => console.log(text))
      .catch((err) => console.error(err));
  };
  const JiraCall2 = () => {
    console.log("fetching");
    var https = require("follow-redirects").https;
    var fs = require("fs");

    var options = {
      method: "GET",
      hostname: "ruivalente.atlassian.net",
      path: "/rest/api/3/project/",
      headers: {
        Authorization:
          "Basic cnVpLnZhbGVudGU5OUBnbWFpbC5jb206dVhib2JYd0gxcVBDa0Zkbm92OU85N0JC",
        "Content-Type": "application/json",
        Cookie:
          "atlassian.xsrf.token=4fce81a8-c030-47ae-b379-cebcc21e6620_7e3d1e1cda327486f3a9cb62e070ed5414704ded_lin",
      },
      maxRedirects: 20,
    };

    var req = https.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });

      res.on("error", function (error) {
        console.error(error);
      });
      console.log(req.body());
    });
  };
  const JiraCall3 = () => {
    var jira = new JiraClient({
      host: "ruivalente.atlassian.net",
      basic_auth: {
        email: "rui.valente99@gmail.com",
        api_token: "uXbobXwH1qPCkFdnov9O97BB",
      },
    });
    const issue = jira.issue.getIssue({ issueKey: "HEL-5" });
    console.log(issue);
  };
  function JiraCall4 (){
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Basic cnVpLnZhbGVudGU5OUBnbWFpbC5jb206dVhib2JYd0gxcVBDa0Zkbm92OU85N0JC"
    );
    myHeaders.append(
      "Cookie",
      "atlassian.xsrf.token=4fce81a8-c030-47ae-b379-cebcc21e6620_7e3d1e1cda327486f3a9cb62e070ed5414704ded_lin"
    );

    var raw = "";

    var requestOptions = {
      mode: 'no-cors',
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://ruivalente.atlassian.net/rest/api/3/project/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="App">
      <button className="" onClick={JiraCall4}>
        JIRA
      </button>
    </div>
  );
}

export default App;
