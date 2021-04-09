import React, { useEffect, useState } from "react";
import { Table, Popconfirm, Layout, Button } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AddDogModal } from "../modals/addDog";
import { UpdateDogModal } from "../modals/updateDog";

const { Content } = Layout;

const dataSource = [
  {
    key: 0,
    name: "Bella",
    price: "$15",
    breed: "German Shepherd",
    owner: "Ahmed",
    image: "images/mydog.jpg",
    color: "Red",
    weight: "15",
    gender: "male",
    about: "Wild dog",
    location: "Pakistan",
    age: "25",
    size: "Large",
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

export const EmployeeDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [updatingRecord, setUpdatingRecord] = useState();
  const [modalType, setModalType] = useState("");

  useEffect(() => {}, [showModal, updatingRecord]);

  const modalHandler = () => {
    setShowModal(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Breed",
      dataIndex: "breed",
      key: "breed",
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
    },
    {
      title: "Delete",
      key: "delete",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?">
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
    {
      title: "Update",
      key: "update",
      render: (_, record) => {
        return (
          <Popconfirm
            title="Sure to update ?"
            onConfirm={() => {
              setUpdatingRecord(record);
              setModalType("");
              modalHandler();
            }}
          >
            <a>Update</a>
          </Popconfirm>
        );
      },
    },
  ];
  return (
    <Layout className="dashboard_layout">
      <Content
        className="site-layout-background"
        style={{
          margin: 0,
          minHeight: 280,
        }}
      >
        <div className="dashboard_btn">
          <Button
            type="primary"
            onClick={() => {
              setModalType("addRecord");
              modalHandler();
            }}
          >
            Add new Record
          </Button>
        </div>
        <Table columns={columns} dataSource={dataSource} />
        {modalType === "addRecord" ? (
          <AddDogModal showModal={showModal} setShowModal={setShowModal} />
        ) : (
          <UpdateDogModal
            showModal={showModal}
            setShowModal={setShowModal}
            record={updatingRecord}
          />
        )}
      </Content>
    </Layout>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDashboard);
