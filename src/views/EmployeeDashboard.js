import React, { useEffect, useState } from "react";
import { Table, Popconfirm, Layout, Button, Pagination } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AddDogModal } from "../modals/addDog";
import { UpdateDogModal } from "../modals/updateDog";
import FullPageLoader from "../components/loader";

//services
import { addDog, getDog } from "../services/dog.services";

const { Content } = Layout;

// const dataSource = [
//   {
//     key: 0,
//     name: "Bella",
//     price: "$15",
//     breed: "German Shepherd",
//     owner: "Ahmed",
//     image: "images/mydog.jpg",
//     color: "Red",
//     weight: "15",
//     gender: "male",
//     about: "Wild dog",
//     location: "Pakistan",
//     age: "25",
//     size: "Large",
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
//   {
//     key: 5,
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
//   {
//     key: 5,
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
//   {
//     key: 5,
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
//   {
//     key: 5,
//     name: "ABC",
//     price: "$15",
//     breed: "ABC",
//     owner: "Ahmed",
//     img: "images/mydog.jpg",
//   },
// ];

export const EmployeeDashboard = ({ addDog, getDog, dogData, dogCount }) => {
  const [showModal, setShowModal] = useState(false);
  const [updatingRecord, setUpdatingRecord] = useState();
  const [modalType, setModalType] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const getDogServiceHelper = (page) => {
    return new Promise((resolve, reject) => {
      return getDog(page, null, resolve, reject);
    });
  };

  const getDogService = async (page) => {
    try {
      return await getDogServiceHelper(page);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    !showModal && setIsLoading(true);
    let data = await getDogService();
    data.forEach((dog, i) => {
      dog.key = i;
    });
    setDataSource(data);
    setIsLoading(false);
  }, [showModal, updatingRecord]);

  const modalHandler = () => {
    setShowModal(true);
  };

  const addDogServiceHelper = (data) => {
    if (modalType === "addRecord")
      return new Promise((resolve, reject) => {
        return addDog(data, resolve, reject);
      });
    // else
    //   return Promise((resolve, reject) => {
    //     UpdateDogModal()
    //   })
  };

  const addDogService = async (values) => {
    try {
      await addDogServiceHelper(values);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePagination = async (page, pageSize) => {
    let data;
    setIsLoading(true);
    try {
      data = await getDogService(page);
      setCurrentPage(page);
      data.forEach((dog, i) => {
        dog.key = i;
      });
      setDataSource(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "100px",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "100px",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: "100px",
    },
    {
      title: "Breed",
      dataIndex: "breed",
      key: "breed",
      width: "150px",
    },

    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
      width: "100px",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "70px",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
      width: "100px",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      width: "100px",
    },
    {
      title: "About",
      dataIndex: "about",
      key: "about",
      width: "300px",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: "150px",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: "150px",
      render: (_, record) => (
        <img height={100} width={150} src={record.image} alt={record.name} />
      ),
    },
    {
      title: "Delete",
      key: "delete",
      fixed: "right",
      width: "100px",
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
      fixed: "right",
      width: "100px",
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

  if (isLoading) return <FullPageLoader />;

  return (
    <Layout className="dashboard_layout">
      <Content
        className="site-layout-background"
        style={{
          margin: 0,
          minHeight: 280,
          height: "100%",
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
        <Table
          columns={columns}
          dataSource={dataSource}
          scroll={{ x: 240 }}
          pagination={false}
          // pagination={{
          //   PageSize: 2,
          //   current: currentPage,
          //   total: 4,
          //   onChange: handlePagination,
          // }}
        />
        <Pagination
          current={currentPage}
          onChange={handlePagination}
          total={dogCount}
          className="home_pagination"
          pageSize={2}
        />
        {modalType === "addRecord" ? (
          <AddDogModal
            showModal={showModal}
            setShowModal={setShowModal}
            addDogAPI={addDogService}
          />
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

const mapStateToProps = (state) => {
  return {
    dogData: state.dog.dogData,
    dogCount: state.dog.dogCount,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addDog, getDog }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDashboard);
