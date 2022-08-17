import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Box,Container,Typography,Button,ButtonGroup,CssBaseline,Paper, Table, TableBody, TableContainer, TableCell,TableHead, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function Subject (){
  const data = useStaticQuery(graphql`
  query {
      directus {
        subject {
          sj_id 
          sj_name
          day
          time 
          section
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
                <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.directus.subject.map((subject) => (
            <TableRow
              key={subject.sj_id} data={subject}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="center">{subject.sj_id}</TableCell>
                <TableCell align="left">{subject.sj_name}</TableCell>
                <TableCell align="center">{subject.day}</TableCell>
                <TableCell align="center">{subject.time}</TableCell>
                <TableCell align="center">{subject.section}</TableCell>
                <TableCell align="center"> 
                  <ButtonGroup variant="outlined" aria-label="outlined button group"> <Button  startIcon={<EditIcon />} >Edit</Button></ButtonGroup> 
                </TableCell> 
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

