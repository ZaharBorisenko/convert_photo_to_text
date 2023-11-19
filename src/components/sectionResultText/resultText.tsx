import {setResultText} from "store/Slice/InfoSlice.ts";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "store/hook.ts";
import {Button} from "ui/Button";

export const ResultText = () => {
    const dispatch = useAppDispatch();
    const resultText = useAppSelector(state => state.info.resultText);
    return (
        <div>
            <Text>Результат распознавания</Text>
            <Subtext>Если в тексте ошибка - отредактируйте его прямо на сайте</Subtext>
            <ContainerTextarea>
                {resultText &&
                    <EditInput
                        autoFocus={true}
                        onFocus={(e) => e.target.select()}
                        value={resultText}
                        onChange={(e) => dispatch(setResultText(e.target.value))}
                    />
                }
                <div>
                    <Button text="Скопировать результат"/>
                </div>
            </ContainerTextarea>
        </div>
    )
}

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
  height: 600px;
  padding: 5px 10px;
  resize: none;
  border-radius: 3px;
  border: 1px solid #808080;
  outline: none;
  font-size: 16px;
`
const ContainerTextarea = styled.div`
  display: flex;
  align-items: start;
  gap: 0 30px;
`
