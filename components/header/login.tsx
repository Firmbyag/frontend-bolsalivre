"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CPFInput, PhoneInput } from "../basecomponents/input";
import { toast } from "react-toastify";
import {
  useLoginMutation,
  useRegisterMutation,
} from "@/lib/features/auth/authApi";
import { useAppDispatch, RootState } from "@/lib/store";
import { setCredentials } from "@/lib/features/auth/authSlice";
import { setUserId, setUserRole } from "@/utils/localstorage";
import { isEmpty } from "@/utils/is-empty";
import { Button } from "@material-tailwind/react";
import { IoCloseCircle } from "react-icons/io5";

interface ToEnterProps {
  isShow: boolean;
  setShow: any;
}

const ToEnter: React.FC<ToEnterProps> = ({ isShow, setShow }) => {
  const [name, setName] = useState<string>("");
  const [nameVal, setNameVal] = useState<boolean>(false);
  const [cpf, setCPF] = useState<string>("");
  const [cpfVal, setCPFVal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailVal, setEmailVal] = useState<boolean>(false);
  const [role, setRole] = useState<string>("customer");
  const [password, setPassword] = useState<string>("");
  const [passwordVal, setPasswordVal] = useState<boolean>(false);
  const [loginInput, setLogin] = useState<string>("");
  const [loginVal, setLoginVal] = useState<boolean>(false);
  const [statuss, setStatus] = useState<boolean>(false);
  const [roles, setRoles] = useState<any>([]);

  const [login, { isLoading }] = useLoginMutation();
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchRole = async () => {
      const url = process.env.NEXT_PUBLIC_BACKEND_DEV + "/api/roles";
      const role = await fetch(url);
      const data = await role.json();
      setRoles(data);
    };

    fetchRole();
  }, []);

  const handleLogin = async () => {
    if (!statuss) {
      const newUserData = {
        name: name,
        email: email,
        cpf: cpf,
        role: role,
        password: password,
        password2: password,
      };

      try {
        const { name } = await register(newUserData).unwrap();
        if (name) {
          setStatus(!statuss);
          toast.success("Successfully registered ....");
          setCPF("");
          setName("");
          setEmail("");
          setPassword("");
        }
      } catch (error: any) {
        toast.error(error);
      }
    } else {
      const data = {
        email: loginInput,
        password: password,
      };
      try {
        const { token, role, _id } = await login(data).unwrap();
        if (token) {
          dispatch(setCredentials({ token }));
          toast.success("Loginned exactly");
          setUserRole(role);
          setUserId(_id);
          setShow(!isShow);
        } else {
          toast.error("Unregistered Email!");
        }
      } catch (error) {
        toast.error("Failed to login: ", error);
      }
    }
  };

  return (
    <div
      className={`${
        isShow ? "flex" : "hidden"
      } fixed w-screen h-screen top-0 left-0 justify-center items-center z-20`}
    >
      <div className="absolute w-screen h-screen bg-slate-700 opacity-80"></div>
      <div className="flex flex-col gap-4 mb-6 md:grid md:grid-cols-2 bg-white rounded-md p-5 z-50 max-w-lg md:max-w-2xl mx-4 md:mx-0">
        <IoCloseCircle size={18} color="gray" onClick={() => setShow(false)} />
        {!statuss ? (
          <>
            <div className="col-span-2">
              <div>
                <label
                  htmlFor="filled_success"
                  className={`font-bold text-gray-700 text-sm px-2 ${
                    nameVal === true &&
                    (name !== "" ? "text-green-500" : "text-red-500")
                  }`}
                >
                  Nome completo
                </label>
                <span className="text-gray-600 text-xs"> (obrigatório) </span>
                <input
                  type="text"
                  aria-describedby="filled_success_help"
                  className="block text-sm text-gray-600 rounded-full px-16 py-2 w-full focus:text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
                  placeholder="Digite seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setNameVal(true)}
                />
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <label
                  htmlFor="filled_success"
                  className={`font-bold text-gray-700 text-sm px-2 ${
                    cpfVal === true &&
                    (cpf !== "" ? "text-green-500" : "text-red-500")
                  }`}
                >
                  CPF
                </label>
                <span className="text-gray-600 text-xs"> (obrigatório) </span>
                <CPFInput value={cpf} onChange={setCPF} />
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <label
                  htmlFor="filled_success"
                  className={`font-bold text-gray-700 text-sm px-2 ${
                    emailVal === true &&
                    (email.includes("@") && email.includes(".co")
                      ? "text-green-500"
                      : "text-red-500")
                  }`}
                >
                  E-mail
                </label>
                <span className="text-gray-600 text-xs"> (obrigatório) </span>
                <input
                  type="text"
                  aria-describedby="filled_success_help"
                  className="block text-sm rounded-full px-16 py-2 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailVal(true)}
                />
              </div>
            </div>
            {/*<div className="col-span-2">
              <div>
                <label
                  htmlFor="filled_success"
                  className={`font-bold text-gray-700 text-sm px-2`}
                >
                  Cargo
                </label>
                <span className="text-gray-600 text-xs"> (obrigatório) </span>
                <select
                  className="block text-sm rounded-full px-16 py-2 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option key={0} value="">
                    Selecione o Cargo
                  </option>
                  {roles &&
                    roles.leng > 0 &&
                    roles?.map((role: any) => (
                      <option key={role.id} value={role.role}>
                        {role.role}
                      </option>
                    ))}
                </select>
              </div>
            </div> */}
          </>
        ) : (
          <div className="col-span-2">
            <div>
              <label
                htmlFor="filled_success"
                className={`font-bold text-gray-700 text-sm px-2 ${
                  loginVal === true &&
                  (loginInput !== "" ? "text-green-500" : "text-red-500")
                }`}
              >
                E-mail ou CPF
              </label>
              <span className="text-gray-600 text-xs"> (obrigatório) </span>
              <input
                type="text"
                aria-describedby="filled_success_help"
                className="block text-sm text-gray-600 rounded-full px-16 py-2 w-full force:text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
                placeholder="Digite seu E-mail ou CPF"
                value={loginInput}
                onChange={(e) => setLogin(e.target.value)}
                onBlur={() => setLoginVal(true)}
              />
            </div>
          </div>
        )}
        <div className="col-span-2">
          <div>
            <label
              htmlFor="filled_success"
              className={`font-bold text-gray-700 text-sm px-2 ${
                passwordVal === true &&
                (password !== "" ? "text-green-500" : "text-red-500")
              }`}
            >
              Senha
            </label>
            <span className="text-gray-600 text-xs"> (obrigatório) </span>
            <div className="relative">
              <input
                type="password"
                aria-describedby="filled_success_help"
                className="block text-sm rounded-full px-16 py-2 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 border-slate-500 appearance-none peer"
                placeholder="Digite sua senha"
                maxLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordVal(true)}
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            handleLogin();
          }}
          className="bg-orange-600 col-span-2 w-full text-white py-2 rounded-full hover:bg-orange-700"
        >
          {statuss ? "Faça o Login" : "Criar conta"}
        </button>
        <hr className="col-span-2" />
        <button
          className=" col-span-2 rounded-full border border-orange-500 p-2 w-auto bg-white text-orange-500"
          onClick={() => {
            setStatus(!statuss);
          }}
        >
          {!statuss ? "Faça o Login" : "Criar conta"}
        </button>
      </div>
    </div>
  );
};

export default ToEnter;
