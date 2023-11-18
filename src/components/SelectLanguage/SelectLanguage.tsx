import {ChangeEvent} from "react";
import {useAppDispatch} from "store/hook.ts";
import {setLanguage} from "store/Slice/InfoSlice.ts";
import styled from "styled-components";
import languageIcon from 'assets/languages.png'

export const SelectLanguage = () => {
    const dispatch = useAppDispatch()

    const handleClickLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLanguage(e.target.value))
    }

    return (
        <Container>
            <Wrapper>
                <IconsLanguage src={languageIcon} alt=""/>
                <Select name="language" onChange={(e) => handleClickLanguage(e)}>
                    <option value="">Выберите язык</option>
                    <option value="rus">Русский</option>
                    <option value="eng">Английский</option>
                    <option value="fra">Французкий</option>
                    <option value="deu">Немецкий</option>
                    <option value="ita">Итальянский</option>
                </Select>
            </Wrapper>
        </Container>
    )
}

const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
`
const Select = styled.select`
  padding: 10px 60px 10px 30px;
  font-size: 20px;
  border-radius: 10px;
  appearance: none;
  cursor: pointer;
  background-color: #dfedf3;
  color: #090dc4;
  border: 4px dashed #f7a9dd;
  outline: none;
  font-weight: 600;
`
const IconsLanguage = styled.img`
  position: absolute;
  right: 30px;
  bottom: 14px;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`
