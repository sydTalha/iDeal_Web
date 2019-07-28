import React from 'react';

function App() {
  return (
      <div>
          <nav className="navbar navbar-expand-lg bg-info">
              <div className="container">
                  <a className="navbar-brand" href="#">iDeal</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="navbar-toggler-icon"></span>
                      <span className="navbar-toggler-icon"></span>
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                              <a className="nav-link" href="#">Home </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Features</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Pricing</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link disabled" href="#">Disabled</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>


          <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Library</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
          </nav>


      </div>
  );
}

export default App;
