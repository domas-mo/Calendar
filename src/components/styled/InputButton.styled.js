import styled from 'styled-components';

const StyledInputButton = styled.input`
    margin: 20px auto;
    margin-bottom: 40px;
    color: #185bf1;
    letter-spacing: 2px;
    font-size: 20px;
    padding: 20px 30px;
    cursor: pointer;
    border: none;
    background: #e9eaee;
    border-radius: 20px;
    box-shadow: 5.11px 5.11px 21px #777779, -5.11px -5.11px 21px #FFFFFF;

    &:hover {
        filter: brightness(0.9);
    }
`;

export default StyledInputButton;