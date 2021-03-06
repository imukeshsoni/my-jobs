import {
  Avatar,
  Box,
  Breadcrumbs,
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
  Stack,
  TextField,
  Typography,
} from '@mui/material';
// import Link  from '@mui/material/Link';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BaseLayout from '../../components/BaseLayout';
import Header from '../../components/Header';
import './styles.css';
import { JobService } from '../../services/JobsService';
import { StorageService } from '../../services/StorageService';
import { AuthService } from '../../services/AuthService';
import usePagination from './Pagination';
import home from '../../assets/home.svg';
import location from '../../assets/location.svg';
import nocandidates from '../../assets/no-candidates.svg';
import writing from '../../assets/writing.svg';
import PostJob from '../../components/PostJob';

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
  const [open, setOpen] = React.useState(false);
  const [showCandidates, setShowCandidates] = useState(false);

  const PER_PAGE = 9;

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
        }
        setShowCandidates(true);
      })
      .catch();
  };

  const handleClose = (validate: boolean = true) => {
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
        <Breadcrumbs
          sx={{ color: '#fff' }}
          separator="???"
          aria-label="breadcrumb"
        >
          <Link className="link" to="/dashboard">
            <img src={home} />
            <span> Home</span>
          </Link>

          <Link to="" className="link" onClick={handleClickOpen}>
            Post a job
          </Link>
        </Breadcrumbs>
        {/* <Breadcrumbs separator="-" aria-label="breadcrumb">

          <Button className="link" onClick={() => handleClickOpen()}>
            Post a job
          </Button>
        </Breadcrumbs> */}
        <div className="dashboard__description">
          {/* <Button>Post a job</Button> */}
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
                </div>
              </div>
            )}
          </Grid>
        </Box>

        <Dialog open={open} onClose={() => handleClose()}>
          <PostJob />
        </Dialog>

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
        {_DATA.currentData().length > 0 ? (
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
        ) : null}
      </BaseLayout>
    </React.Fragment>
  );
}

export default Dashboard;
