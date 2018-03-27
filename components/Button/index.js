import styled from 'styled-components';

export const PrimaryButton = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: #1E90FF;
    border: 2px solid #1E90FF;
`;

export const RemoveButton = PrimaryButton.extend`
    border: 2px solid #FF4500;
    color: #FF4500;
`;