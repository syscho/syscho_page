import styled from "styled-components";
import defaultIMG from "../../../assets/img/bg1.jpg";
const Styledbg = styled.header`
  min-height: calc(50vh - 70px);
  background: url(${(props) => (props.img ? props.img : defaultIMG)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Styledbg;
