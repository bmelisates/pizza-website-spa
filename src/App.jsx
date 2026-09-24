import { useState } from "react";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Success from "./components/Success";
import "./CSS/App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [orderData, setOrderData] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem("lastPizzaOrder")) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    if (!Array.isArray(orderData?.malzemeler)) return;
    try {
      sessionStorage.setItem("lastPizzaOrder", JSON.stringify(orderData));
    } catch {
      // The current order still works if browser storage is unavailable.
    }
  }, [orderData]);

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
          {Array.isArray(orderData?.malzemeler) ? (
            <Success orderData={orderData} />
          ) : (
            <Redirect to="/pizza" />
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
