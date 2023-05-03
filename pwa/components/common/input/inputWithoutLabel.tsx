import React, {useState} from "react";

type inputProps = {
    defaultValue?: string;
    onChange?: (value: boolean) => void;
}

export const InputWithoutLabel: React.FC<inputProps> = ({defaultValue, onChange}) => {
    const [change, setChange] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChange(true);
      onChange?.(true)
    };

  return (
    <div className="form-control max-w-xs m-auto">
      <input
        type="text"
        className="input input-bordered w-full rounded-lg border-2 border-argentinian_blue text-center"
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </div>
  );
}
