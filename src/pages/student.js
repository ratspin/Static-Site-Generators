import * as React from "react"
import Layout from "../components/layout"
import Profile from "../components/profile"
import { useStaticQuery, graphql } from "gatsby"

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
            {data.directus.student.map(x => (
              <Profile data={x} key={x.std_id}></Profile>
            ))}
          </div>
      </section>
    </Layout>
  )
}

