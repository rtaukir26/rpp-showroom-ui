import Modal from "react-modal";
import { ImageIcons, Products } from "../../utils/images";
const ReactBuyPopup = ({
  isOpen,
  handleClose,
  product,
  handleAddToCart,
  handleAddQty,
  handleDecrQty,
  // setProductQty,
  productQty,
}) => {
  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.3",
      zIndex: 999,
    },
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
      textAlign: "center",
      border: "none",
      padding: "0px",
    },
  };

  return (
    <Modal isOpen={isOpen} style={modalStyle} ariaHideApp={false}>
      <div className="order-buy-popup-modal">
        <div className="close-con" onClick={() => handleClose(false)}>
          <img src={ImageIcons.close} alt="close" />
        </div>
        <div className="modal-body">
          <div className="modal-wrapper">
            <div className="img-con">
              <div className="img-div">
                <img
                  src={product.photos && product.photos[0]?.url}
                  alt="product"
                />
              </div>
              <div className="btn-con">
                <button>Order Now</button>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="order-content">
              <strong>{product?.name}</strong>
              <div className="rating-star">
                Rating
                <mark>
                  <img src={ImageIcons.star} alt="star" /> 3.4
                </mark>
              </div>
              <p>{product?.description}</p>

              <strong>Price: {product?.price} &#8377;</strong>
              <div className="quantity-con">
                <span>Quantity</span>
                <div className="add-qty">
                  <span onClick={handleDecrQty}>-</span>
                  <span>{productQty}</span>
                  <span onClick={handleAddQty}>+</span>
                </div>
              </div>
              <strong>Total price : {product?.price} &#8377;</strong>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReactBuyPopup;
