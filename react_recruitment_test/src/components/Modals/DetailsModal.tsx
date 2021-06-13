import React, { FC } from "react";

import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import SearchIcon from "@material-ui/icons/Search";

import "./DetailsModal.scss";
import { Product } from "../../types";
import { Button } from "@material-ui/core";
import { useProductQuantity } from "../../hooks";
import { DetailsButton } from "../Buttons";
import { formatPrice } from "../../helpers";

interface DetailModalsProps {
  handleDetailsModal?: () => void;
  productDetails: Product;
}

const DetailsModal: FC<DetailModalsProps> = ({
  handleDetailsModal,
  productDetails,
}) => {
  const [showModal, hideModal] = useModal(() => {
    const { addProduct } = useProductQuantity(
      productDetails.pid,
      formatPrice(productDetails.price),
      productDetails.min,
      productDetails.max
    );

    const handleAddProduct = () => {
      addProduct();
      hideModal();
    };

    return (
      <ReactModal isOpen>
        <div className="detailsModal">
          <div className="detailsClose">
            <HighlightOffIcon onClick={hideModal} />
          </div>

          <div className="details">
            <h3>Nazwa produktu: {productDetails.name}</h3>
            <span>Cena produktu: {productDetails.price} zł</span>
            {productDetails.isBlocked ? (
              <p className="unavailableCommunicat">
                Przepraszamy, produkt chwilowo niedostępny. Przepraszamy za
                utrudnienia i zapraszamy ponownie w przyszłości
              </p>
            ) : (
              <>
                <div
                  className="detailsImage"
                  style={{ backgroundImage: `url(${productDetails.image})` }}
                ></div>
                <p>{productDetails.description}</p>
              </>
            )}
          </div>

          {productDetails.isBlocked ? (
            <></>
          ) : (
            <DetailsButton onClick={handleAddProduct}>
              Dodaj 1 sztukę do koszyka
            </DetailsButton>
          )}
        </div>
      </ReactModal>
    );
  });

  const handleClick = (): void => {
    showModal();
    handleDetailsModal && handleDetailsModal();
  };

  return (
    <div className="detailsCommunicat" onClick={handleClick}>
      <p>Pokaż szczegóły oferty</p> <SearchIcon />
    </div>
  );
};

export default DetailsModal;
