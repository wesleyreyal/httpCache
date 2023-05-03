import React, {useState} from "react";

type inputProps = {
  placeholder: string;
  labelText: string;
  password?: boolean;
  optional?: boolean;
}

export const Input: React.FC<inputProps> = ({placeholder, labelText, password,optional}) => {
  return (
    <div className="form-control max-w-xs w-full m-auto font-medium">
      <label>
        {labelText} {optional ? '(optional)' : ''}
        <input
          type={password ? 'password' : 'text'}
          className="input input-bordered w-full rounded-lg border-2 border-argentinian_blue p-2 placeholder:text-sm pl-4"
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}
