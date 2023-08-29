"use client"

import styles from "../../styles/notes.module.scss";
import 'bootstrap/dist/css/bootstrap-grid.css';
import {NotesList} from "@/app/notes/components/NotesList";
import {WorkSpace} from "@/app/notes/components/WorkSpace";
import {Buttons} from "@/app/notes/components/Buttons";
import {useEffect, useState} from "react";
import {CreateItem, NoteTypes} from "@/app/notes/types/NoteTypes";
import {useSearch} from "@/app/notes/hooks/useSearch";
import {apiNote} from "@/app/notes/api/apiNotes";
import {ViewSpace} from "@/app/notes/components/ViewSpace";


export default function Notes () {

    const [items, setItems] = useState<NoteTypes[]>([]);
    const [activeItem, setActiveItem] = useState<NoteTypes | null>(null);
    const [editMod, setEditMod] = useState<boolean>(false);
    const {filteredItems, handleClearSearch, handleSearch} = useSearch(items)

    const handleCreateItem = async (newTitle: string, newDescription: string) => {
        const newItem: CreateItem = {
            title: newTitle,
            description: newDescription,
            date: new Date(),
        };
        try {
            const createdItem = await apiNote.create(newItem);
            setItems([...items, createdItem]);
            setActiveItem(createdItem);
            setEditMod(true);
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };
    const handleSetActiveItem = (note: NoteTypes) => {
        setActiveItem(note);
        setEditMod(false);
    }
    const handleSaveItem = async (newTitle: string, newDescription: string) => {
        let updatedItem: NoteTypes = {
            id: activeItem?.id as number,
            title: newTitle,
            description: newDescription,
            date: new Date(),
        };
        updatedItem = await apiNote.put(updatedItem);
        setItems(items.map((item) => (item === activeItem ? updatedItem : item)));
        setActiveItem(updatedItem);
        setEditMod(false);
    };

    const handleRemoveItem = async () => {
        if (activeItem && window.confirm('Are you sure you want to delete the note?')) {
            await apiNote.delete(activeItem)
            setItems(items.filter((item) => item !== activeItem));
            setActiveItem(null);
        }
    };

    const handleEditItem = () => {
        setEditMod(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiNote.getAll();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className={"container-fluid " + styles.notesWrapper}>
                <Buttons
                    onCreateItem={handleCreateItem}
                    onRemoveItem={handleRemoveItem}
                    activeItem={activeItem}
                    onEditItem={handleEditItem}
                    onSearch={handleSearch}
                    onClearSearch={handleClearSearch}
                />
            <div className={"row " + styles.notesContainer} style={{padding: 20}}>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <NotesList
                        notes={filteredItems}
                        onActiveNote={handleSetActiveItem}
                        activeNote={activeItem}
                    />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                    {activeItem && (
                        editMod
                            ? <WorkSpace
                                onSaveItem={handleSaveItem}
                                title={activeItem.title}
                                description={activeItem.description}
                            />
                            : <ViewSpace title={activeItem.title} description={activeItem.description}
                                         date={activeItem.date}/>
                    )}
                </div>
            </div>
        </div>
    )
}