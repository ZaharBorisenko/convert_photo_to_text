import styled from "styled-components";

export const Info = () => {
    return (
        <Wrapper>
            <Title>Конвертер изображений в текст</Title>
            <Subtitle>
                Наш онлайн сервис оптического распознавания символов (OCR)
                позволяет пользователям легко извлекать текст из изображений
                с помощью конвертера изображений в текст.
                Загрузите фотографию и мгновенно получите текст.
            </Subtitle>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`
const Title = styled.div`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin-bottom: 20px;
`
const Subtitle = styled.div`
  max-width: 56rem;
  text-align:center;
  margin: 0 auto 30px auto;
  font-size: 1.125rem;
  line-height: 1.75rem;
`
