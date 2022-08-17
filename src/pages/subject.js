import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Paper, Table, TableBody, TableContainer, TableCell,TableHead, TableRow } from '@mui/material';
import Seo from "../components/seo"
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#909497',
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function StudentPage (){
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
      <Seo title="Member" />
      <div className="container  my-5">
      <div className="container">
      <h1 align="center">subject</h1>
      <div className="table">
        <TableContainer componebt={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                  <StyledTableCell align="center">subject id</StyledTableCell>
                  <StyledTableCell align="center">subject name</StyledTableCell>
                  <StyledTableCell align="center">day</StyledTableCell>
                  <StyledTableCell align="center">time</StyledTableCell>
                  <StyledTableCell align="center">section</StyledTableCell>
                </TableRow>
            </TableHead>

            <TableBody>
              { data.directus.subject.map((subject) => (
                <StyledTableRow data={subject} key={subject.sj_id}>
                  <StyledTableCell align="center"> { subject.sj_id } </StyledTableCell>
                  <StyledTableCell align="center"> { subject.sj_name } </StyledTableCell>
                  <StyledTableCell align="center"> { subject.day } </StyledTableCell>
                  <StyledTableCell align="center"> { subject.time } </StyledTableCell>
                  <StyledTableCell align="center"> { subject.section } </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
      </div>
    </Layout>
  )
}

