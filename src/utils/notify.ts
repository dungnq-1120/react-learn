import { notification } from 'antd';

export const showAlertNotice = ({ type, message }: {
  type: "success" | "error",
  message: string
} ) => {
  return notification[type]({
    duration: 5,
    message,
  });
};
