import "./App.css";
import { Layout, Breadcrumb } from "antd";
import { HeaderComponent } from "./components/header";
import { SiderComponent } from "./components/sider";
import { Switch } from "react-router";
import PublicRoute from "./components/public_route";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Signup } from "./components/Signup";

const { Content } = Layout;

function Main() {
  return (
    <Layout>
      <HeaderComponent />
      <Layout>
        <SiderComponent />
        {/* <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout> */}
        <Switch>
          <PublicRoute path="/" component={Home} exact />
          <PublicRoute path="/" component={Login} />
          <PublicRoute path="/" component={Signup} />
        </Switch>
      </Layout>
    </Layout>
  );
}

export default Main;
