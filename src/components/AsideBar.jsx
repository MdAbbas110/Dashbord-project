import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AsideBar = () => {
  const [showOption, setShowOption] = useState(0);

  return (
    <aside
      style={{
        backgroundColor: 'black',
        minWidth: '260px',
        padding: 20,
        height: 'auto',
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
            gap: 5,
            fontSize: '16px',
            cursor: 'pointer',
            padding: '20px 10px',
          }}
        >
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? 'dash' : '';
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                fontWeight: '600',
                fontSize: '20px',
                padding: '20px 20px',
              }}
            >
              <img src="/home.svg" alt="/" />
              Dashboard
            </div>
          </NavLink>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              color: 'gray',
              paddingLeft: '20px',
              borderRadius: '12px',
              padding: '8px 20px',
            }}
          >
            <img src="/analytics.svg" alt="/" />
            <h2>Analytics</h2>
          </div>

          <div
            style={{
              margin: '0px 0px',
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
                <div style={{ padding: '8px 15px' }}>Data Dump</div>
              </NavLink>

              <NavLink
                to="/journey"
                className={({ isActive }) => {
                  return isActive ? 'color' : '';
                }}
              >
                <div
                  style={{
                    padding: '10px 10px',

                    width: 'auto',
                  }}
                >
                  Journey Analytics
                </div>
              </NavLink>
              <NavLink to="/">
                <div
                  style={{
                    padding: '10px 10px',

                    width: 'auto',
                  }}
                >
                  User Feedback
                </div>
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
