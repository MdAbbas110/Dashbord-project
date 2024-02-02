import AsideBar from './AsideBar';

export const Feedback = () => {
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
      <AsideBar />
      <div
        style={{
          flexGrow: '1',
          width: '100%',
          padding: '20px',
        }}
      >
        <h1>Your FeedBak </h1>
      </div>
    </div>
  );
};
