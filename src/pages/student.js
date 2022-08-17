import  React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {SeeMoreText,IngredientsText,RecipeName,RecipeContainer,Container,RecipeListContainer} from '../styled_components/styled'
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
    <Container>
      <RecipeListContainer>
            {data.directus.student.map(student => (
              <Profile data={student} key={student.std_id}></Profile>
            ))}
      </RecipeListContainer>
    </Container>
    </Layout>
  )
}

const Profile = ({ data }) => {
  const img = getImage(data.std_img.imageFile)
  const [show, setShow] = useState("");
  const register = data.register

  return (
      <RecipeContainer>
        <Dialog onClose={() => console.log("adsadad")} aria-labelledby="simple-dialog-title" open={!!show}>
          <DialogTitle>Subject</DialogTitle>
          <DialogContent>
            <table>
              <thead text-align = "center">
                <th>Subject ID</th>
                <th>Subject Name</th>
                <th>Section</th>
                <th>Day</th>
                <th>Time</th>
              </thead>
              <tbody>
                {register.map(r => (
                  <tr >
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
          <RecipeName>{data.std_name}</RecipeName>
          <RecipeName>{data.std_id}</RecipeName>
          <IngredientsText onClick={() => setShow(!show)}>Subject</IngredientsText>  
      </RecipeContainer>
  )
}