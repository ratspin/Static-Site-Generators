import  React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {SeeMoreText,Text,Name,Containers,Container0,ListContainer} from '../styled_components/styled'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

export default function StudentPage (){
  const data = useStaticQuery(graphql`
  query {
      directus {
        student {
          std_id 
          std_name
          std_img{
            id
            imageFile {
				      childImageSharp {
					    gatsbyImageData(width: 200)
				      }
			      }
          }
          register{
            subject_id{
              sj_id
              sj_name
              time 
              day
              section
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
    <Containers>
      <ListContainer>
            {data.directus.student.map(student => (
              <Student data={student} key={student.std_id}></Student>
            ))}
      </ListContainer>
    </Containers>
    </Layout>
  )
}

const Student = ({ data }) => {
  const img = getImage(data.std_img.imageFile)
  const [show, setShow] = useState("");
  const register = data.register


  return (
      <Container0> 
        <Dialog onClose={() => console.log("adsadad")} aria-labelledby="simple-dialog-title" open={!!show}>
          <DialogTitle>Subject</DialogTitle>
          <DialogContent >
          <Name>{data.std_name}  {data.std_id}</Name>
            <hr />
            <table class="table">
              <thead align="center">
              <tr>
                <th>Subject ID</th>
                <th >Subject Name</th>
                <th>Section</th>
                <th>Day</th>
                <th>Time</th>
              </tr>
              </thead>
              <tbody>
                {register.map(r => (
                  <tr align="center">
                    <td>{r.subject_id.sj_id}</td>
                    <td>{r.subject_id.sj_name}</td>
                    <td>{r.subject_id.section}</td>
                    <td>{r.subject_id.day}</td>
                    <td>{r.subject_id.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
          </DialogActions>
        </Dialog>

          <GatsbyImage image={img} />
          <Name>{data.std_name}</Name>
          <Name>{data.std_id}</Name>
          <Text onClick={() => setShow(!show)}>Subject</Text> 
          
      </Container0>
  )
}