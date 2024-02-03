import { NavLink } from 'react-router-dom';

const AsideBar = () => {
  return (
    <aside
      style={{
        backgroundColor: 'black',
        minWidth: '260px',
        padding: 20,
        height: '100dvh',
      }}
    >
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
        <img src="/mcd-logo.png" alt="/" />
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
            fontSize: '16px',

            cursor: 'pointer',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              fontWeight: '600',
              fontSize: '20px',
              paddingLeft: '20px',
            }}
          >
            <img src="/home.svg" alt="/" />

            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? 'dash' : '';
              }}
            >
              Dashboard
            </NavLink>
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
            <img src="/analytics.svg" alt="/" />
            <h2>Analytics</h2>
          </div>

          <div
            style={{
              margin: '0px 20px',
              color: 'gray',
              fontSize: '20px',
            }}
          >
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                listStyle: 'none',
                color: 'gray',
              }}
            >
              <NavLink
                to="/users"
                className={({ isActive }) => {
                  return isActive ? 'color' : '';
                }}
              >
                Data Dump
              </NavLink>

              <NavLink
                to="/journey"
                className={({ isActive }) => {
                  return isActive ? 'color' : '';
                }}
              >
                Journey Analytics
              </NavLink>
              <NavLink
                to="/feedback"
                className={({ isActive }) => {
                  return isActive ? 'color' : '';
                }}
              >
                User Feedback
              </NavLink>
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
            <img src="/settings.svg" alt="/" />
            <h1>Setting</h1>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '15px',
              color: 'gray',
            }}
          >
            <img src="/help.svg" alt="/" />
            <h1>Help</h1>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideBar;
