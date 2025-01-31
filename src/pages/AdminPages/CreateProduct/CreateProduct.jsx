import { useFormik } from "formik";
import React, { useState } from "react";
import { createProduct_schema } from "../../../utils/helpers";
import { createProductApi } from "../../../services/adminServices";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const initValues = {
    name: "",
    price: 0,
    category: "",
    subCategory: "",
    description: "",
  };

  const [files, setFiles] = useState([]);
  console.log("filesss", files);
  const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    useFormik({
      initialValues: initValues,
      validationSchema: createProduct_schema,
      onSubmit: (values) => {
        console.log("values");
        // createProductApi()
        //   .then((res) => res)
        //   .catch((err) => toast.error(err.message));
      },
    });

  console.log("values", values);
  console.log("errors", errors);

  const handleFilesUpload = (e) => {
    const files = e.target.files;
    setFiles([]);
    const maxSize = 1 * 1024 * 1024; // 1MB in bytes
    let isValid = true;

    // Iterate through the files
    for (let i = 0; i < files.length; i++) {
      if (files[i].size > maxSize) {
        isValid = false;
        toast.warning(`File "${files[i].name}" exceeds the 1MB size limit.`);
        break; // Stop checking further files
      }
    }

    if (isValid) {
      // Proceed with file upload or state update
      setFiles([...files]); // Uncomment this if you want to set the files in state
    }
    //  else {
    // Clear the input or handle the error
    //   e.target.value = ""; // Clear the file input
    //   toast.warning(`File exceeds the 1MB size limit.`);
    // }
  };

  return (
    <div className="create-product">
      <div className="body shadow rounded ">
        <div className="wrapper h-100 d-flex">
          <div className="product-content rounded w-50 ">
            <div className="content ">
              <div>
                <span>Total user's +2,890</span>
              </div>
              <div>
                <span>Total products sold +28,980</span>
              </div>
            </div>
          </div>

          {/* create product */}
          <div className="product-upload rounded w-50 ">
            <div className="form-con m-auto">
              <p className="mb-2 fs-4 fw-bold">Create new product</p>
              <form
                className="py-2 px-5 rounded shadow-lg"
                onSubmit={handleSubmit}
              >
                <div className="d-flex gap-3">
                  <div className="form-group mb-2">
                    <label htmlFor="name">Product Name</label>
                    <input
                      type="text"
                      // className="form-control mt-1 shadow-none border-0"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={`form-control mt-1 border-0 ${
                        touched.name && errors.name ? "error" : null
                      }`}
                    />
                    {touched.name && errors.name && (
                      <div className="form-error">{errors.name}</div>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="price">Product Price</label>
                    <input
                      type="text"
                      // className="form-control mt-1  border-0"
                      className={`form-control mt-1 border-0 ${
                        touched.price && errors.price ? "error" : null
                      }`}
                      id="price"
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                    />
                    {touched.price && errors.price && (
                      <div className="form-error">{errors.price}</div>
                    )}
                  </div>
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="Category">Product Category</label>
                  <input
                    type="text"
                    // className="form-control mt-1  border-0"
                    className={`form-control mt-1 border-0 ${
                      touched.category && errors.category ? "error" : null
                    }`}
                    id="Category"
                    name="category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category}
                  />{" "}
                  {touched.category && errors.category && (
                    <div className="form-error">{errors.category}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="SubCategory">Product Sub Category</label>
                  <input
                    type="text"
                    // className="form-control mt-1  border-0"
                    className={`form-control mt-1 border-0 ${
                      touched.subCategory && errors.subCategory ? "error" : null
                    }`}
                    id="subCategory"
                    name="subCategory"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subCategory}
                  />{" "}
                  {touched.subCategory && errors.subCategory && (
                    <div className="form-error">{errors.subCategory}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="Description">Product Description</label>
                  <input
                    type="text"
                    // className="form-control mt-1 border-0"
                    className={`form-control mt-1 border-0 ${
                      touched.description && errors.description ? "error" : null
                    }`}
                    id="Description"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />{" "}
                  {touched.description && errors.description && (
                    <div className="form-error">{errors.description}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="Photo">Product Photo</label>
                  <input
                    type="file"
                    className="form-control border-0"
                    id="Photo"
                    multiple
                    name="photo"
                    onChange={handleFilesUpload}
                  />
                  <span>File size should be less than 1MB</span>
                  {files.length > 0 && (
                    <div className="uploaded-files">
                      <ul className="img-con">
                        <>
                          {files.map((file, index) => {
                            // console.log("fileee", file, index);

                            return (
                              <li key={index}>
                                {/* <strong>{file.name}</strong> -{" "}
                            {(file.size / 1024).toFixed(2)} KB */}
                                {/* Check if file.type exists before calling startsWith */}
                                {file.type &&
                                  file.type.startsWith("image/") && (
                                    <div>
                                      <img
                                        src={URL.createObjectURL(file)}
                                        alt={file.name}
                                      />
                                    </div>
                                  )}
                              </li>
                            );
                          })}
                        </>
                      </ul>
                    </div>
                  )}
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-success mb-3 outline-0">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
