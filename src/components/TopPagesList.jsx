const TopPagesList = ({ name, number }) => {
  return (
    <div style={{ color: '#525C76', fontWeight: '500' }}>
      <p style={{ fontSize: '18px', marginRight: '5px' }}>
        {name}{' '}
        <span
          style={{
            backgroundColor: '#EEEFF2',
            padding: '2px 10px',
            borderRadius: '10px',
          }}
        >
          {number}
        </span>{' '}
      </p>
    </div>
  );
};

export default TopPagesList;
