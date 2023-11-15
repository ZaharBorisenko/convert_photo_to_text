import React, {useEffect} from "react";
import {createWorker} from "tesseract.js";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "store/hook.ts";
import {setFile, setResultText} from "store/Slice/InfoSlice.ts";
import {SectionUpload, ResultText, ResultImg} from "components";
export const UploadForm = () => {
    const dispatch = useAppDispatch()
    const selectedImage = useAppSelector(state => state.info.selectedImage);
    const resultText = useAppSelector(state => state.info.resultText);
    const language = useAppSelector(state => state.info.language)!;
    const convertImageToText = async () => {
        const worker = await createWorker(language);
        const ret = await worker.recognize(selectedImage);
        dispatch(setResultText(ret.data.text));
        await worker.terminate();
    }
    const handleClickImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        const selectedImage = e.target.files[0]
        dispatch(setFile(selectedImage))
    }
    const handleClickConvert = () => {
        if (language === null) alert('Выберите язык!')
        if (selectedImage === null) alert('Выберите фотографию!')
        if (selectedImage && language) convertImageToText();
    }
    useEffect(() => {
        if (selectedImage && language) convertImageToText()
    }, [selectedImage]);
    return (
        <Wrapper>
            <div>
                {!selectedImage ? <SectionUpload handleClickImage={handleClickImage}/> : <ResultImg/>}
            </div>
            {resultText && <ResultText/>}
            <button onClick={() => handleClickConvert()}>Конвертировать</button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  text-align: center;
`
