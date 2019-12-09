import React from "react";

const Error = () => (
  <section className="error">
    <h1>418 - I'm a teapot</h1>
    <hr></hr>
    <p>The requested entity body is short and stout.</p>
    <p>Tip me over and pour me out.</p>
    <br></br>
    <p>
      we're open source{" "}
      <a href="https://github.com/asucis/">https://github.com/asucis/</a>
    </p>
    <pre>
      {` 
 █████╗ ███████╗██╗   ██╗ ██████╗██╗███████╗
██╔══██╗██╔════╝██║   ██║██╔════╝██║██╔════╝
███████║███████╗██║   ██║██║     ██║███████╗
██╔══██║╚════██║██║   ██║██║     ██║╚════██║
██║  ██║███████║╚██████╔╝╚██████╗██║███████║
╚═╝  ╚═╝╚══════╝ ╚═════╝  ╚═════╝╚═╝╚══════╝
        `}
    </pre>
  </section>
);

export default Error;
