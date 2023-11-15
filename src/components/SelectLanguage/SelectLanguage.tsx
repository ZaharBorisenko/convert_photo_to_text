import {ChangeEvent} from "react";
import {useAppDispatch} from "store/hook.ts";
import {setLanguage} from "store/Slice/InfoSlice.ts";

export const SelectLanguage = () => {
    const dispatch = useAppDispatch()

    const handleClickLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLanguage(e.target.value))
    }

    return (
        <div>
            <select name="language" onChange={(e) => handleClickLanguage(e)}>
                <option value="">-- Выберите язык  --</option>
                <option value="rus">Русский</option>
                <option value="eng">Английский</option>
                <option value="fra">Французкий</option>
                <option value="deu">Немецкий</option>
                <option value="ita">Итальянский</option>
            </select>
        </div>
    )
}
