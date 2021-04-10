import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FullPageLoader from "../components/loader";
import { Layout, Card, Col, Divider, Row } from "antd";

import { HeartOutlined } from "@ant-design/icons";
//services
import { getFavourites } from "../services/user.services";

const { Content } = Layout;

const Favourite = ({ getFavourites, userFavourites }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const getFavouritesHelper = () =>
    new Promise((resolve, reject) => {
      getFavourites(resolve, reject);
    });

  const getFavouritesService = async () => {
    setIsLoading(true);
    try {
      await getFavouritesHelper();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(async () => {
    let favr = await getFavouritesService();
    console.log(favr);
    setFavourites(userFavourites);
  }, []);

  if (isLoading) return <FullPageLoader />;

  const Cards = () => {
    return favourites.map((dog, i) => (
      <Col span={8} key={i}>
        {/* <Link to={`/pets/${dog._id}`}> */}
        <Card
          hoverable
          style={{ width: 300 }}
          cover={<img alt={dog.name} src={dog.image} style={{ height: 250 }} />}
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
        {/* </Link> */}
      </Col>
    ));
  };

  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        className="site-layout-background"
        style={{
          marginTop: 20,
          minHeight: 280,
        }}
      >
        <Row gutter={15}>
          <Cards />
        </Row>
      </Content>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  userFavourites: state.user.userFavourites,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getFavourites,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
