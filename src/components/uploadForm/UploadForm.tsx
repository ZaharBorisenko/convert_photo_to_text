import React, {useEffect, useRef, useState} from "react";
import {createWorker} from "tesseract.js";
import styled from "styled-components";
import close from 'assets/delete.png'

export const UploadForm = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [resultText, setResultText] = useState<string | null>(null);
    const uploadFile = useRef<HTMLInputElement | null>(null);

    const convertImageToText = async () => {
        const worker = await createWorker('rus');
        const ret = await worker.recognize(selectedImage);
        setResultText(ret.data.text);
        await worker.terminate();
    }
    const handleClickImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        setSelectedImage(e.target.files[0])
    }
    const clearState = () => {
        setSelectedImage(null)
        setResultText(null)
    }
    useEffect(() => {
        if (selectedImage) convertImageToText()
    }, [selectedImage]);

    return (
        <Wrapper>
            <div>
                {
                    !selectedImage ?
                        (
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
                        ) :
                        (
                            <WrapperImg>
                                <img src={URL.createObjectURL(selectedImage)} alt="Photo"/>
                                <DeleteButton onClick={() => clearState()}>
                                    <img src={close} alt="close"/>
                                </DeleteButton>
                            </WrapperImg>
                        )
                }
                <input
                    style={{display: "none"}}
                    ref={uploadFile} type="file"
                    accept="image/*"
                    onChange={handleClickImage}
                />
            </div>
            {
                resultText && <div>
                    <Text>Ваш текст</Text>
                    <Subtext>Если в тексте ошибка - отредактируйте его прямо на сайте</Subtext>
                    {resultText &&
                        <EditInput
                            autoFocus={true}
                            onFocus={(e) => e.target.select()}
                            value={resultText}
                            onChange={(e) => setResultText(e.target.value)}
                        />
                    }
                </div>
            }
        </Wrapper>
    );
};
const Wrapper = styled.div`
  text-align: center;
`
const ScreenUploads = styled.div`
  background-color: #ff81d5;
  border: 5px dashed #3e273d;
  padding-top: 30px;
  border-radius: 10px;
  cursor: pointer;
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
const TextUpload = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  color: #fff;
  font-weight: 600;
`

const WrapperImg = styled.div`
  padding: 16px 24px;
  border-radius: 10px;
  border: 2px solid #36BE49;
  text-align: center;
  position: relative;
`

const DeleteButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

`
const Text = styled.div`
  margin-top: 30px;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
`

const Subtext = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  color: #808080;
  font-size: 18px;
`
const EditInput = styled.textarea`
  width: 700px;
  height: 200px;
  padding: 5px 10px;
  resize: none;
  border-radius: 10px;
  border: 5px solid #808080;
  outline: none;
  font-size: 16px;
`

