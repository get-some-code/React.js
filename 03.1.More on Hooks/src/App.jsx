import { useState, useEffect } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(30);

  useEffect(() => {
    async function githubProfilePictures() {
      const response = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await response.json();
      setUsers(data);
    }

    githubProfilePictures();

  }, [count])   
  // [] -> known as dependency array -> useEffect() runs Only once
  // [count] -> useEffect() runs on first render + every time count changes
  // No array -> useEffect() runs on every render

  // NOTE: useEffect runs based on CHANGES, not based on NUMBERS.


  return (
    <>
      <h1>Github Users</h1>
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)}></input>
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "10px"
      }}>
        {
          users.map(user => (
            <img src={user.avatar_url} height="200px" width="200px" key={user.login} />
          ))
        }
      </div>
    </>
  );



}

export default App;