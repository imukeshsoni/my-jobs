import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Pagination,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BaseLayout from '../BaseLayout';
import Header from '../Header';
import './styles.css';
import { JobService } from '../../services/JobsService';
import { StorageService } from '../../services/StorageService';
import { AuthService } from '../../services/AuthService';
import usePagination from './Pagination';
import home from '../../assets/home.svg';
import location from '../../assets/location.svg';
import nocandidates from '../../assets/no-candidates.svg';
import writing from '../../assets/writing.svg';

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
}
interface Candidate {
  id: string;
  email: string;
  name: string;
  skills: string;
}

function Dashboard() {
  const jobService = new JobService(new StorageService());
  const authService = new AuthService(new StorageService());
  let navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [postedJobs, setPostedJobs] = useState<Array<Job>>([]);
  const [jobCandidates, setJobCandidates] = useState<Array<Candidate>>([]);
  const [jobTitle, setJobTitle] = useState<string>('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = React.useState(false);
  const [showCandidates, setShowCandidates] = useState(false);

  const PER_PAGE = 6;

  const count = Math.ceil(postedJobs.length / PER_PAGE);
  const _DATA = usePagination(postedJobs, PER_PAGE);

  useEffect(() => {
    jobService.getJobs().then((res) => {
      setPostedJobs(res.data.data.data);
    });
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleClickOpen = () => {
    if (authService.isAuthenticated()) {
      setOpen(true);
      return;
    }
    navigate('/login');
  };

  const viewJobCandidates = (jobId: string) => {
    jobService
      .getCandidates(jobId)
      .then((res) => {
        if (res?.data && res?.data?.data?.length > 0) {
          setJobCandidates(res.data.data);
        } else if (res) {
          console.log(res);
        }
        setShowCandidates(true);
      })
      .catch();
  };

  const handleClose = (validate: boolean = true) => {
    if (validate && (!jobDescription || !jobTitle || !jobLocation)) {
      setErrorMessage('All fields are required');
      return;
    }
    setErrorMessage('');
    setOpen(false);
  };

  const handlePageChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
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
        <Box sx={{}}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {_DATA.currentData().length > 0 ? (
              _DATA.currentData().map((job: Job, index: number) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card key={job.id} sx={{ width: 320 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {job.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {job.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <div className="job__location">
                        <Typography
                          sx={{
                            fontSize: 14,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <img src={location} />
                          <span> &nbsp; {job.location}</span>
                        </Typography>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            viewJobCandidates(job.id);
                          }}
                        >
                          View Applications
                        </Button>
                      </div>
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

        <Dialog
          open={showCandidates}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          maxWidth="sm"
        >
          <DialogTitle id="scroll-dialog-title">
            Applicants for this job
            {showCandidates && jobCandidates ? (
              <IconButton
                aria-label="close"
                onClick={() => {
                  setShowCandidates(false);
                  setJobCandidates([]);
                }}
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
          <DialogContent dividers={true}>
            <Typography
              sx={{ fontSize: 14, color: '#303F60', marginBottom: 1 }}
            >
              Total {jobCandidates.length} applications
            </Typography>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{
                marginTop: 1,
                padding: 1,
              }}
            >
              {jobCandidates.length > 0 ? (
                jobCandidates.map((candidate: Candidate, index: number) => {
                  return (
                    <Grid item xs={6} key={candidate.id}>
                      <Card sx={{ maxWidth: 445 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: '#D9EFFF', color: '#303F60' }}
                            >
                              {candidate.name[0].toUpperCase()}
                            </Avatar>
                          }
                          title={candidate.name}
                          subheader={candidate.email}
                        />

                        <CardContent sx={{ fontSize: 14 }}>
                          <Typography>Skills</Typography>
                          <Typography sx={{ opacity: 0.8 }}>
                            {candidate.skills}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })
              ) : (
                <Box
                  sx={{
                    backgroundColor: '#557DA526',
                    minWidth: 500,
                    height: 400,
                    marginLeft: 3,
                    marginTop: 1,

                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={nocandidates} alt="" />
                  <Typography
                    sx={{
                      fontSize: 20,
                      marginTop: 2,
                      color: '#303F60',
                      opacity: 0.8,
                    }}
                  >
                    No applications available!
                  </Typography>
                </Box>
              )}
            </Grid>
          </DialogContent>
        </Dialog>

        <div className="pagination">
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>
      </BaseLayout>
    </React.Fragment>
  );
}

export default Dashboard;
