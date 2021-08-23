import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled.div`
  flex-direction: column;
`;

const Name = styled.h5`
  font-family: "Archivo", sans-serif;
  font-size: 1rem;
  color: white;
  text-align: left;
  margin: 0.5rem;
`;

const Avatar = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0.5rem;
`;

const Description = styled.div`
  font-family: "Archivo", sans-serif;
  flex-direction: column;
  font-size: 12px;
  text-align: left;
  color: white;
  margin: 0.5rem;
`;

const TrendingEvent = ({ data }) => {
  return (
    <Wrapper>
      <Avatar src={data.image} />
      <Content>
        <Name>{data.name}</Name>
        <Description>{data.description}</Description>
      </Content>
    </Wrapper>
  );
};

export default TrendingEvent;
