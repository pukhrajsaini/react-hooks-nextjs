"use client";
import { useFormik } from "formik";
import * as yup from "yup";
import { httpPost, success } from "@/utils";

export default function LoginForm() {
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const { errors, touched, handleBlur, handleChange, handleSubmit } = useFormik(
    {
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (res) => {
        const { message, result } = await httpPost("accounts/login", res);
        success(message);
      },
    }
  );

  const inputClass =
    "block  px-0.5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
  const errorInputClass = "border-2 border-rose-600";

  return (
    <div className="flex flex-col justify-center px-6 lg:px-8">
      <div className="sm:mx-auto">
        <img
          className="mx-auto h-10 w-auto"
          src="logo.svg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome to Admin Accelerator Panel
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  touched.email && errors.email
                    ? `${inputClass} ${errorInputClass}`
                    : inputClass
                }
              />
            </div>

            <small className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {touched.email && errors.email ? errors.email : ""}
            </small>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="/forgot-password"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  touched.password && errors.password
                    ? `${inputClass} ${errorInputClass}`
                    : inputClass
                }
              />
            </div>
            <small className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {touched.password && errors.password ? errors.password : ""}
            </small>
          </div>

          <div>
            <button
              type="submit"
              disabled={
                Object.keys(errors).length > 0 ||
                Object.keys(touched).length === 0
              }
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
