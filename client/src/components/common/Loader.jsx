import '../../styles/loader.scss';

const Loader = ({ style }) => {
  return (
    <div className="loader__container" style={{ ...style }}>
      <div className="loader" />
    </div>
  );
};

const LoaderWhite = ({ style }) => {
  return (
    <div className="loader__container" style={{ ...style }}>
      <div className="loaderWhite" />
    </div>
  );
};

const Loader3 = () => {
  return <div className="loader" />;
};
export const SmallLoader = () => {
  return <div className="loader2" />;
};
export const SmallLoaderWhite = () => {
  return (
    <div
      className="loader2"
      style={{
        // borderColor: "white",
        borderTop: '4px solid white',
        borderLeft: '4px solid white',
        borderRight: '4px solid white',
      }}
    />
  );
};

const Loader2 = () => {
  return (
    <div style={{}}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span className="loading__text">loading</span>
    </div>
  );
};
const Loader4 = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const Loader5 = () => {
  return (
    <div className="lds-ellipsismain">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const Loader6 = () => {
  return (
    <div className="lds-ellipsismainStated6">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { Loader, LoaderWhite, Loader2, Loader3, Loader4, Loader5, Loader6 };
