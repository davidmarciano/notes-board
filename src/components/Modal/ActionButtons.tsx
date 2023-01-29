import React, { memo } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid #000000;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding:0px 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;

interface Props {
  onPostClick: () => void;
  onCancelClick: () => void;
}

const ActionButtons = ({ onPostClick, onCancelClick }: Props) => {
  return (
    <Wrapper>
      <Button onClick={onCancelClick}>Cancel</Button>
      <Button onClick={onPostClick}>Post</Button>
    </Wrapper>
  )
}

export default memo(ActionButtons);
