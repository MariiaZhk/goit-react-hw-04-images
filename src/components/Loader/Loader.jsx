import { RotatingLines } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <RotatingLines
      strokeColor="#5daef1"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
};
