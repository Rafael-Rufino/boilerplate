import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`
export const Logo = styled.div`
  img {
    width: 60px;
    height: 60px;
    margin-bottom: 2rem;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.div`
  img {
    margin-top: 3rem;
    border-radius: 8px;
    width: min(50rem, 100%);
    height: 300px;
  }
`
