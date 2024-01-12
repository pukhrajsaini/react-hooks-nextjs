import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Login",
  description: "NextJs",
};

const LoginLayout = ({ children }: { children: React.ReactNode }) => (
  <> {children} </>
);
export default LoginLayout;
