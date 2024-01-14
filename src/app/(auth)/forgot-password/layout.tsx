import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Forgot Password",
  description: "NextJs",
};

const ForgotPasswordLayout = ({ children }: { children: React.ReactNode }) => (
  <> {children} </>
);
export default ForgotPasswordLayout;
