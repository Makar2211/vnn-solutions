export interface PropsInputs {
  style: string;
  type: string;
  placeholder: string;
}

export interface PropsButtom {
  style: string;
  title: string;
  condition?: () => void;
  type?: boolean;
}

export interface PropsModal {
  setIsOpen?: () => void;
  inputs: PropsInputs[];
  open?: boolean;
}
