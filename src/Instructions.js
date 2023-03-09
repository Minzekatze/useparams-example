import React from "react";

export default () => {
  return (
    <div className="Instructions">
      <div className="block">
        For this exercise, you will have to:
        <ol>
          <li>
            The BrowserRouter is already imported for you in <b>index.js</b>,
            take a moment and have a look on it.
          </li>
          <li>
            Create a component named {"<Student>"} that will display{" "}
            <b>Hello [id from the parameter]!</b> and add it to the {"<App>"}{" "}
            component. (Don't forget to import this new component in your App.js
            file)
          </li>
          <li>
            Create a second component named {"<Results>"} that will display{" "}
            <b>No results for [name from the parameter]!</b> and add it to the{" "}
            {"<App>"} component. (Don't forget to import this new component in
            your App.js file)
          </li>
          <li>
            The navigation is already created for you, take a moment and have a
            look on it.
          </li>
          <li>
            Now, create a {"<Routes>"} component with two routes in it for each
            component (Student & Results).
          </li>
        </ol>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactrouter.com/docs/en/v6/getting-started/overview#reading-url-parameters"
        >
          Help{" "}
        </a>
      </div>
    </div>
  );
};
