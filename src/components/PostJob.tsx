import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

function PostJob() {
  const [errorMessage, setErrorMessage] = useState('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  useEffect(() => {
    return () => {
      setErrorMessage('');
      setJobTitle('');
      setJobDescription('');
      setJobLocation('');
    };
  }, []);

  const handleClose = (validate: boolean = true) => {
    if (validate && (!jobDescription || !jobTitle || !jobLocation)) {
      setErrorMessage('All fields are required');
      return;
    }
  };
  return (
    <>
      <DialogTitle>Post a job</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            size="small"
            margin="normal"
            id="jobTitle"
            label="Job title"
            type="text"
            fullWidth
            error={errorMessage !== ''}
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            variant="outlined"
          />

          <TextField
            id="jobDescription"
            label="Job Description"
            margin="normal"
            multiline
            fullWidth
            error={errorMessage !== ''}
            required
            maxRows={10}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />

          <TextField
            size="small"
            margin="normal"
            id="jobLocation"
            label="Location"
            type="text"
            fullWidth
            error={errorMessage !== ''}
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
            required
            variant="outlined"
          />
          <span className="text-danger label">{errorMessage}</span>
          <div className="btn__container">
            <Button
              variant="contained"
              type="submit"
              onClick={() => handleClose()}
            >
              Post Job
            </Button>
          </div>
        </form>
      </DialogContent>
    </>
  );
}

export default PostJob;
