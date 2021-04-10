import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Favourite = () => {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [adoptionRequest, setAdoptionRequest] = useState([]);
  //   // const columns = [
  //   //   {
  //   //     title: "Name",
  //   //     dataIndex: "name",
  //   //     key: "name",
  //   //   },
  //   // ];
  //   const getAdoptionHelper = (data) =>
  //     new Promise((resolve, reject) => {
  //       userSignup(data, resolve, reject);
  //     });
  //   const getAdoption = async (values) => {
  //     try {
  //       await getAdoptionHelper(values);
  //       setTimeout(() => {
  //         setIsLoading(false);
  //         history.push("/");
  //       }, 300);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   useEffect(async () => {
  //     setIsLoading(true);
  //     let adoptions = await getAdoption();
  //     setIsLoading(false);
  //   }, [adoptionRequest]);
  //   if (isLoading) return <FullPageLoader />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // getAdoption,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
