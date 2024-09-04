// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://js.api.here.com/v3/3.1/mapsjs-ui.css" />

        <script
          src={`https://js.api.here.com/v3/3.1/mapsjs-core.js`}
          type="text/javascript"
          
          defer
        />
        <script
          src={`https://js.api.here.com/v3/3.1/mapsjs-service.js`}
          type="text/javascript"
          
          defer
        />
        <script
          src={`https://js.api.here.com/v3/3.1/mapsjs-ui.js`}
          type="text/javascript"
          
          defer
        />
        <script
          src={`https://js.api.here.com/v3/3.1/mapsjs-mapevents.js`}
          type="text/javascript"
          
          defer
        />
        <script  
          src="https://js.api.here.com/v3/3.1/mapsjs-harp.js"
          type="text/javascript"
          
          defer
          >
          </script>
          <script  
          src="https://js.api.here.com/v3/3.1/mapsjs-clustering.js"
          type="text/javascript"
          
          defer
          >
          </script>

          

      </Head>
      <body>
        <div id="root">
          <div data-theme="hds-web-product-light-theme" data-styles="hds">
            <Main />
            <NextScript />
          </div>
        </div>

      </body>
    </Html>
  );
}
