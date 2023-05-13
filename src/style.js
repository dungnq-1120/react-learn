import { Button, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import styled, { css } from "styled-components";

export const HeaderLoginModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid black;

  button {
    margin: 0 12px;
    border: none;
    background: none;
  }

  ${(props) =>
    props.isSignIn
      ? css`
          button:first-child {
            text-decoration: underline;
            color: blue;
          }
          button:last-child {
            color: black;
          }
        `
      : css`
          button:first-child {
            color: black;
          }
          button:last-child {
            text-decoration: underline;
            color: blue;
          }
        `}
`;

export const InputCustom = styled(FormItem)`
  input {
    border-radius: 10px !important;
    padding: 8px 12px !important;
    background: none !important;
  }

  span {
    border-radius: 10px !important;
    padding: 0 !important;
  }
`;

export const SignInWrapper = styled.div`
  padding: 20px;
  h1 {
    margin: 16px 0;
  }
`;

export const ModalCustom = styled(Modal)`
  .ant-modal-close {
    inset-inline-end: unset;
    top: 20px !important;
    left: 40px;
  }

  .ant-modal-content {
    padding: 0;
    border-radius: 25px !important;
  }

  .ant-modal-header {
    border-radius: 25px !important;
  }
`;

export const ButtonCustom = styled(Button)`
  width: 100%;
  button {
    padding: 8px 12px !important;
  }
`;
