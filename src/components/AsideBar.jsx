const AsideBar = () => {
  return (
    <aside style={{ backgroundColor: 'black', minWidth: '260px', padding: 20 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          borderBottom: '2px solid darkgray',
          height: '60px',
        }}
      >
        <h1
          style={{
            color: '#7B61FF',
            fontSize: '24px',
          }}
        >
          Eubrics
        </h1>
        <img src="../public/mcd-logo.png" alt="/" />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '85%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 20,
            gap: 5,
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              color: 'white',
              paddingLeft: '20px',
              borderRadius: '12px',
              backgroundColor: '#17171C',
            }}
          >
            <img src="../public/home.svg" alt="/" />
            <h1>Dashboard</h1>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              color: 'gray',
              paddingLeft: '20px',
              borderRadius: '12px',
            }}
          >
            <img src="../public/analytics.svg" alt="/" />
            <h1>Analytics</h1>
          </div>

          <div
            style={{
              margin: '0px 25px',
              color: 'gray',
              fontSize: '18px',
            }}
          >
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                listStyle: 'none',
              }}
            >
              <li>Data Dump</li>
              <li>Journey Analytics</li>
              <li>User feedback</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            padding: '20px',
            flexDirection: 'column',
            fontSize: '14px',
            borderBottom: '0.5px solid darkgray',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '15px',
              color: 'gray',
            }}
          >
            <img src="../public/settings.svg" alt="/" />
            <h1>Setting</h1>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '15px',
              color: 'gray',
            }}
          >
            <img src="../public/help.svg" alt="/" />
            <h1>Help</h1>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideBar;
