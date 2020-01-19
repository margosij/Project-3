import React from 'react'

export const SubmitBtn = props => {
  return (
    <>
      <div className='row container d-flex align-self-end'>
        <div className='d-flex justify-content-end'>
          <button
            type='button'
            className='btn btn-primary my-2'
            onClick={props.handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export const SaveBtn = props => {
  return (
    <>
      <button
        type='button'
        className={`btn btn-primary mx-2 ${props['data-value']}`}
        {...props}
      >
        Save
      </button>
    </>
  )
}

export const ViewBtn = props => {
  return (
    <>
      <a
        className='btn btn-success active'
        href={props.link}
        target={'_blank'}
        onClick={props.onClick}
        {...props}
      >
        View
      </a>
    </>
  )
}

export const DeleteBtn = props => {
  return (
    <span
      className='btn btn-info mx-2 delete-btn float-right'
      {...props}
      role='button'
      tabIndex='0'
    >
      ✗
    </span>
  )
}
