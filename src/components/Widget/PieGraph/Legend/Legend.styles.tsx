import styled from "styled-components";

export const LegendContainer = styled.div`
  /* background-color: chocolate; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 372px;
  height: 143px;
  margin-top: 15px;
`;

export const LegendItem = styled.div`
  /* background-color: #631ed2; */
  display: flex;
  align-items: center;
  height: 20px;
  width: 372px;
  justify-content: flex-start;
`;
export const LegendItemData = styled.div`
  /* background-color: #21d21e; */
  display: flex;
  align-items: center;
  height: 20px;
  width: 372px;
  justify-content: space-between;
`;

export const LegendBullet = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${(props) => props.color};
  margin: 0px;
  border-radius: 10px;
`;

export const LegendText = styled.div`
  margin-left: 18.07px;
  font-size: 14px;
  text-align: left;
  color: #030035;
`;
export const LegendValue = styled.div`
  font-size: 15px;
  color: #9fa2b4;
  align-self: right;
  justify-self: end;
`;
