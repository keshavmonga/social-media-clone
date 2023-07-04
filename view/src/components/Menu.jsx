import { Button, Dialog, DialogTitle } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { logoutUser } from '../Actions/User';
import Upload from '../pages/Upload/Upload';

const Menu = () => {
  const [logoutModal, setlogoutModal] = useState(false);
  const [uploadModal, setuploadModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div className="hover-menu">
        <Link to="/home" className="active"> Home </Link>
        <Link to="/profile/me" className="active"> Profile </Link>
        <Link onClick={() => { setuploadModal(true) }} className="active"> Upload </Link>
        <Link to="/contact" className="active"> Contact </Link>
        <Link onClick={() => { setlogoutModal(true) }} className="active"> Logout </Link>
      </div>
      <Dialog open={logoutModal} onClose={() => { setlogoutModal(false) }}>
        <DialogTitle>Are you sure?</DialogTitle>
        <div style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
          <Button onClick={() => { dispatch(logoutUser()) }}>Yes</Button>
          <Button onClick={() => { setlogoutModal(false) }}>No</Button>
        </div>
      </Dialog>
      <Dialog open={uploadModal} onClose={() => { setuploadModal(false) }}>
        <Upload />
      </Dialog>
    </>
  )
}

export default Menu
