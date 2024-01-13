const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="auth-container">
        <div className="flex flex-col justify-around px-6 lg:px-8 bg-cyan-300	">
          <div className="sm:mx-auto sm:w-full">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome to Admin Accelerator Panel
            </h2>
            <p className="text-center text-xl leading-9 tracking-tight text-gray-600">
              Admin Accelerator offers the most convenient and reliable way to
              get around town
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 lg:px-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
