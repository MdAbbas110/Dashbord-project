import AsideBar from './AsideBar';
import TopPagesList from './TopPagesList';

const UserCompletion = () => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <AsideBar />
      <section style={{ width: '100%', flexGrow: 1, padding: '20px' }}>
        <nav>
          <div
            style={{
              display: 'flex',
              gap: '15px',
              color: '#0F1D40',
              padding: '10px 20px',
              fontSize: '18px',
              fontWeight: '500',
              justifyContent: 'start',
              alignItems: 'center',
              borderBottom: '1px solid lightgray',
              height: '60px',
            }}
          >
            <img src="../public/home-2.svg" alt="/" />
            <h1>Data Dump</h1>
          </div>
        </nav>

        <div
          style={{
            height: '60px',
            display: 'flex',
            justifyContent: 'space-around',
            margin: '10px',
          }}
        >
          <TopPagesList />
          <TopPagesList />
          <TopPagesList />
          <TopPagesList />
        </div>

        <div style={{ display: 'flex ', justifyContent: 'space-between' }}>
          <div>
            <input type="text" />
            <h3>Filer</h3>
            <h4>No filter</h4>
          </div>
          <div>
            <button>Sort by</button>
            <button>Export</button>
          </div>
        </div>

        <div>
          <h2>User</h2>
        </div>
      </section>
    </div>
  );
};

export default UserCompletion;
