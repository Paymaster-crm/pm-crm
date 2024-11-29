import { useFormik } from "formik";
import CustomTextField from "../../customComponents/CustomTextField";
import CustomButton from "../../customComponents/CustomButton";
import { validationSchema } from "../../../schemas/hrManagement/hrActivitiesSchema";
import axios from "axios";

function AddHrActivity() {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
      time: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_STRING}/add-hr-activity`,
          values
        );
        alert(res.data.message);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <CustomTextField
        id="title"
        name="title"
        label="Title"
        type="text"
        formik={formik}
      />

      <CustomTextField
        id="description"
        name="description"
        label="Description"
        type="text"
        formik={formik}
      />

      <CustomTextField
        id="date"
        name="date"
        label="Date"
        type="date"
        formik={formik}
      />

      <CustomTextField
        id="time"
        name="time"
        label="Time"
        type="time"
        formik={formik}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default AddHrActivity;
