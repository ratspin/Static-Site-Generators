import  React, { useState } from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Box,Container,Typography,Button,ButtonGroup,CssBaseline,Paper, Table, TableBody, TableContainer, TableCell,TableHead, TableRow } from '@mui/material';
import NotListedLocationOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {SeeMoreText} from '../styled_components/styled'


export default function SubjectPage (){
  const data = useStaticQuery(graphql`
  query {
      directus {
        subject {
          sj_id 
          sj_name
          day
          time 
          section
          register{
          student_id{
            std_id
            std_name
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
            <Box sx={{ flexGrow: 1 }}> <Typography variant="h6" gutterBottom component="div"> Subject </Typography></Box>
          </Box>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
                <TableCell align="center">Subject ID</TableCell>
                <TableCell align="left">Subject Name</TableCell>
                <TableCell align="center">Day</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Section</TableCell>
                <TableCell align="center">Student List</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.directus.subject.map((subject) => (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  data={subject} key={subject.sj_id}>
                <TableCell align="center">{subject.sj_id}</TableCell>
                <TableCell align="left">{subject.sj_name}</TableCell>
                <TableCell align="center">{subject.day}</TableCell>
                <TableCell align="center">{subject.time}</TableCell>
                <TableCell align="center">{subject.section}</TableCell>
                <TableCell align="center">   <Subject data={subject}></Subject> </TableCell> 
            </TableRow>
          ))}
          </TableBody>
        </Table>
        </TableContainer>
      </Paper>
      </Container>
    </Layout>
  )
}

const Subject = ({data}) => {
  const [show, setShow] = useState("");
  const register = data.register

  return (
    <div>
        <Dialog onClose={() => console.log("adsadad")} aria-labelledby="simple-dialog-title" open={!!show}>
          {/* <DialogTitle>Student</DialogTitle> */}
          <DialogContent >
          {/* <Name>{data.sj_name} </Name> */}
            <hr />
            <table class="table" >
              <thead align="center">
              <tr>
                <th scope="col" >Student ID</th>
                <th scope="col" >Student Name</th>
              </tr>
              </thead>
              <tbody>
                {register.map(r => (
                  <tr align="center">
                    <td>{r.student_id.std_id}</td>
                    <td>{r.student_id.std_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
          </DialogActions>
        </Dialog>


                  <ButtonGroup  
                    onClick={() => setShow(!show)}
                    variant="outlined" 
                    aria-label="outlined button group"> 
                    <Button  startIcon={<NotListedLocationOutlinedIcon />} >Student</Button>
                  </ButtonGroup> 



    </div>
  )
}