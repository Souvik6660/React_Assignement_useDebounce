import React, { useState } from "react";
import Search from "./components/Search";
import UserList from "./components/UserList";
import SingleUser from "./components/SingleUser";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <h1 style={{ color: "yellow", textAlign: "center" }}>
        GitHub User Avatar Finder Web App
      </h1>
      <Search update={setSearch} />
      {search.length==0 ? <UserList /> : <SingleUser username={search} />}
    </>
  );
}

export default App;
