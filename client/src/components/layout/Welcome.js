import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../../App';


const Welcome = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="map" element={<MapArea />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Welcome;
