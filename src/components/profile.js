import * as React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const Profile = ({data}) => {
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

export default Profile