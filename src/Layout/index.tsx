import { PropsWithChildren } from "react";
import Header from "../shared/components/Header";

const Layout = ({
  children,
}: PropsWithChildren) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
