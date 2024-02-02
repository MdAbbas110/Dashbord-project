import Aside from './AsideBar';

const Journey = () => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <Aside />
      <div
        style={{
          flexGrow: '1',
          width: '100%',
          padding: '20px',
        }}
      >
        <h1>Coming soon</h1>
      </div>
    </div>
  );
};

export default Journey;
