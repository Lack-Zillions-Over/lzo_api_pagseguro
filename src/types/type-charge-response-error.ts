import { TypeErrorMessages } from ".";

declare type Type = {
  error_messages?: TypeErrorMessages[];
  message?: string;
};

export default Type;