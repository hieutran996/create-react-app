import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Autocomplete from "react-google-autocomplete";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    fetch("https://social-eats-nightly.tsunago.asia/api/mobile/v1/global_settings", {
      method: 'get',
    }).then(function(response) {
      console.log(response)
      return response.json();
    }).then(function(data) {
      console.log('Created Gist:', data);
    }).catch((error) => {
      console.log(error)
    });
  }, []);
  
  return (
    <main>
      <h1>Create React App + Go API</h1>
      <Autocomplete
        apiKey="AIzaSyDClj11evZtd_p8FWLjY3jtXDlTu-54IxE"
          onPlaceSelected={(place) => console.log(place)}
      />
      <h2>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/main/examples/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        was bootstrapped with{' '}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{' '}
        and contains three directories, <code>/public</code> for static assets,{' '}
        <code>/src</code> for components and content, and <code>/api</code>{' '}
        which contains a serverless <a href="https://golang.org/">Go</a>{' '}
        function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Go
        </a>
        .
      </p>
      <br />
      <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
