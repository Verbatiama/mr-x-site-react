import { useState, useEffect } from "react";
import "./App.css";

const query = `
{
  homePageCollection {
    items {
      title
      logo {
        url
      }
    }
  }
}
`;

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/cymgxzee6713/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer AibqpEpN1RVZ97W_YDZZ-Es-3tY9LR73itNkSqhNdYo",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.homePageCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  // render the fetched Contentful data
  return (
    <div className="App">
      <header className="App-header">
        <img src={page.logo.url} className="App-logo" alt="logo" />
        <p>{page.title}</p>
      </header>
    </div>
  );
}

export default App;