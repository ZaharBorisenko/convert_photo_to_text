import styled from "styled-components";
import React, {useRef} from "react";

export const SectionUpload = ({handleClickImage} : {handleClickImage: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
    const uploadFile = useRef<HTMLInputElement | null>(null);
    return (
        <div>
            <ScreenUploads onClick={() => uploadFile.current?.click()}>
                <SvgUpload data-v-abfb9cc5="" xmlns="http://www.w3.org/2000/svg" fill="none"
                           viewBox="0 0 24 24"
                           stroke="#fff">
                    <path data-v-abfb9cc5="" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                    </path>
                </SvgUpload>
                <TextUpload>Нажмите, чтобы загрузить изображение</TextUpload>
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
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  color: #fff;
  font-weight: 600;
`
const SvgUpload = styled("svg")`
  width: 120px;
  height: 120px;
  animation: hithere 5s infinite;

  @keyframes hithere {
    30% {
      transform: scale(1.2);
    }
    40%, 60% {
      transform: rotate(-20deg) scale(1.2);
    }
    50% {
      transform: rotate(20deg) scale(1.2);
    }
    70% {
      transform: rotate(0deg) scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`
const ScreenUploads = styled.div`
  background-color: #ff81d5;
  border: 5px dashed #3e273d;
  padding-top: 30px;
  border-radius: 10px;
  cursor: pointer;
`
