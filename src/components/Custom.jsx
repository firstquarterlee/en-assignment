import React from 'react';

const keywords = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M12 2C12 2 7 8 7 13a5 5 0 0010 0c0-5-5-11-5-11z" stroke="#4ade80" strokeWidth="2.5" fill="#bbf7d0"/></svg>
    ),
    title: 'ENMEDIA',
    desc: 'Lorem ipsum dolor sit amet'
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#22d3ee" strokeWidth="2.5" fill="#cffafe"/><path d="M12 7v5l3 3" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"/></svg>
    ),
    title: 'ENMEDIA',
    desc: 'Lorem ipsum dolor sit amet'
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M4 17c2-2 6-2 8 0s6 2 8 0" stroke="#facc15" strokeWidth="2.5" fill="#fef9c3"/><circle cx="12" cy="10" r="4" stroke="#facc15" strokeWidth="2.5" fill="#fef9c3"/></svg>
    ),
    title: 'ENMEDIA',
    desc: 'Lorem ipsum dolor sit amet'
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" stroke="#a78bfa" strokeWidth="2.5" fill="#ede9fe"/><path d="M8 12h8M12 8v8" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/></svg>
    ),
    title: 'ENMEDIA',
    desc: 'Lorem ipsum dolor sit amet'
  },
];

const Custom = () => {
  return (
    <section className="w-full section-padding pb-0 bg-gradient-to-b from-green-100 via-green-50 to-white relative overflow-hidden">
      <div className="section-container text-center">
        <h2 className="section-title">Lorem ipsum dolor sit amet,</h2>
        <p className="section-desc">Lorem ipsum dolor sit amet,</p>
        <div className="card-grid mb-20">
          {keywords.map((item, idx) => (
            <div key={idx} className="card-item items-center">
              <div className="mb-2 mt-2 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-green-900">{item.title}</h3>
              <p className="text-green-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section> 
  );
};

export default Custom;