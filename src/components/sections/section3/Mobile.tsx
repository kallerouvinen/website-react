import { ReactNode } from "react";
import styled from "styled-components";

const Bezel = styled.div`
  display: flex;
  padding: 2.97%;
  background-color: #242429;
  border-top-left-radius: 11.85% 5.93%;
  border-top-right-radius: 11.85% 5.93%;
  border-bottom-left-radius: 11.85% 5.93%;
  border-bottom-right-radius: 11.85% 5.93%;
  width: 50.5px;
  height: 101.5px;
  box-shadow: 0px 0.140625em 0.234375em -0.09375em #808080;
  @media (min-width: 600px) {
    width: 67.5px;
    height: 135px;
    box-shadow: 0px 0.1875em 0.3125em -0.125em #808080;
  }
  @media (min-width: 960px) {
    width: 67.5px;
    height: 135px;
    box-shadow: 0px 0.1875em 0.3125em -0.125em #808080;
  }
  @media (min-width: 1280px) {
    width: 101.25px;
    height: 202.5px;
    box-shadow: 0px 0.28125em 0.46875em -0.1875em #808080;
  }
  // Original values for reference:
  //   width: 135, // 9 * 15
  //   height: 270, // 18 * 15
  //   boxShadow: "0px 0.375em 0.625em -0.25em #808080",
`;

const Screen = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  border-top-left-radius: 8.89% 4.44%;
  border-top-right-radius: 8.89% 4.44%;
  border-bottom-left-radius: 8.89% 4.44%;
  border-bottom-right-radius: 8.89% 4.44%;
  overflow: hidden;
`;

interface Props {
  component?: ReactNode;
}

function Mobile(props: Props) {
  const { component = null } = props;

  return (
    <Bezel>
      <Screen>
        <video width="100%" height="100%" autoPlay loop muted playsInline>
          <source
            src={`${process.env.PUBLIC_URL}/assets/${component}`}
            type="video/mp4"
          />
        </video>
      </Screen>
    </Bezel>
  );
}

export default Mobile;
