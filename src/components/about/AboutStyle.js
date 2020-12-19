import styled from 'styled-components'

export const UserWrapper = styled.div`
  margin: 10% auto;
`;

export const UserDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-bottom: 10%;
  
  h1{
    font-size: 4.2em;
    font-weight: bold;
    color: #ffffff;
    span{
      color: #00a69c;
    }
    @media (max-width: 700px) {
      font-size: 3em;
    }
  }
  
  #hand-shake{
    animation-name: mymove;
    display: inline-block ;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    }
    
  @keyframes mymove {
      0% {
          transform: rotate(-10deg);
      }
      50% {
          transform: rotate(-30deg);
      }
      100%{
          transform: rotate(-10deg);
      }
    }
  

  p{
    color: #ffffff;
    max-width: 90%;
    font-weight: 300;
    font-size: 26px;
    line-height: 1.3;
    margin-bottom: 15%;
  }
  canvas{
    max-width: 30%;
    // overflow: auto;
  }
  
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    img{
      max-width: 100%;
    }
    p{
      max-width: 100%;
      font-size: 19px;
    }
    canvas{
     
      max-width: 50%;
      display : block;
      margin : auto;
    }
  }
  
`;
export const DownloadButton = styled.a`
  width: 298px;
  height: 61px;
  background-color: rgba(188, 188, 188, 0.1);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: CENTER;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  :hover{
    color: #00a69c;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`
export const UserTopic = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
