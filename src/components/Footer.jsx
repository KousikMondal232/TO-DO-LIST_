import React from 'react';
import '../styles/Footer.css';

function Footer({ completedCount, totalCount }) {
  const percentage = totalCount > 0 
    ? Math.round((completedCount / totalCount) * 100) 
    : 0;

  return (
    <footer className="footer">
      <div className="stats">
        <p>
          {totalCount > 0 ? (
            <span>{completedCount} of {totalCount} tasks completed ({percentage}%)</span>
          ) : (
            <span>No tasks added yet</span>
          )}
        </p>
      </div>
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{width: `${percentage}%`}}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </footer>
  );
}

export default Footer;