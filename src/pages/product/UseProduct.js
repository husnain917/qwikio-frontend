import { useLocation } from "react-router";
import UseModels from '../models/UseModels';

export default function UseProduct() {
    const [{ data }] = UseModels();
    const location = useLocation();
    const id = location.pathname;
    const path = id?.split('/');
    const product = data?.filter((item) => {
        if (item?.name == path[1]) {
            return item;
        }
    })
    const model = product[0].models?.filter((item) => {
        if (item?.id == path[2]) {
            return item;
        }
    })
    const modelObj = model[0];
    const moreProducts = data?.filter((item) => {
        if (item?.name !== path[1]) {
            return item;
        }
    })
    return [{ modelObj, path, moreProducts }]
}
