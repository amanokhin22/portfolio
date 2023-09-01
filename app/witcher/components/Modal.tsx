import styles from "../../../styles/modal.module.scss";
import {FC} from "react";
import {ModelsTypes} from "@/app/witcher/types/WitcherTypes";
import Image from "next/image";

export const Modal: FC<ModelsTypes> = ({onClose, isOpen, item}) => {

    return (
        <div className={isOpen ? styles.styledModalOpen : styles.styledModal}>
            <div className={styles.modalFormWrapper}>
                <div className={styles.modalContent}>
                    <button className={styles.modalClose} onClick={() => onClose()}>
                                <span className={styles.modalCloseSpan}>
                                    <Image width={30} height={30} src="/close.svg" alt="close"
                                           className={styles.modalCloseImage}/>
                                </span>
                    </button>
                    <div className={styles.modalInfo}>
                        <h2 className={styles.modalTitle}>{item?.title}</h2>
                        <Image className={styles.modalImage} width={250} height={400} src={item?.image!}
                               alt="image"></Image>
                        <div className={styles.modalBody}>{item?.content}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
