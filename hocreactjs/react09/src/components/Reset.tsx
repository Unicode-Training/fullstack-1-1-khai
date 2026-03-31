import { SetStateAction, Dispatch } from "react";

type Props = {
  onClick: () => void;
  //   setMessage: (msg: string) => void;
  setMessage: Dispatch<SetStateAction<string>>;
};
export default function Reset({ onClick, setMessage }: Props) {
  return (
    <div>
      <button onClick={onClick}>Reset</button>
      <button onClick={() => setMessage("Ahihi")}>Click me</button>
    </div>
  );
}
