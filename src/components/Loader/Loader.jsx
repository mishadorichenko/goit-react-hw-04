import { DNA } from 'react-loader-spinner';

function Loader({ isLoading }) {
  return (
    <>
      <DNA visible={isLoading} />
      <DNA visible={isLoading} />
      <DNA visible={isLoading} />
      <DNA visible={isLoading} />
      <DNA visible={isLoading} />
    </>
  );
}

export default Loader;
