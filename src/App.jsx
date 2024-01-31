import macDie from './assets/Rectangle 18.png';
import home from './assets/home-3.svg';
import home2 from './assets/home-2.svg';
import analytic from './assets/chart.svg';
import setting from './assets/setting-2.svg';
import head from './assets/headphone.svg';
import user from './assets/user.svg';
import group from './assets/Group 2.svg';
import micro from './assets/Frame 427323804.png';
import arrow from './assets/arrow-right.svg';

function App() {
  return (
    <main
      style={{
        backgroundColor: 'white',
        height: 'auto',
        width: 'auto',
        display: 'grid',
        gridTemplateColumns: '260px 1fr',
        gridTemplateRows: '60px 1fr',
        // overflowY: 'hidden',
      }}
    >
      <aside
        style={{ gridColumn: '1/2', gridRow: '1/3', backgroundColor: 'black' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            borderBottom: '2px solid gray',
          }}
        >
          <h1 style={{ color: '#7B61FF', fontSize: '24px' }}>Eubrics</h1>
          <img src={macDie} alt="/" />
        </div>

        <div
          style={{
            display: 'flex',
            padding: '20px',
            flexDirection: 'column',
            fontSize: '14px',
            paddingBottom: '22rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '15px',
              color: 'white',
            }}
          >
            <img src={home} alt="/" />
            <h1>Dashboard</h1>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '15px',
              color: 'gray',
            }}
          >
            <img src={analytic} alt="/" />
            <h1>Analytics</h1>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            padding: '20px',
            flexDirection: 'column',
            fontSize: '14px',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '15px',
              color: 'gray',
            }}
          >
            <img src={setting} alt="/" />
            <h1>Setting</h1>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '15px',
              color: 'gray',
            }}
          >
            <img src={head} alt="/" />
            <h1>Help</h1>
          </div>
        </div>
      </aside>

      <nav style={{ gridColumn: '2/3', gridRow: '1/2' }}>
        <div
          style={{
            display: 'flex',
            gap: '15px',
            color: '#0F1D40',
            padding: '5px 20px',
            fontSize: '18px',
            fontWeight: '500',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <img src={home2} alt="/" />
          <h1>Dashboard</h1>
        </div>
      </nav>

      <section style={{ gridColumn: '2/3', gridRow: '2/4' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: '16px',
            padding: '20px',
          }}
        >
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            padding: '5px 20px',
          }}
        >
          <ChartCard />
          <ChartCard />
        </div>

        <div
          style={{
            border: '1px solid gray',
            borderRadius: '12px',
            boxShadow: '0px 0px 0px 1px #EFEEF1 ',
            padding: '15px 10px',
            margin: '20px',
            display: 'flex',
            gap: '10px',
          }}
        >
          <div
            style={{
              flex: '1 ',
              border: '1px solid gray',
              borderRadius: '12px',
              boxShadow: '0px 0px 0px 1px #EFEEF1 ',
              padding: '0px 15px',
              overflowY: 'auto',
              height: '15rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '14px',
              }}
            >
              <h2>Journey (1,253)</h2>
              <h2
                style={{
                  color: '#7B61FF',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                View All
              </h2>
            </div>
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
          </div>

          <div>
            <img
              style={{ width: '375px', height: '260px' }}
              src={micro}
              alt="img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

const SmallCard = () => {
  return (
    <div
      style={{
        border: '1px solid gray',
        borderRadius: '12px',
        boxShadow: '0px 0px 0px 1px #EFEEF1 ',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        fontSize: '14px',
      }}
    >
      <img style={{ width: '24px' }} src={user} alt="/" />
      <h1>
        10,453 <br />{' '}
        <span style={{ fontSize: '12px', color: 'gray' }}>Total User</span>
      </h1>
    </div>
  );
};

const ChartCard = () => {
  return (
    <div
      style={{
        border: '1px solid gray',
        borderRadius: '12px',
        boxShadow: '0px 0px 0px 1px #EFEEF1 ',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        fontSize: '14px',
        textAlign: 'left',
      }}
    >
      <h3 style={{ color: '#0F1D40', fontSize: '10px', margin: '8px' }}>
        No of people logged In/Not
      </h3>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          color: '#0F1D40',
          fontSize: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            fontSize: '12px',
          }}
        >
          <h2>
            Logged In{' '}
            <span style={{ fontSize: '14px', color: 'gray' }}>68%</span>
          </h2>
          <h2>
            Logged Not{' '}
            <span style={{ fontSize: '14px', color: 'gray' }}>32%</span>{' '}
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
          }}
        >
          <img
            style={{ width: '9rem', color: 'gray', marginLeft: '15rem' }}
            src={group}
            alt=""
          />
          <h1
            style={{
              fontSize: '24px',
              color: '#0F1D40',
              position: 'absolute',
              marginLeft: '15rem',
            }}
          >
            10,520
          </h1>
        </div>
      </div>
    </div>
  );
};

const Employee = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h3 style={{ fontSize: '14px', fontWeight: '500' }}>
          New employee journey
        </h3>
        <p style={{ fontSize: '12px', fontWeight: '400', color: '#619BFF' }}>
          25 Dec 2023 to 17 Jan 2024
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          boxShadow: '0px 0px 0px 1px #EFEEF1 ',
          borderRadius: '10px',
        }}
      >
        <img style={{ width: '24px' }} src={user} alt="/" />
        <p>540 Participants</p>
        <img style={{ width: '24px' }} src={arrow} alt="/" />
      </div>
    </div>
  );
};

export default App;
