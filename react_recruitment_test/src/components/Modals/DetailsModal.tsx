import React from "react";

import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import SearchIcon from "@material-ui/icons/Search";

import "./DetailsModal.scss";
import { Product } from "../../types/productType";
import { Button } from "@material-ui/core";
import useProductQuantity from "../../hooks/useProductQuantity";
import { DetailsButton } from "../Buttons";

interface DetailModalsProps {
  handleDetailsModal?: () => void;
  productDetails: Product;
  // pid: string;
  // price: number;
}

const DetailsModal: React.FC<DetailModalsProps> = ({
  handleDetailsModal,
  productDetails,
  // price,
  // pid,
}) => {
  const [showModal, hideModal] = useModal(() => {
    // const { addProduct } = useProductQuantity(0, 1, pid, price);

    return (
      <ReactModal isOpen>
        <div className="detailsModal">
          <div className="detailsClose">
            <HighlightOffIcon onClick={hideModal} />
          </div>

          <div className="details">
            <h3>Nazywa produktu: {productDetails.name}</h3>
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
            <DetailsButton>Dodaj 1 sztukę do koszyka</DetailsButton>
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
