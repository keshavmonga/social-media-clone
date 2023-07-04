import { Button, Paper, TextField } from "@mui/material"
import Menu from "../../components/Menu"

const ContactUs = () => {
  return (
    <>
      <Menu />
      <Paper sx={
        {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          height: 'content',
        }
      }>
        <h1>Contact Us Form</h1>
        <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem' }}>
            <TextField
              id="filled-multiline-flexible"
              label="Name"
              placeholder="Enter your name"
              maxRows={4}
              variant="filled"
              sx={{}}
            />
            <TextField
              id="filled-textarea"
              label="Email"
              placeholder="Enter your email"
              variant="filled"
            />
          </div>
          <TextField
            id="filled-multiline-static"
            label="..."
            placeholder="Write us about any issue"
            multiline
            rows={4}
            variant="filled"
            fullWidth
          />
          <button className="cta" style={{ width: '100%' }}>Submit</button>
        </div>
      </Paper>
    </>
  )
}

export default ContactUs
