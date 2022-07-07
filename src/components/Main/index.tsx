import * as S from './styles'
const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS, Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo>
      <img
        src="/img/logo.png"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
    </S.Logo>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration>
      <S.Illustration>
        <img
          src="/img/illustration.webp"
          alt="Um desenvolvedor de frente para a tela do computador com código"
        />
      </S.Illustration>
    </S.Illustration>
  </S.Wrapper>
)

export default Main
