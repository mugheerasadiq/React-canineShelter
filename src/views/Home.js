import React from "react";
import { Layout, Breadcrumb, Card, Col, Row, Divider } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const { Content } = Layout;

const Dogs = [
  {
    key: 0,
    name: "Bella",
    price: "$15",
    breed: "German Shepherd",
    owner: "Ahmed",
    img: "images/mydog.jpg",
  },
  {
    key: 1,
    name: "Luna",
    price: "$15",
    breed: "Bulldog ",
    owner: "Ahmed",
    img: "images/mydog.jpg",
  },
  {
    key: 2,
    name: "Bailey",
    price: "$15",
    breed: "ABC",
    owner: "Ahmed",
    img: "images/mydog.jpg",
  },
  {
    key: 3,
    name: "Daisy",
    price: "$15",
    breed: "ABC",
    owner: "Ahmed",
    img: "images/mydog.jpg",
  },
  {
    key: 4,
    name: "ABC",
    price: "$15",
    breed: "ABC",
    owner: "Ahmed",
    img: "images/mydog.jpg",
  },
  {
    key: 5,
    name: "ABC",
    price: "$15",
    breed: "ABC",
    owner: "Ahmed",
    img: "images/mydog.jpg",
  },
];

const DogCards = () => {
  return Dogs.map((dog) => (
    <Col span={8} key={dog.key}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={dog.name} src={dog.img} />}
        style={{ marginTop: 10 }}
      >
        <h3>{dog.name}</h3>

        <h3>{dog.breed}</h3>
        <Divider />
        <div className="dog_card_footer">
          <HeartOutlined />
          {dog.price}
        </div>
      </Card>
    </Col>
  ));
};

const Home = () => {
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dogs</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 15,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <DogCards />
          </Row>
        </div>
        ,
      </Content>
    </Layout>
  );
};

export default Home;
