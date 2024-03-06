import styled from "styled-components";

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 372px;
  height: 100px;
  margin-top: 15px;
  gap: 7px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    position: absolute;
    width: 10px;
    height: 10px;
    right: -10; /* Position scrollbar to the right */
  }

  ::-webkit-scrollbar-thumb {
    background: #9ea1bb;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }


  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  ::-webkit-scrollbar-button {
    display: block;
  }
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  width: 372px;
  justify-content: flex-start;
`;
export const LegendItemData = styled.div`
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
  margin-right: 20px;
`;
