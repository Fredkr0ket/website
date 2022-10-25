import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MonkeyWars from "./pages/MonkeyWars"
import JeffindaHood from "./pages/JeffindaHood"
import NekKletser from "./pages/NekKletser"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  PlasmicComponent,
  ComponentRenderData,
  PlasmicCanvasHost
} from '@plasmicapp/loader-react';
import { PLASMIC } from './plasmic-init';

import { useEffect, useState, } from 'react';


import './App.css';

function App() {
  return (
    <BrowserRouter>
 <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="monkeywars" element={<MonkeyWars />} />
          <Route path="jeffindahood" element={<JeffindaHood />} />
          <Route path="nekkletser" element={<NekKletser />} />
          <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
        </Route>
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
