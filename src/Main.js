import "./App.css";
import { Layout } from "antd";
import { HeaderComponent } from "./components/header";
import { SiderComponent } from "./components/sider";
import { Switch } from "react-router-dom";
import PublicRoute from "./components/public_route";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import PrivateRoute from "./components/private_route";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../src/store/configureStore";
import EmployeeDashboard from "./views/EmployeeDashboard";
import AdoptionDashboard from "./views/AdoptionDashboard";

//Connected Router is used to synchronize redux with router

function Main() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PublicRoute exact strict path="/login" component={Login} />
        <PublicRoute exact strict path="/signup" component={Signup} />
        <Layout>
          <HeaderComponent />
          <Layout>
            <SiderComponent />
            <PublicRoute exact path="/" component={Home} />
            <PrivateRoute
              exact
              path="/dashboard"
              component={EmployeeDashboard}
            />
            <PrivateRoute
              exact
              path="/dashboard/adoption"
              component={AdoptionDashboard}
            />
          </Layout>
        </Layout>
      </Switch>
    </ConnectedRouter>
  );
}

export default Main;
