import Aside from './AsideBar';
import { ChartCard, ReactDoughtnutChart, option, option2 } from '../App';

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
      <section
        style={{
          flexGrow: '1',
          width: '100%',
          padding: '20px',
        }}
      >
        <nav
          style={{
            display: 'flex',
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
          {/* <img src="/home-2.svg" alt="/" /> */}
          <h1>New Employee Journey</h1>
        </nav>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#F7F5FF',
            width: '100%',
            margin: '10px 0',
            borderRadius: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '0 10px',
            }}
          >
            <img src="/user.svg" alt="logo" />
            <p style={{ fontSize: '18px', fontWeight: '500' }}>
              This journey has ran in 5 batches so far
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0px 10px',
            }}
          >
            <p style={{ fontSize: '18px', fontWeight: '500', color: 'gray' }}>
              Filter by batch
            </p>
            <select
              style={{
                border: '1px solid lightgray',
                padding: '10px',
                borderRadius: '10px',
              }}
              name="choose"
              id="#"
            >
              <option value="choose">All Batches</option>
              <option value="choose">previous</option>
              <option value="choose">previous</option>
              <option value="choose">previous</option>
            </select>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '10px',
            margin: '15px 0',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <SmallCard2 number="10,453" name="Total User" />
            <SmallCard2 number="34%" name="% Completion" />
            <SmallCard2 number="3.57/5 (70%)" name="Skill average sore" />
            <SmallCard2 number="4.5/5" name="Sentimental overall" />
            <SmallCard2 number="34%" name="% Completion" />
          </div>
          <div>
            <ChartCard
              heading="No of people logged In/Not"
              chartComp={<ReactDoughtnutChart option={option} />}
            />
          </div>
          <div>
            <ChartCard
              heading="No of people logged In/Not"
              chartComp={<ReactDoughtnutChart option={option2} />}
            />
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '10px',
            margin: '15px 0',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <ChartCard
            heading="No of people logged In/Not"
            chartComp={<ReactDoughtnutChart option={option2} />}
          />
          <ChartCard
            heading="No of people logged In/Not"
            chartComp={<ReactDoughtnutChart option={option} />}
          />
        </div>
      </section>
    </div>
  );
};

const SmallCard2 = ({ name, number }) => {
  return (
    <div
      style={{
        border: '1px solid lightGray',
        borderRadius: '12px',
        boxShadow: '0px 0px 0px 1px #EFEEF1 ',
        display: 'flex',
        justifyContent: 'start',
        padding: '10px 10px 3px  12px',
        alignItems: 'center',
        gap: '15px',
      }}
    >
      <div
        style={{
          backgroundColor: '#7B61FF1A',
          borderRadius: '10px',
          padding: '10px 14px',
        }}
      >
        <img src="/user.svg" alt="/" />
      </div>
      <h1 style={{ fontSize: '16px', color: 'black' }}>
        {number} <br />{' '}
        <span style={{ fontSize: '12px', color: 'gray' }}>{name}</span>
      </h1>
    </div>
  );
};

export default Journey;
