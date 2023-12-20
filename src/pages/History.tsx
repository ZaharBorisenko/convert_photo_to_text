import {Layout} from "components";
import {useAppSelector} from "store/hook.ts";
import styled from "styled-components";
import {result} from "store/Slice/InfoSlice.ts";
import {toast} from "react-toastify";

export const History = () => {
    const resultData = useAppSelector(state => state.info.resultData);
    const handleCopy = (result:result) => {
        navigator.clipboard.writeText(result.text);
        toast.success('Текст скопирован', {autoClose: 2000});
    };
    return (
        <Layout>
            {resultData?.map((result, index) => (
                <Container onClick={() => handleCopy(result)} key={result.id}>
                    <div>
                        <Number>Запрос №{index + 1}</Number>
                        <ID>Id: {result.id}</ID>
                    </div>
                    <p>{result.text}</p>
                </Container>
            ))}
        </Layout>
    );
};
const Container = styled.div`
  border: 2px solid #3498db;
  border-radius: 10px;
  margin-top: 30px;
  padding: 30px;
  cursor: pointer;
`
const Number = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 0;
`
const ID = styled.p`
  font-size: 12px;
  margin: 5px 0 0;
  font-weight: 700;
  opacity: .4;
`
