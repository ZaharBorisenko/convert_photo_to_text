import { Layout } from 'components';
import { useAppSelector } from 'store/hook.ts';
import styled from 'styled-components';
import { handleCopy } from 'common/utils/CopyText.ts';
export const History = () => {
  const resultData = useAppSelector(state => state.info.resultData)!;
  return (
    <Layout>
      {
        resultData.length > 0 ?
          <div>
            {resultData?.map((result, index) => (
              <Container onClick={() => handleCopy(result)} key={result.id}>
                <div>
                  <Number>Запрос №{index + 1}</Number>
                  <ID>Id: {result.id}</ID>
                </div>
                <p>{result.text}</p>
              </Container>
            ))}
          </div>
          :
          <NoInfo>
            <div>
                <Number>Вы ещё ничего не конвертировали 🥺</Number>
            </div>
          </NoInfo>
      }
    </Layout>
  );
};
const Container = styled.div`
  position: relative;
  border: 2px solid #3498db;
  border-radius: 10px;
  margin-top: 30px;
  padding: 30px;
  cursor: pointer;

  &:hover::before {
    content: 'Нажмите,чтобы скопировать';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #3498db;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
  }
`;
const Number = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 0;
`;
const ID = styled.p`
  font-size: 12px;
  margin: 5px 0 0;
  font-weight: 700;
  opacity: .4;
`;

const NoInfo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 200px;
`;
