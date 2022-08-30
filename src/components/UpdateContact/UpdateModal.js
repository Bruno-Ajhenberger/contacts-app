import React from "react";
import ReactModal from "react-modal";
import AddContactForm from "../AddContactForm/AddContactForm";
import styles from "./UpdateModal.module.css";

const UpdateModal = ({
  isOpen,
  closeModal,
  errors,
  formData,
  onSubmit,
  onInputChange,
}) => {
  console.log(formData);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={styles.modal}
    >
      <AddContactForm
        onSubmit={onSubmit}
        formData={formData}
        onInputChange={onInputChange}
        errors={errors}
      />
    </ReactModal>
  );
};

export default UpdateModal;
