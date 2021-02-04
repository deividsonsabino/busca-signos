import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;
  @media (min-width: 200px) {
   max-width: 1000px;
   margin: 0 auto;
  }
`;

export const Card = styled.div`
    display:'flex';
    flex-direction:'row';
    align-items:'center';
    justify-content:'center';
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(5px);
    padding:20px;
    margin-top:50px;
    border-radius:20px;
    color:#FFFFFF;
`
export const Image = styled.img`
    width: 12%;
    float:right;
`;

export const Title = styled.h1`
`
export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  border-radius:10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Subtitle = styled.div`
`
export const CardHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    margin:10px;
`