import React from 'react';

const CompanyCard = ({ name, address, website, isVerified }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '12px',
      marginBottom: '12px',
      backgroundColor: '#f9fcff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <h3 style={{ marginBottom: '6px' }}>
        {name} {isVerified && <span style={{
          color: '#007BFF',
          fontSize: '0.85em',
          marginLeft: '6px',
          background: '#e0f0ff',
          padding: '2px 6px',
          borderRadius: '4px'
        }}>Verified Pro</span>}
      </h3>
      <p style={{ margin: '4px 0' }}>{address}</p>
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer" style={{
          color: '#007BFF',
          textDecoration: 'underline'
        }}>
          Visit Website
        </a>
      )}
    </div>
  );
};

export default CompanyCard;
