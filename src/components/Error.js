import React from "react";

const Error = () => (
  <section className="error">
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
    <h1>418 - I'm a teapot</h1>
    <p>The requested entity body is short and stout.</p>
    <p>Tip me over and pour me out.</p>
    <br></br>
    <p>
      we're open source{" "}
      <a href="https://github.com/asucis/">https://github.com/asucis/</a>
    </p>
  </section>
);

export default Error;
