import macDie from './assets/Rectangle 18.png';
import home from './assets/home-3.svg';
import home2 from './assets/home-2.svg';
import analytic from './assets/chart.svg';
import setting from './assets/setting-2.svg';
import head from './assets/headphone.svg';
import user from './assets/user.svg';

import micro from './assets/Frame 427323804.png';
import arrow from './assets/arrow-right.svg';
import { useEffect, useRef } from 'react';
import { getInstanceByDom, init } from 'echarts';

let option = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
};

let option2 = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },

        { value: 350, name: 'Video Ads' },
      ],
    },
  ],
};

function App() {
  return (
    <main
      style={{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <aside style={{ backgroundColor: 'black', minWidth: '260px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            borderBottom: '2px solid darkgray',
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
          <img src={macDie} alt="/" />
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
              padding: '20px',
              fontSize: '14px',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '15px',
                color: 'white',
                borderRadius: '12px',
                backgroundColor: '#17171C',
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
        </div>
      </aside>
      <div style={{ width: '100%', flexGrow: 1 }}>
        <nav>
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

        <section>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              gap: '16px',
              padding: '20px',
            }}
          >
            <SmallCard number="10,453" name="Total User" />
            <SmallCard number="34%" name="% Completion" />
            <SmallCard number="3.57/5 (70%)" name="Skill average sore" />
            <SmallCard number="4.5/5" name="Sentimental overall" />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              padding: '5px 20px',
            }}
          >
            <ChartCard
              heading="No of people logged In/Not"
              chartComp={<ReactDoughtnutChart option={option2} />}
            />
            <ChartCard
              heading="No of people Journey"
              chartComp={<ReactDoughtnutChart option={option} />}
            />
          </div>

          <div
            style={{
              padding: '15px 10px',
              margin: '10px',
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
                padding: '0px 5px',
                overflowY: 'auto',
                height: '18rem',
                backgroundColor: '#F5F6F7',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '14px',
                  padding: '0px 10px',
                }}
              >
                <h2>Journey (1,253)</h2>
                <h2
                  style={{
                    color: '#7B61FF',
                    fontSize: '20px',
                    fontWeight: '500',
                  }}
                >
                  View All
                </h2>
              </div>
              <div
                style={{
                  border: '1px solid gray',
                  borderRadius: '12px',
                  boxShadow: '0px 0px 0px 1px #EFEEF1 ',
                  backgroundColor: 'white',
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
              </div>
            </div>

            <div>
              <img
                style={{ width: '375px', height: '290px' }}
                src={micro}
                alt="img"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const SmallCard = ({ number, name }) => {
  return (
    <div
      style={{
        border: '1px solid lightGray',
        borderRadius: '12px',
        boxShadow: '0px 0px 0px 1px #EFEEF1 ',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        fontSize: '22px',
      }}
    >
      <img
        style={{
          width: '24px',
          backgroundColor: '#7B61FF1A',
          padding: '10px',
          borderRadius: '10px',
        }}
        src={user}
        alt="/"
      />
      <h1>
        {number} <br />{' '}
        <span style={{ fontSize: '15px', color: 'gray' }}>{name}</span>
      </h1>
    </div>
  );
};

const ChartCard = ({ heading, chartComp }) => {
  return (
    <div
      style={{
        border: '1px solid lightgray',
        borderRadius: '12px',
        boxShadow: '0px 0px 0px 1px #EFEEF1 ',
        display: 'flex',
        flexDirection: 'column',
        padding: '25px 10px 7px 7px',
        fontSize: '14px',
        textAlign: 'left',
        backgroundColor: '#F5F6F7',
      }}
    >
      <h3 style={{ color: '#0F1D40', fontSize: '18px', margin: '5px' }}>
        {heading}
      </h3>
      <div
        style={{
          border: '1px solid lightgray',
          borderRadius: '12px',
          boxShadow: '0px 0px 0px 1px #EFEEF1 ',
          backgroundColor: 'white',
        }}
      >
        {chartComp}
      </div>
    </div>
  );
};

const Employee = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid lightgray',
      }}
    >
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>
          New employee journey <br />
          <span
            style={{ fontSize: '14px', fontWeight: '400', color: '#619BFF' }}
          >
            25 Dec 2023 to 17 Jan 2024
          </span>
        </h3>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            boxShadow: '0px 0px 0px 1px #EFEEF1 ',
            borderRadius: '20px',
            height: '32px',
            padding: '10px',
          }}
        >
          <img style={{ width: '20px' }} src={user} alt="/" />
          <p>540 Participants</p>
        </div>
        <img style={{ width: '24px' }} src={arrow} alt="/" />
      </div>
    </div>
  );
};

function ReactDoughtnutChart({ option }) {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize chart
    let chart;
    if (chartRef.current !== null) {
      chart = init(chartRef.current);
    }

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener('resize', resizeChart);

    // Return cleanup function
    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart.setOption(option);
    }
  }, [option]); // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

  return <div ref={chartRef} style={{ width: '100%', minHeight: '400px' }} />;
}

export default App;
