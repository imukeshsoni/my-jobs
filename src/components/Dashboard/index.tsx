import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  Pagination,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from '../BaseLayout';
import Header from '../Header';
import home from '../../assets/home.svg';
import location from '../../assets/location.svg';
import writing from '../../assets/writing.svg';
import './styles.css';
import { JobService } from '../../services/JobsService';
import { StorageService } from '../../services/StorageService';

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
}

function Dashboard() {
  const jobService = new JobService(new StorageService());

  const [page, setPage] = useState(1);
  const [postedJobs, setPostedJobs] = useState<Array<Job>>([]);
  const [jobTitle, setJobTitle] = useState<string>('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    jobService.getJobs().then((res) => {
      setPostedJobs(res.data.data.data);
    });
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const viewJobCandidates = (jobId: string) => {
    console.log(jobId);
  };

  const handleClose = (validate: boolean = true) => {
    if (validate && (!jobDescription || !jobTitle || !jobLocation)) {
      setErrorMessage('All fields are required');
      return;
    }
    setErrorMessage('');
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Header />
      <BaseLayout>
        <div className="dashboard__description">
          <Link className="link" to="/dashboard">
            <img src={home} />
            <span> Home</span>
          </Link>
          <h1>Jobs Posted by you</h1>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {postedJobs.length > 0 ? (
              postedJobs.map((job: Job, index: number) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card key={''} sx={{ width: 320 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {job.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {job.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <span>{job.location}</span>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          viewJobCandidates(job.id);
                        }}
                      >
                        View Applications
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <div className="job__listing">
                <div className="post__job">
                  <img src={writing} />
                  <h2>Your posted jobs will show here!</h2>
                  <Button variant="contained" onClick={handleClickOpen}>
                    Post a job
                  </Button>
                  <Dialog open={open} onClose={() => handleClose()}>
                    <DialogTitle>
                      Post a job
                      {open ? (
                        <IconButton
                          aria-label="close"
                          onClick={() => handleClose(false)}
                          sx={{
                            width: 45,
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                          }}
                        >
                          x
                        </IconButton>
                      ) : null}
                    </DialogTitle>
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
                        <span className="text-danger label">
                          {errorMessage}
                        </span>
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
                  </Dialog>
                </div>
              </div>
            )}
          </Grid>
        </Box>

        {/* 
        <Typography>Page: {page}</Typography>

        <Pagination
          count={2}
          shape="rounded"
          variant="outlined"
          color="primary"
          page={page}
          onChange={handleChange}
        /> */}
      </BaseLayout>
    </React.Fragment>
  );
}

export default Dashboard;
