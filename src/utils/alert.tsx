import { toast } from "react-toastify";

export const danger = (message: string, ttl = 1000) => {
  return toast.error(message, {
    position: "top-center",
    autoClose: ttl,
    theme: "colored",
  });
};

export const success = (message: string, ttl = 1000) => {
  return toast.success(message, {
    position: "top-center",
    autoClose: ttl,
    theme: "colored",
  });
};

export const warn = (message: string, ttl = 1000) => {
  return toast.warn(message, {
    position: "top-center",
    autoClose: ttl,
    theme: "colored",
  });
};
