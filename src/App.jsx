import { useState } from "react";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Success from "./components/Success";
import "./CSS/App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [orderData, setOrderData] = useState({});

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        {/* Anasayfa Rotası */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* Sipariş Formu Rotası */}
        <Route path="/pizza">
          <OrderForm orderData={orderData} setOrderData={setOrderData} />
        </Route>

        {/* Sipariş Başarılı Rotası */}
        <Route path="/success">
          <Success orderData={orderData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
