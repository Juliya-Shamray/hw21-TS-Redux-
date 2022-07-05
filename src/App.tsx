import { ResetStyles } from "./features/global";

import { FooterFeature, HeaderFeature, PageFeature } from "./features";
import { AppRouter } from "./common/components";

function App() {
  return (
    <div>
      <ResetStyles />
      <PageFeature>
        <HeaderFeature />
        <AppRouter />
        <FooterFeature />
      </PageFeature>
    </div>
  );
}

export default App;
