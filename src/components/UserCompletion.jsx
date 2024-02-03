import AsideBar from './AsideBar';
import TopPagesList from './TopPagesList';
import { Employee } from '../App';

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
        <nav
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
            height: '50px',
          }}
        >
          <img src="/home-2.svg" alt="/" />
          <h1>Data Dump</h1>
        </nav>

        <div
          style={{
            height: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '8px',
            borderBottom: '1px solid lightgray',
          }}
        >
          <TopPagesList />
          <TopPagesList />
          <TopPagesList />
          <TopPagesList />
        </div>

        <div
          style={{
            display: 'flex ',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <div
            style={{
              display: 'flex ',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              color: 'gray',
            }}
          >
            <input
              style={{
                width: '30rem',
                height: '2rem',
                border: '1px solid lightgray',
                borderRadius: '12px',
                fontSize: '15px',
                padding: '5px 10px',
                fontWeight: '500',
              }}
              type="text"
              placeholder="Search, users, journey, module"
            />
            <h3>Filer</h3>
            <div>|</div>
            <h4>No filter</h4>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '15px',
            }}
          >
            <button
              style={{
                padding: '15px 43px',
                fontSize: '18px',
                fontWeight: '500',
                boxShadow: '0px 0px 0px 1px #EFEEF1 ',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '12px',
                color: '#525C76',
              }}
            >
              Sort By
            </button>
            <button
              style={{
                padding: '15px 43px',
                fontSize: '18px',
                fontWeight: '500',
                backgroundColor: '#7B61FF',
                borderRadius: '12px',
                color: 'white',
                border: 'none',
              }}
            >
              Export
            </button>
          </div>
        </div>

        <div
          style={{
            borderRadius: '10px',
            marginTop: '15px',
            padding: '2px 10px',
            backgroundColor: '#F5F6F7',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(8, 1fr)',
              fontSize: '12px',
              color: 'gray',
              padding: '0 10px',
            }}
          >
            <h2 style={{ gridColumn: 'span 2' }}>User</h2>

            <h2>Role</h2>
            <h2>Reporting</h2>
            <h2>Assigned</h2>
            <h2>Unlock</h2>
            <h2>Completed</h2>
            <h2>Completion</h2>
          </div>

          <div
            style={{
              borderRadius: '12px',
              boxShadow: '0px 0px 0px 1px #EFEEF1 ',
              backgroundColor: 'white',
              overflowY: 'auto',
              height: '30rem',
            }}
          >
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'start',
              alignItems: 'center',
              padding: '15px 10px',
            }}
          >
            <p>1-10 of 48</p>
            <div>|</div>
            <p>Result per page</p>
            <select name="select" id="">
              <option value="select">1</option>
              <option value="select">2</option>
              <option value="select">3</option>
              <option value="select">4</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserCompletion;
