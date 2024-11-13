import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const BookModal = () => {
  const [showModal, setShowModal] = useState(false);

  const productDetails = {
    productName: "Hexagonal floating shelves",
    seller: "Ashish",
    details: "Hexagonal floating shelves that really pop when you walk in our front door! . . .",
    price: "Rs.2,500",
    contact: "+916238322874",
    productImg: "https://i.pinimg.com/originals/a0/fb/fe/a0fbfe42acd3f9d505ddab47e5153bca.jpg",
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handlePurchase = () => {
    alert(`You have purchased "${productDetails.productName}"!`);
    setShowModal(false);
  };

  return (
    <div className="container text-center">
      {/* Button to open the modal */}
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
        onClick={handleOpenModal}
      >
        Product Details
      </button>

      {/* Modal for product details */}
      <Modal
        centered
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        dialogClassName="custom-modal"
        className=""
        size="lg"
      >
        <Modal.Header closeButton className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-t-lg">
          <Modal.Title className="text-2xl font-semibold">Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-8 bg-white rounded-b-lg shadow-xl">
          <div className="flex flex-col items-center space-y-6 ">
            {/* product Cover */}
            <div className="w-2/4">
              <img
                src={productDetails.productImg}
                alt={productDetails.productName}
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
                style={{ width: "300px", height: "250px", objectFit: "cover" }}
              />
            </div>
            {/* product Details */}
            <div className="flex justify-evenly gap-5 w-full  text-gray-700 mt-11">
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-red-500">Product Name</h5>
                <p className="text-lg">{productDetails.productName}</p>
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-red-500">seller</h5>
                <p>{productDetails.seller}</p>
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-red-500">Details</h5>
                <p>{productDetails.details}</p>
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-red-500">Price</h5>
                <p className="text-lg font-semibold">{productDetails.price}</p>
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-red-500">contact</h5>
                <p>{productDetails.contact}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="p-4 bg-red-500 rounded-b-lg">
          <Button variant="secondary" onClick={handleCloseModal} className="text-white font-semibold">
            Close
          </Button>
          <Button
            variant="warning"
            onClick={handlePurchase}
            className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg border-none hover:bg-yellow-600"
          >
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BookModal;
