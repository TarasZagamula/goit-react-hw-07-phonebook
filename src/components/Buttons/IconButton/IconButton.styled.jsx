import styled from '@emotion/styled';
import { IoMdRemoveCircle } from 'react-icons/io';

// export const DeletButtonStyled = styled.button`
// position: absolute;
// right: 2px;
// bottom: 2px;
// padding: 0;
//   cursor: pointer;
// `;

export const DeletButtonIcon = styled(IoMdRemoveCircle)`
  fill: darkgray;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 2px;
  bottom: 2px;
  :hover, :focus {
    fill: red;
    cursor: pointer;
  }
`;
