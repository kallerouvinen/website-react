import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 244.5px;
  height: 121.5px;
  @media (min-width: 600px) {
    width: 326px;
    height: 162px;
  }
  @media (min-width: 960px) {
    width: 326px;
    height: 162px;
  }
  @media (min-width: 1280px) {
    width: 489px;
    height: 243px;
  }
  // Original values for reference
  //   width: 652,
  //   height: 324,
`;

const MonitorOuter = styled.div`
  display: flex;
  width: 78.53%;
  height: 88.89%;
  padding: 0.92% 0.92% 2.45% 0.92%;
  background-color: #18181b;
  border-top-left-radius: 1.15% 1.94%;
  border-top-right-radius: 1.15% 1.94%;
  border-bottom-left-radius: 0.38% 4.52%;
  border-bottom-right-radius: 0.38% 4.52%;
`;

const MonitorInner = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
  background-color: #fff;
`;

const Keyboard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1.23%;
  border-top-left-radius: 0.31% 50%;
  border-top-right-radius: 0.31% 50%;
  background-image: linear-gradient(
    to right,
    #18181b,
    #d9d9d9 2%,
    #d9d9d9 4%,
    #a6a6b0 6%,
    #c9c9cf 50%,
    #a6a6b0 94%,
    #d9d9d9 96%,
    #d9d9d9 98%,
    #18181b 100%
  );
`;

const Touchpad = styled.div`
  width: 18.4%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    #18181b,
    #60606c 4%,
    #aeaeb7 20%,
    #aeaeb7 80%,
    #60606c 96%,
    #18181b 100%
  );
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3.09%;
  border-bottom-left-radius: 15.34% 100%;
  border-bottom-right-radius: 15.34% 100%;
  background-image: linear-gradient(#54545f, #000000);
  box-shadow: 0px 0.140625em 0.1875em #808080;
  @media (min-width: 600px) {
    box-shadow: 0px 0.1875em 0.25em #808080;
  }
  @media (min-width: 960px) {
    box-shadow: 0px 0.1875em 0.25em #808080;
  }
  @media (min-width: 1280px) {
    box-shadow: 0px 0.28125em 0.375em #808080;
  }
  // Original values for reference
  //   box-shadow: 0px 0.375em 0.5em #808080;
`;

interface LaptopProps {
  component?: string;
}

function Laptop({ component }: LaptopProps) {
  if (!component) {
    return null;
  }

  return (
    <Container>
      <MonitorOuter>
        <MonitorInner>
          <video width="100%" height="100%" autoPlay loop muted playsInline>
            <source src={`assets/${component}`} type="video/mp4" />
          </video>
        </MonitorInner>
      </MonitorOuter>
      <Keyboard>
        <Touchpad />
      </Keyboard>
      <Bottom />
    </Container>
  );
}

export default Laptop;
