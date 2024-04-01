import React from "react";
import {createWorker} from "tesseract.js";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "store/hook.ts";
import {clearInfo, setFile, setResultText, setStatus} from "store/Slice/InfoSlice.ts";
import {SectionUpload, ResultImg} from "components";
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
import {v4} from 'uuid'

export const UploadForm = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const selectedImage = useAppSelector(state => state.info.selectedImage);
    const language = useAppSelector(state => state.info.language)!;
    const convertImageToText = async () => {
        const worker = await createWorker(language);
        const ret = await worker.recognize(selectedImage);
        dispatch(setStatus('loading'));
        dispatch(setResultText(
            {
                id: v4(),
                text: ret.data.text,
            }
        ));
        await worker.terminate();
        dispatch(setStatus('loaded'));
    }
    const handleClickImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        const selectedImage = e.target.files[0]
        dispatch(setFile(selectedImage))
    }
    const handleClickConvert = () => {
        if (language === null) {
            toast.warning('Выберите язык!', {position: 'top-center', autoClose: 2000});
            return;
        }
        if (selectedImage === null) {
            toast.warning('Загрузите фотографию!', {position: 'top-center', autoClose: 2000});
            return;
        }
        if (selectedImage && language) {
            convertImageToText();
            navigate("/result");
            dispatch(clearInfo());
        }
    }
    return (
        <Wrapper>
            <div>
                {!selectedImage ? <SectionUpload handleClickImage={handleClickImage}/> : <ResultImg/>}
            </div>

            <Button onClick={() => handleClickConvert()}>Конвертировать</Button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  text-align: center;
`
const Button = styled.button`
  margin-top: 40px;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px 30px;
  font-weight: 600;
  color: #5d1f57;
  background-color: #82abed;
  border: none;
  cursor: pointer;
  margin-bottom: 30px;
`

