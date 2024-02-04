import AsideBar from './AsideBar';
import TopPagesList from './TopPagesList';
import DataGridDemo from './UserJourney';
import { useState } from 'react';
import UserModule from './UserModule';
import UserItem from './UserItem';
import UserJourneyTable from './UserJourneyTable';

const UserCompletion = () => {
  const [dataValue, setDataValue] = useState('');
  console.log(dataValue);

  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          height: '130vh',
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
              maxWidth: '70rem',
              height: '60px',
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '8px',
              padding: '0px 6px',
              borderBottom: '1px solid lightgray',
            }}
          >
            <button
              style={{ border: 'none', backgroundColor: 'transparent' }}
              onClick={() => setDataValue('userCompletion')}
            >
              <TopPagesList name="User Completion" number="1426" />
            </button>

            <button
              style={{ border: 'none', backgroundColor: 'transparent' }}
              onClick={() => setDataValue('userJourney')}
            >
              <TopPagesList name="User Journey Wise Detail" number="432" />
            </button>

            <button
              style={{ border: 'none', backgroundColor: 'white' }}
              onClick={() => setDataValue('userModule')}
            >
              <TopPagesList name="User Module Wise Detail" number="1281" />
            </button>

            <button
              style={{ border: 'none', backgroundColor: 'white' }}
              onClick={() => setDataValue('userItems')}
            >
              <TopPagesList name="User Items Wise Detail" number="5430" />
            </button>
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
                borderRadius: '12px',
                boxShadow: '0px 0px 0px 1px #EFEEF1 ',
                backgroundColor: 'white',
                marginTop: '20px',
              }}
            >
              {dataValue === 'userJourney' ? (
                <UserJourneyTable />
              ) : dataValue === 'userModule' ? (
                <UserModule />
              ) : dataValue === 'userItems' ? (
                <UserItem />
              ) : (
                <DataGridDemo />
              )}
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
    </>
  );
};

export default UserCompletion;
