import styles from "../../../styles/buttons.module.scss";
import Image from "next/image";
import {Search} from "@/app/notes/components/Search";
import {FC} from "react";
import {HeaderProps} from "@/app/notes/types/NoteTypes";
import 'bootstrap/dist/css/bootstrap-grid.css';
export const Buttons:FC<HeaderProps> = ({onCreateItem, onClearSearch, onRemoveItem, activeItem, onEditItem, onSearch}) => {

    const handlePlusButtonClick = () => {
        onCreateItem('', '');
    };
    return (
        <div className={styles.headerMain}>
            <div className={styles.headerContainer}>
                <div className={styles.topButtons}>
                    <button onClick={handlePlusButtonClick} className={styles.topBtn}>
            <span>
              <Image width={35} height={30} src="/plus.svg" alt="plus"/>
            </span>
                    </button>
                    <button onClick={onRemoveItem} disabled={!activeItem} className={styles.topBtn}>
            <span>
              <Image width={35} height={30} src="/trash.svg" alt="trash"/>
            </span>
                    </button>
                    <button onClick={onEditItem} disabled={!activeItem} className={styles.topBtn}>
            <span>
              <Image width={35} height={30} src="/edit.png" alt="edit button"/>
            </span>
                    </button>
                </div>
                <Search onSearch={onSearch} onClearSearch={onClearSearch}/>
            </div>
        </div>
    )
}