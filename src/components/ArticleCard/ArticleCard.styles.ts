import styled from "styled-components";
import { device } from "../../util/breakpoints";

export const Card = styled.div`
  display: flex;
  background-color: #ffffff;
  width: calc(100%-2px);
  max-width: 988px;
  flex-direction: row;
  border-radius: 20px;
  border: 1px solid #d9dbe9;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }

  @media ${device.tablet} {
    gap: 0px;
  }
`;

export const PhotoContainer = styled.img<{ src: string; alt: string }>`
  border-radius: 20px 0px 0px 20px;
`;

export const DataContainer = styled.div`
  border-radius: 0px 0px 20px 20px;
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${device.mobile} {
    height: 100%;
    align-items: center;
    gap: 10px;
  }

  @media ${device.tablet} {
    align-items: center;
    justify-content: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  width: calc(100% - 32px);
  height: 100%;
  padding: 8px 0px 8px 0px;
  flex-direction: column;
  gap: 19px;
  justify-content: space-evenly;

  @media ${device.mobile} {
    gap: 10px;
    align-items: center;
    width: calc(100% - 32px);
    padding: 8px 0px 12px 0px;
  }

  @media ${device.tablet} {
    width: calc(100% - 34px);
    padding: none;
  }
`;

export const Container = styled.div<{ children?: React.ReactNode }>``;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 226px;
  align-self: flex-end;

  @media ${device.mobile} {
    width: 100%;
    max-width: none;
  }
`;
