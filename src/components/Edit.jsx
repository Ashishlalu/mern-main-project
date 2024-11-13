import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import uploadimg from "../assets/upoloadimg.png";


const Edit = () => {
 
      const [productDetails, setproductDetails] = useState({
        productName: "",
        seller: "",
        details: "",
        price: "",
        contact: "",
        productImg: "",
      });
      const [preview, setPreview] = useState("");
      const [imageFileStatus, setImageFileStatus] = useState(false);
      console.log(productDetails);
    
      useEffect(() => {
        if (
          productDetails.productImg &&
          (productDetails.productImg.type === "image/png" ||
            productDetails.productImg.type === "image/jpg" ||
            productDetails.productImg.type === "image/jpeg")
        ) {
          // Valid image
          setImageFileStatus(true);
          setPreview(URL.createObjectURL(productDetails.productImg));
        } else {
          // Invalid image
          setImageFileStatus(false);
          setPreview("");
          setproductDetails({ ...productDetails, productImg: "" });
        }
      }, [productDetails.productImg]);
    
      const [show, setShow] = useState(false);
    
      const handleClose = () => {
        setShow(false);
        setproductDetails({
          productName: "",
          seller: "",
          details: "",
          price: "",
          contact: "",
          productImg: "",
        });
        setPreview("");
        setImageFileStatus(false);
      };
      const handleShow = () => setShow(true);
    
      const handleAddProduct = async () => {
        const { productName, seller, details, price, contact, productImg } =
          productDetails;
        if (productName && seller && details && price && contact && productImg) {
          const reqBody = new FormData();
          reqBody.append("productName", productName);
          reqBody.append("seller", seller);
          reqBody.append("details", details);
          reqBody.append("price", price);
          reqBody.append("contact", contact);
          reqBody.append("productImg", productImg);
    
          const token = sessionStorage.getItem("token");
          if (token) {
            const reqHeader = {
              "Content-Type": "multipart/form-data",
              autherization: `Bearer ${token}`,
            };
            try {
              const result = await addBookAPI(reqBody, reqHeader); // Replace with actual API function
              if (result.status === 200) {
                alert("Product added successfully");
                handleClose();
              } else {
                alert(result.response.data);
              }
            } catch (err) {
              console.log(err);
            }
          }
        } else {
          alert("Please fill completely");
        }
      };
    
      return (
        <>
          <Button  onClick={handleShow} className="mt-0 text-wrap px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md">
          
              Edit
                   </Button>
    
          <Modal centered size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Product Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) =>
                        setproductDetails({
                          ...productDetails,
                          productImg: e.target.files[0],
                        })
                      }
                    />
                    <img
                      src={preview ? preview : uploadimg}
                      alt=""
                      height={"200px"}
                      className="img-fluid"
                    />
                  </label>
                  {!imageFileStatus && (
                    <div className="text-warning fw-bolder my-2">
                      Upload an image of types jpg, jpeg, or png
                    </div>
                  )}
                </div>
                <div className="col">
                  <div className="mb-2">
                    <input
                      value={productDetails.productName}
                      onChange={(e) =>
                        setproductDetails({
                          ...productDetails,
                          productName: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Book Name"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      value={productDetails.seller}
                      onChange={(e) =>
                        setproductDetails({
                          ...productDetails,
                          seller: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="seller"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      value={productDetails.details}
                      onChange={(e) =>
                        setproductDetails({
                          ...productDetails,
                          details: e.target.value,
                        })
                      }
                      type="date"
                      placeholder="Release Date"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      value={productDetails.price}
                      onChange={(e) =>
                        setproductDetails({
                          ...productDetails,
                          price: e.target.value,
                        })
                      }
                      type="number"
                      placeholder="Price"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      value={productDetails.contact}
                      onChange={(e) =>
                        setproductDetails({
                          ...productDetails,
                          contact: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="contact"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleAddProduct}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    };
    
    
export default Edit;
