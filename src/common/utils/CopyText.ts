import {toast} from "react-toastify";
import {result} from "store/Slice/InfoSlice.ts";

export const handleCopy = (result:result) => {
    navigator.clipboard.writeText(result.text);
    toast.success('Текст скопирован', {autoClose: 2000});
};
