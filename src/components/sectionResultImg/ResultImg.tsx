import {clearInfo} from "store/Slice/InfoSlice.ts";
import close from "assets/delete.png";
import {useAppDispatch, useAppSelector} from "store/hook.ts";
import styled from "styled-components";

export const ResultImg = () => {
    const dispatch = useAppDispatch()
    const selectedImage = useAppSelector(state => state.info.selectedImage);
    return (
        <WrapperImg>
            {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Photo"/>}
            <DeleteButton onClick={() => dispatch(clearInfo())}>
                <img src={close} alt="close"/>
            </DeleteButton>
        </WrapperImg>
    );
};

const WrapperImg = styled.div`
  padding: 16px 24px;
  border-radius: 10px;
  border: 2px solid #36BE49;
  text-align: center;
  position: relative;
  img{
    width: 100%;
    border-radius: 10px;
  }
`

const DeleteButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`
