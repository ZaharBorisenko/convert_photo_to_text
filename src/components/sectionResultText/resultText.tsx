import {setResultText} from "store/Slice/InfoSlice.ts";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "store/hook.ts";

export const ResultText = () => {
    const dispatch = useAppDispatch();
    const resultText = useAppSelector(state => state.info.resultText);
    return (
        <div>
            <Text>Ваш текст</Text>
            <Subtext>Если в тексте ошибка - отредактируйте его прямо на сайте</Subtext>
            {resultText &&
                <EditInput
                    autoFocus={true}
                    onFocus={(e) => e.target.select()}
                    value={resultText}
                    onChange={(e) => dispatch(setResultText(e.target.value))}
                />
            }
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
  height: 200px;
  padding: 5px 10px;
  resize: none;
  border-radius: 10px;
  border: 5px solid #808080;
  outline: none;
  font-size: 16px;
`
