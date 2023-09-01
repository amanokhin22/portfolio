export interface Character {
    id: string;
    selectTitle: string;
    image: string;
    title: string;
    content: string;
}

export interface WitcherSliceState {
    models: Character[];
    loading: boolean;
    activeModelsId: string;
    pageSize: number;
    page: number;
}

export interface ModelsTypes {
    onClose: () => void;
    isOpen: boolean;
    item: Character | null;
}