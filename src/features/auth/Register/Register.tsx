import { authThunks } from "features/auth/auth.slice";
import s from "features/auth/Register/styles.module.css";
import { useAppDispatch } from "common/hooks";
import { useEffect } from "react";
import {commonActions} from "common/actions/unhandle.action";
import {useActions} from "../../../common/hooks/useActions";

export const Register = () => {
  // const dispatch = useAppDispatch();
  const {register, unHandleAction} = useActions({...authThunks, ...commonActions})
  // задиспатченные экшены (экшены, асик-экшены(санки))

  useEffect(() => {
    // dispatch(unHandleAction());
    unHandleAction()
  }, []);

  const registerHandler = () => {
    const payload = {
      email: "safrondev2@gmail.com",
      password: "12345678",
    };
    // dispatch(authThunks.register(payload));
    register(payload)
  };

  return (
    <div className={s.container}>
      <h1>Register</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  );
};
