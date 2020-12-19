import styled from 'styled-components'

export const TimelineContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`

export const Timeline = styled.div`
  width: 100%;
  height: auto;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  
  ul {
    list-style: none;
  }
  ul li {
    padding: 20px;
    background-color: #0f234d;
    color: white;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  ul li:last-child {
  margin-bottom: 0;
}
@media only screen and (min-width: 768px) {
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 51.3%;
    transform: translateX(-51.3%);
    width: 2px;
    height: 100%;
    background-color: gray;
  }
  ul li {
    width: 50%;
    position: relative;
    margin-bottom: 50px;
  }
  ul li:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-30px);
    border-radius: 5px 0px 5px 5px;
  }
  ul li:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(30px);
    border-radius: 0px 5px 5px 5px;
  }
  ul li::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: gray;
    top: 0px;
  }
  ul li:nth-child(odd)::before {
    transform: translate(50%, -50%);
    right: -30px;
  }
  ul li:nth-child(even)::before {
    transform: translate(-50%, -50%);
    left: -30px;
  }
  ul li:hover::before {
    background-color: aqua;
  }
}


`

export const TimelineContent = styled.div`

  h1 {
    font-weight: 500;
    font-size: 35px;
    line-height: 30px;
  }
  p {
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
  }
  .date {
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 10px;
    letter-spacing: 2px;
    }
    @media only screen and (min-width: 768px) {
      .date {
          position: absolute;
          top: -30px;
      }
    }
`

export const ExperienceWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  color: #eeeeee;
  padding: 5% 0;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const WorkWrapper = styled.div`
  flex: 2;
  margin-right: 8%;
  h1{
    font-weight: 300;
    padding-bottom: 35px;
    margin-bottom: 5px;
    border-bottom: solid 1px #ffffff;
  }
  @media (max-width: 700px) {
    margin-right: 0;
  }
`
