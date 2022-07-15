import { useState } from "react";
import { useLocation } from "react-router";
import UseModels from '../models/UseModels';
export default function UseGallery() {
    const [{ data }] = UseModels();
    const location = useLocation();
    const [btnState, setBtnState] = useState(1);
    const btnsData = [
        {
            name: 'ALL',
            id: 1,
        },
        {
            name: 'EXTERIOR',
            id: 2,
        },
        {
            name: 'INTERIOR',
            id: 3,
        },
    ]
    const id = location.pathname;
    const path = id?.split('/');
    const product = data?.filter((item) => {
        if (item?.name == path[1]) {
            return item;
        }
    })
    const model = product[0]?.models?.filter((item) => {
        if (item?.id == path[4]) {
            return item;
        }
    })
    const modelObj = model[0];
    const [images, setImages] = useState(modelObj?.exterior?.concat(modelObj?.interior));
    const btnHandler = (id) => {
        setBtnState(id);
        if (id == 1) {
            setImages(modelObj?.exterior?.concat(modelObj?.interior));
        }
        if (id == 2) {
            setImages(modelObj?.exterior);
        }
        if (id == 3) {
            setImages(modelObj?.interior);
        }
    }

    return [{ path, btnState, setBtnState, btnsData, modelObj, product, images, btnHandler }]
}
