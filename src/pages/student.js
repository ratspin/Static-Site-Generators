import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

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
        }
      }
    }
  `)
  return (
    <Layout>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            {data.directus.student.map(student => (
              <Profile data={student} key={student.std_id}></Profile>
            ))}
          </div>
      </section>
    </Layout>
  )
}


const Profile = ({ data }) => {
  const img = getImage(data.std_img.imageFile)
  return (
      <div className="card" style={{width: '18rem', margin: 12}}>
          <div className="card-body">
              <GatsbyImage image={img}/>
              <div className="card-body">
                  <h5 className="card-title">{data.std_name} </h5>
                  <h6 className="card-text">{data.std_id}</h6>
              </div>  
          </div>
      </div>
  )
}