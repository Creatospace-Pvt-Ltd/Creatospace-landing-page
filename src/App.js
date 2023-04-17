
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import FooterData from "./Components/PrivacyPolicyData";
import Home from "./Components/Home";
import TermsConditions from "./Components/TermsConditions";
import RefundCancellationPolicy from "./Components/RefundCancellationPolicy";
import Support from "./Components/Support/Support";


function App() {
  return (
    <>

      <Routes>
        <Route>

          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/privacy-policy" element={<FooterData />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy/>} /> 
          <Route path="/support" element={<Support/>} /> 
        </Route>
      </Routes>
    
    </>
  );
}


export default App;

