import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface LoginFormStateType {
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultValues: LoginFormStateType = {
  email: "",
  password: "",
  confirmPassword: "",
};

const schema = Yup.object({
  email: Yup.string().trim("not trim"),
  password: Yup.string().required("password is requried"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), "not compare"]),
});

type FormType = Yup.InferType<typeof schema>;

export default function () {
  const { register, handleSubmit, formState } = useForm<FormType>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return { register, handleSubmit, formState };
}
