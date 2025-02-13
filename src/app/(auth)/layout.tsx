import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen justify-center flex flex-col items-center mt-auto">
      {children}
    </div>
  );
};

export default AuthLayout;
