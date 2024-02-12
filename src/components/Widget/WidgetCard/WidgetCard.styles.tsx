import styled from "styled-components";

export const Card = styled.div<{ type: string }>`
  background-color: #ffffff;
  height: 355px;
  width: 412px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: ${(props) =>
    props.type == "pie" ? "25px 15px 0px 25px" : "25px 15px 20px 25px"};
  box-shadow: 0px 32px 64px 0px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--grayscale-line, #d9dbe9);
  background: var(--grayscale-white, #fff);
  overflow-y: ${(props) => (props.type == "pie" ? "auto" : "visible")};
  justify-content: ${(props) =>
    props.type == "no-data"
      ? "flex-start"
      : props.type == "monthes"
      ? "space-between"
      : "none"};
`;
