import { useId } from "react";

import Input from "../Input";

export default function Combobox({
  children,
  ...props
}: React.ComponentProps<typeof Input> & { children?: React.ReactNode }) {
  const datalistID = useId();
  return (
    <>
      <Input {...props} list={datalistID} />
      {children && <datalist id={datalistID}>{children}</datalist>}
    </>
  );
}
