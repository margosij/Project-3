import React from 'react'

const Chat = () => {
  return (
    <>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>Time</th>
            <th scope='col'>Name</th>
            <th scope='col'>Comment</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div className='card bg-info'>
        <div className='card-title'>
          <h1 className='display-5 text-center'>Trash Talk</h1>
        </div>

        <form>
          <div className='form-group'>
            <label for='snap'>Trash Talk</label>
            <input
              type='text'
              className='form-control'
              id='snap'
              placeholder='Your mother...'
            />
          </div>
          <button type='button' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
export default Chat
