import * as Yup from "yup";

const AddDogFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  breed: Yup.string().required("Breed is required"),
  img: Yup.string().required("Image is required"),
  price: Yup.string().required("Price is required"),
});

export default AddDogFormSchema;
