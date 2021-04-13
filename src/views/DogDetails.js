import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, Row, Col, Layout, Breadcrumb, Card } from "antd";
import FullPageLoader from "../components/loader";
//services
import { makeAdoption } from "../services/user.services";

const { Content } = Layout;

const DogDetail = ({ dogData, dogCount, match }) => {
  const [dogDetail, setDogDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const AdoptionRequest = (data) =>
    new Promise((resolve, reject) => {
      return makeAdoption(data, resolve, reject);
    });

  const AdoptionRequestHandler = async () => {
    try {
      setIsLoading(true);
      AdoptionRequest({ petId: dogDetail._id });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    let dog = dogData.filter((dog) => dog._id === match.params.id);
    setDogDetail(...dog);
  }, []);

  if (isLoading) return <FullPageLoader />;

  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        className="site-layout-background"
        style={{
          margin: 0,
          minHeight: 280,
        }}
      >
        <Row justify="space-between">
          <Col span={10}>
            <Card
              cover={<img src={dogDetail.image} alt={dogDetail.name} />}
              style={{ marginTop: 30 }}
            >
              <h1 className="dogDetail_h1">{dogDetail.name?.toUpperCase()}</h1>
              <h3 className="dogDetail_h3">
                <b>Breed: </b>
                {dogDetail.breed}
              </h3>
              <h3 className="dogDetail_h3">
                <b>Color: </b>
                {dogDetail.color}
              </h3>
              <h3 className="dogDetail_h3">
                <b>Age: </b>
                {dogDetail.age}
              </h3>
              <h3 className="dogDetail_h3">
                <b>Gender: </b>
                {dogDetail.gender}
              </h3>
              <h3 className="dogDetail_h3">
                <b>Size: </b>
                {dogDetail.size}
              </h3>
              <h3 className="dogDetail_h3">
                <b>Location: </b>
                {dogDetail.location}
              </h3>
            </Card>
          </Col>
          <Col span={13}>
            <h3 className="dogDetail_about">{dogDetail.about}</h3>
            <h2 style={{ color: "red" }}>
              Are you interested to adopt this pet ?
            </h2>
            <Button>Send message to Owner</Button>
            <Button onClick={AdoptionRequestHandler}>
              Sent an adoption request
            </Button>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    dogData: state.dog.dogData,
    dogCount: state.dog.dogCount,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      makeAdoption,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DogDetail);
