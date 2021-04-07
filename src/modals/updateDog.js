import React, { useEffect, useState } from "react";
import { Modal, Button, Input } from "antd";
import { Formik } from "formik";
import AddDogFormSchema from "../validations/AddDog.validations";
import FullPageLoader from "../components/loader";

// Add a dog record - form
const UpdateDogForm = ({ onSubmit, handleOk, record }) => {
  return (
    <Formik
      initialValues={{
        name: record.name,
        img: record.img,
        breed: record.breed,
        price: record.price,
      }}
      validationSchema={AddDogFormSchema}
      onSubmit={(values) => {
        console.log(values);
        // onSubmit(values);
      }}
    >
      {({
        values,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="auth_form">
          <Input
            type="text"
            onChange={handleChange}
            name="name"
            onBlur={handleBlur}
            touched={touched}
            value={values.name}
            placeholder="Name"
            className="addDog_input"
          />
          {errors.name && touched.name ? (
            <div className="text-danger">{errors.name}</div>
          ) : null}

          <Input
            type="text"
            onChange={handleChange}
            name="price"
            placeholder="Price"
            onBlur={handleBlur}
            touched={touched}
            value={values.price}
            className="addDog_input"
          />
          {errors.price && touched.price ? (
            <div className="text-danger">{errors.price}</div>
          ) : null}

          <Input
            type="text"
            name="breed"
            placeholder="Breed"
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched}
            value={values.breed}
            className="addDog_input"
          />
          {errors.breed && touched.breed ? (
            <div className="text-danger">{errors.breed}</div>
          ) : null}

          <Input
            type="text"
            name="img"
            placeholder="Image"
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched}
            value={values.img}
            className="addDog_input"
          />
          {errors.img && touched.img ? (
            <div className="text-danger">{errors.img}</div>
          ) : null}

          <Button
            type="primary"
            className="auth_btn"
            htmlType="submit"
            onClick={handleOk}
            disabled={
              !values.name || !values.price || !values.breed || !values.img
            }
          >
            Done
          </Button>
        </form>
      )}
    </Formik>
  );
};

export const UpdateDogModal = ({
  addRecordHandler,
  showModal,
  setShowModal,
  record,
}) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setShowModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setVisible(showModal);
  }, [showModal]);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
    setShowModal(false);
  };

  return (
    <>
      <Modal
        title="Update"
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose
      >
        <UpdateDogForm handleOk={handleOk} record={record} />
        {confirmLoading && <FullPageLoader />}
      </Modal>
    </>
  );
};
