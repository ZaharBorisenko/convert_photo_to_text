import styled from "styled-components";
import React, {useRef, useState} from "react";
import {SvgUpload} from "ui/svg";
import {useAppDispatch} from "store/hook.ts";
import {setFile} from "store/Slice/InfoSlice.ts";

export const SectionUpload = ({handleClickImage}: {
    handleClickImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    const uploadFile = useRef<HTMLInputElement | null>(null);
    const dispatch = useAppDispatch()
    const [drag, setDrag] = useState<boolean>(false);
    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(true);
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(true);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
        const files = e.dataTransfer.files[0];
        dispatch(setFile(files))
    }
    return (
        <div>
            <ScreenUploads
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragOverHandler(e)}
                onDrop={e => dropHandler(e)}
                onClick={() => uploadFile.current?.click()}
            >
                <SvgUpload/>
                {!drag && <TextUpload>Выберите или перетащите изображение😊</TextUpload>}
                {drag && <TextUpload>Отпускайте файл, мы его поймаем😎🤲</TextUpload>}
            </ScreenUploads>
            <input
                style={{display: "none"}}
                ref={uploadFile} type="file"
                accept="image/*"
                onChange={handleClickImage}
            />
        </div>
    );
};
const TextUpload = styled.div`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 30px;
  color: #fff;
  font-weight: 600;
`
const ScreenUploads = styled.div`
  background-color: #ff81d5;
  border: 5px dashed #3e273d;
  padding-top: 30px;
  border-radius: 10px;
  cursor: pointer;
`
