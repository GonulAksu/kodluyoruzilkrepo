import React from 'react';
import Form from './Form';
import useWeather from '../Context/WeatherContext';


const Container = () => {
  const { weather } = useWeather();
  const today=new Date();
  const tdy=today.getDay();
  
  return (
    <div className='container shadow p-3 my-5  rounded'>
      <div className="row">
        <div className="col-sm-10 offset-sm-1">
          <h1 className='p-3'>Weather Report</h1>
          <Form></Form>
          <div className='d-flex'>
            {weather.map(item => {
              const icon = item.day.condition.icon;
              const status = item.day.condition.text;
              const day = new Date(`${item.date}`);
              
              const dayname = day.getDay();
              let Day = '';
              dayname == 5 ? Day = 'Friday'
                : dayname == 6 ? Day = 'Saturday'
                  : dayname == 4 ? Day = 'Thursday'
                    : dayname == 3 ? Day = 'Wednesday'
                      : dayname == 2 ? Day = 'Tuesday'
                        : dayname == 1 ? Day = 'Monday' : Day = 'Sunday';
              
              return <div key={item.date} className="card me-1 shadow " style={{ width: '10rem' }}>
                <img src={icon} />
                <div className="card-body">
                  <h5 className="card-title">{Day} / {item.date}</h5>
                  <p className="card-text">{status}</p>
                </div>
                <div className="card-header">
                  <span className="badge bg-primary rounded-pill "> {item.day.mintemp_c}/ {item.day.maxtemp_c}</span>
                </div>

              </div>
              {/* <ul>
                <li> <h3>{Day} / {item.date}</h3></li>
                <li><img src={icon}/></li>
                <li>{status}</li>
                <li>
                <span class="badge bg-primary rounded-pill"> {item.day.mintemp_c }/ {item.day.maxtemp_c}</span>
                </li>
                </ul> */}

            })}
            </div>
          </div>
        </div>
      </div>
      )
}

      export default Container
