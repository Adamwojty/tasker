import { useCallback, useState } from 'react';

export const useModal = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleModal = useCallback(() => {
        return setModalOpen(!modalOpen);
    }, [modalOpen]);

    return { modalOpen, handleModal };
};
