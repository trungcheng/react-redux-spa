import React from 'react';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>The app is now using Redux</h1>
        <p>
          While the <a href="#">React-Redux-SPA</a> for
          this guide covers an explanation of <strong>Redux</strong>, there
          are still many implementation details in this code that the article
          doesn't cover. For a better understanding of those details, see
          the <a href="https://github.com/trungcheng/react-redux-spa">Github documentation</a> for
          this guide.
        </p>
      </div>
    );
  }
});

export default Home;
