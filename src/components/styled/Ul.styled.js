import styled from "styled-components";

const StyledUl = styled.ul`
    padding: 10px;
	margin: auto;
    width: 49vw;
    display: flex;
    flex-direction: column;
    background: #e9eaee;
    border-radius: 20px;
    box-shadow: 5.11px 5.11px 21px #777779, -5.11px -5.11px 21px #FFFFFF;
    list-style-type: none;

    li {
        padding: 15px;
        margin: 10px auto;
        color: #676b76;
        background: #e9eaee;
        border-radius: 10px;
        box-shadow: 5.11px 5.11px 21px #777779, -5.11px -5.11px 21px #FFFFFF;
        text-align: center;
        text-decoration: none;
    }

    li:hover {
        filter: brightness(0.9);
    }

    a {
        text-decoration: none;
        color: #185bf1;
    }
`

export default StyledUl;