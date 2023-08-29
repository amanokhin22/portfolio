import React, {FC} from 'react';
import styles from '../../../styles/workSpace.module.scss';
import {ViewSpaceProps} from "../types/NoteTypes";

export const ViewSpace: FC<ViewSpaceProps> = ({title, description, date}) => {

    return (
        <div className={styles.containerWorkSpace}>
            <span>{date?.toLocaleString()}</span>
            <div className={styles.inputWrapper}>
                <h1>{title}</h1>
                <div>{description} </div>
            </div>
        </div>
    );
};
