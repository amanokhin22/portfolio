"use client"

import styles from "../../styles/witcher.module.scss";
import {useAppDispatch, useAppSelector} from "@/store/Hooks";
import {selectActiveModelsId, selectModelsList} from "@/selectors/selectors";
import {useEffect, useState} from "react";
import {fetchModels} from "@/redux/asyncThunk";
import {setActiveModelsId} from "@/redux/witcherSlice";
import {Modal} from "@/app/witcher/components/Modal";
import 'bootstrap/dist/css/bootstrap-grid.css';
import {Character} from "@/app/witcher/types/WitcherTypes";


export default function Witcher() {
    const modelsList = useAppSelector(selectModelsList);
    const dispatch = useAppDispatch();
    const [showModels, setShowModels] = useState(false);
    const [currentItem, setCurrentItem] = useState<Character | null>(null);

    useEffect(() => {
        dispatch(fetchModels())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const openModal = (event: React.MouseEvent<HTMLSpanElement>, item: Character) => {
        // @ts-ignore
        dispatch(setActiveModelsId(event.target.value));
        setShowModels(true);
        setCurrentItem(item)
    };

    const handleClose = () => {
        setShowModels(false);
        setCurrentItem(null)
    };

    return (
        <div className={styles.witcherWrapper}>
            <div className={"content " + styles.witcherContent}>
                <span className={styles.witcherTitle}>Choose your favorite character</span>
                <div className={"row " + styles.titlesBlock}>
                    {modelsList.map((item) => (
                        <span onClick={(event) => openModal(event, item)}
                              className={"col-lg-4 col-md-4 col-sm-12 " + styles.names}
                              key={item.id}>{item.selectTitle}</span>
                    ))}
                </div>
                {showModels && <Modal item={currentItem} isOpen={true} onClose={handleClose}/>}
            </div>
        </div>
    );
}
