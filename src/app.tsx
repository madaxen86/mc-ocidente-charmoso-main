import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { CtaSection } from "~/components/cta";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { LoadingScreen } from "~/components/views/loading";
import "~/styles/app.css";

import "@fontsource/spectral/200.css";
import "@fontsource/spectral/300.css";
import "@fontsource/spectral";
import "@fontsource/spectral/500.css";
import "@fontsource/spectral/600.css";
import "@fontsource/spectral/700.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";

import "@phosphor-icons/web/regular/style.css";
import { DefaultSeo } from "~/components/seo";

function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Suspense fallback={<LoadingScreen />}>
            {/* <DefaultSeo /> */}

            <Header mode="solid" />

            {props.children}

            <CtaSection />
            <Footer />
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

export default App;
