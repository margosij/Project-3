import React from 'react';
export function CheckInBtn(props) {
  return (<>
    <div className='row container d-flex align-self-end'>
      <div className='d-flex justify-content-end'>
        <button type='button' className='btn btn-primary my-2' onClick={props.handleSubmit}>
          Submit
          </button>
      </div>
    </div>
  </>);
}
