// Error (404) page
import React from 'react';

const ErrorPage = () => (
  <section className="container" aria-labelledby="error-title">
    <h2 id="error-title">Error</h2>
    <p>This is the Error-page. Will be shown when a page (= controller / method) does not exist.</p>
  </section>
);

export default ErrorPage;
