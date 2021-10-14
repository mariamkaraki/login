import React from "react";



export const Home = () => {

  
    fetch('/api/hello')
        .then(response => response.json());


  return (
    <div>Welcome</div>
  );
};

export default Home;