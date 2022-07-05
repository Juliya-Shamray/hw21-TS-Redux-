import { Route, Routes } from "react-router-dom";
import { HomeFeature, ContactsFeature, ProductFeature } from "../../features";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomeFeature />} />
    <Route path="/contacts" element={<ContactsFeature />} />
    <Route path="/product/:productId" element={<ProductFeature />} />
  </Routes>
);
