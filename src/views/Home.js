import React, { useEffect, useState } from "react";
import { Layout, Breadcrumb, Card, Col, Row, Divider, Pagination } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FullPageLoader from "../components/loader";

//services
import { getDog } from "../services/dog.services";

const { Content } = Layout;

// const Dogs = [
//   {
//     key: 0,
//     name: "Bella",
//     price: "$15",
//     breed: "German Shepherd",
//     owner: "Ahmed",
//     img: "images/mydog.jpg",
//   },
//   {
//     key: 1,
//     name: "Luna",
//     price: "$15",
//     breed: "Bulldog ",
//     owner: "Ahmed",
//     img: "images/mydog.jpg",
//   },
//   {
//     key: 2,
//     name: "Bailey",
//     price: "$15",
//     breed: "ABC",
//     owner: "Ahmed",
//     img: "images/mydog.jpg",
//   },
//   {
//     key: 3,
//     name: "Daisy",
//     price: "$15",
//     breed: "ABC",
//     owner: "Ahmed",
//     img: "images/mydog.jpg",
//   },
//   {
//     key: 4,
//     name: "ABC",
//     price: "$15",
//     breed: "ABC",
//     owner: "Ahmed",
//     img: "images/mydog.jpg",
//   },
//   {
//     key: 5,
//     name: "ABC",
//     price: "$15",
//     breed: "ABC",
//     owner: "Ahmed",
//     img: "images/mydog.jpg",
//   },
// ];

const DogCards = ({ Dogs }) => {
  return Dogs.map((dog) => (
    <Col span={8} key={dog.key}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={dog.name} src={dog.image} />}
        style={{ marginTop: 10 }}
      >
        <h3>{dog.name.toUpperCase()}</h3>

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

const Home = ({ getDog }) => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const getDogServiceHelper = (limit, skip) => {
    return new Promise((resolve, reject) => {
      return getDog(limit, skip, resolve, reject);
    });
  };

  const getDogService = async (limit = 10, skip = 0) => {
    try {
      return await getDogServiceHelper(limit, skip);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    setIsLoading(true);
    let data = await getDogService();
    setDataSource(data);
    setIsLoading(false);
  }, []);

  const PaginationHandler = async (page, pageSize) => {
    let data;
    console.log(page);
    setIsLoading(true);
    try {
      let skip = (page - 1) * 10;
      let limit = page * 10;
      data = await getDogService(limit, skip);
      setCurrentPage(page);
      setDataSource(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  if (isLoading) return <FullPageLoader />;

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
            <DogCards Dogs={dataSource} />
          </Row>
          <Pagination
            current={currentPage}
            onChange={PaginationHandler}
            total={50}
            className="home_pagination"
          />
        </div>
      </Content>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    dogData: state.dog.dogData,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getDog }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
