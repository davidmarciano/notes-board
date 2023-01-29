import React, { memo } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.fieldset`
  display: flex;
  height: 250px;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;

const Title = styled.legend`
  padding: 0px 10px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

interface Props {
  onClick(): void;
};

const AddButton = ({onClick} : Props) => {
  console.log('AddButton render!');
  return (
    <Wrapper onClick={onClick}>
      <Title>Add new note</Title>
      <Content>
        <FontAwesomeIcon icon={faEnvelope} size={'10x'}/>
      </Content>
    </Wrapper>
  )
}

export default memo(AddButton);
