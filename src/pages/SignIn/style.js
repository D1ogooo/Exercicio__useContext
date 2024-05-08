import styled from 'styled-components'

export const Container = styled.div`
 width: 90%;
 margin: 0 auto;

 form {
  h1 {
   text-align: center;
   margin-top: 13rem;
   margin-bottom: 1.5rem;
  }

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  input[type='email'], input[type='password'] {
   width: 16rem;
   height: 30px;
   padding: 5px;
   margin-top: 8px;
  }
 }
`

export const ButtonSubmit = styled.button`
 width: 16rem;
 height: 30px;
 margin-top: 8px;
 cursor: pointer;
`