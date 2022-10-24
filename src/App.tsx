import {
  PlasmicComponent,
  ComponentRenderData,
  PlasmicCanvasHost
} from '@plasmicapp/loader-react';
import { PLASMIC } from './plasmic-init';

import { 
  BrowserRouter, Route, Routes
} from 'react-router-dom';

import { useEffect, useState, } from 'react';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Your other routes... */}
        <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
      </Routes>
    </BrowserRouter>
  );
}

export function CatchAllPage() {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState<ComponentRenderData | null>(null);

  useEffect(() => {
    async function load() {
      // eslint-disable-next-line no-restricted-globals
      const pageData = await PLASMIC.maybeFetchComponentData(location.pathname);
      setPageData(pageData);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!pageData) {
    return <div>Not found</div>;
  }
  // The page will already be cached from the `load` call above.
  // eslint-disable-next-line no-restricted-globals
  return <PlasmicComponent component={location.pathname} />;
}
export default App;
