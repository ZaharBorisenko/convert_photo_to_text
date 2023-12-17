import { setResultText } from 'store/Slice/InfoSlice.ts';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/hook.ts';
import { Button } from 'ui/Button';
import copy from 'assets/copy.png';
import preloader from 'assets/preloader.gif';

export const ResultText = () => {
  const dispatch = useAppDispatch();
  const resultText = useAppSelector(state => state.info.resultText)!;
  const statusText = useAppSelector(state => state.info.statusText);
  console.log(statusText);
  const handleCopy = () => {
    navigator.clipboard.writeText(resultText);
    alert('Текст скопирован');
  };
  return (
    <div>
      <Text>Результат распознавания</Text>
      <Subtext>Если в тексте ошибка - отредактируйте его прямо на сайте</Subtext>
      <ContainerTextarea>

        {resultText ?
          <EditInput

            autoFocus={true}
            value={resultText}
            onChange={(e) => {
              dispatch(setResultText(e.target.value));
            }}
          /> :
          <NoResult>
            <img src={preloader} alt='loading...' />
          </NoResult>
        }

        <div>
          <Wrapper>
            <Img src={copy} alt='' />
            <Button text='Скопировать' handleClick={handleCopy} />
          </Wrapper>
        </div>
      </ContainerTextarea>
    </div>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
`;
const Img = styled('img')`
  position: absolute;
  top: 18px;
  left: 10px;
  cursor: pointer;
`;

const Text = styled.div`
  margin-top: 30px;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
`;

const Subtext = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  color: #808080;
  font-size: 18px;
`;
const EditInput = styled.textarea`
  width: 100%;
  height: 600px;
  padding: 5px 10px;
  resize: none;
  border-radius: 3px;
  border: 1px solid #808080;
  outline: none;
  font-size: 16px;
`;
const ContainerTextarea = styled.div`
  display: flex;
  align-items: start;
  gap: 0 30px;
`;

const NoResult = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
