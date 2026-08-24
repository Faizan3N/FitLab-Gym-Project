import React, { useState } from 'react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const SCHEDULE = [
  { day: 'Monday', time: '06:15', name: 'Foundations Strength', coach: 'A. Malik', level: 'All levels' },
  { day: 'Monday', time: '07:30', name: 'Executive Conditioning', coach: 'Z. Ahmed', level: 'Intermediate' },
  { day: 'Monday', time: '18:00', name: 'Hypertrophy Lab', coach: 'A. Malik', level: 'All levels' },
  { day: 'Monday', time: '19:15', name: 'Mobility & Restore', coach: 'H. Raza', level: 'All levels' },
  { day: 'Tuesday', time: '06:15', name: 'Cycle Endurance', coach: 'Z. Ahmed', level: 'All levels' },
  { day: 'Tuesday', time: '12:15', name: 'Express Strength', coach: 'A. Malik', level: 'Intermediate' },
  { day: 'Tuesday', time: '18:30', name: 'Athletic Performance', coach: 'O. Shah', level: 'Advanced' },
  { day: 'Wednesday', time: '06:15', name: 'Foundations Strength', coach: 'A. Malik', level: 'All levels' },
  { day: 'Wednesday', time: '07:30', name: 'Pilates Reform', coach: 'H. Raza', level: 'All levels' },
  { day: 'Wednesday', time: '18:00', name: 'Metabolic Circuit', coach: 'Z. Ahmed', level: 'Intermediate' },
  { day: 'Thursday', time: '06:30', name: 'Olympic Lifting', coach: 'O. Shah', level: 'Advanced' },
  { day: 'Thursday', time: '12:15', name: 'Executive Conditioning', coach: 'Z. Ahmed', level: 'Intermediate' },
  { day: 'Thursday', time: '19:00', name: 'Mobility & Restore', coach: 'H. Raza', level: 'All levels' },
  { day: 'Friday', time: '06:15', name: 'Hypertrophy Lab', coach: 'A. Malik', level: 'All levels' },
  { day: 'Friday', time: '18:00', name: 'Friday Finisher', coach: 'O. Shah', level: 'Intermediate' },
  { day: 'Saturday', time: '08:00', name: 'Weekend Strength', coach: 'A. Malik', level: 'All levels' },
  { day: 'Saturday', time: '09:30', name: 'Conditioning Open', coach: 'Z. Ahmed', level: 'All levels' },
  { day: 'Saturday', time: '11:00', name: 'Mobility Workshop', coach: 'H. Raza', level: 'All levels' }
];

function Classes() {
  const [day, setDay] = useState('Monday');
  const rows = SCHEDULE.filter((item) => item.day === day);

  return (
    <section id="classes" className="section classes-section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Studio Timetable</p>
          <h2 className="section-heading">Forty programmed sessions each week.</h2>
          <p className="section-lead">
            Small-group classes capped for coaching quality. Members book via reception or the
            front desk. Sunday remains open floor, 08:00 – 20:00.
          </p>
        </div>

        <div className="day-tabs" role="tablist">
          {DAYS.map((d) => (
            <button
              key={d}
              type="button"
              className={`day-tab ${day === d ? 'active' : ''}`}
              onClick={() => setDay(d)}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="schedule-table-wrap">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Session</th>
                <th>Coach</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.day}-${row.time}-${row.name}`}>
                  <td>{row.time}</td>
                  <td>{row.name}</td>
                  <td>{row.coach}</td>
                  <td>{row.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Classes;
