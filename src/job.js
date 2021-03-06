import React from "react"
import {Badge, Card,Container,Button} from "react-bootstrap"
import ReactMarkdown from "react-markdown"


function Job({job}) {
    return (
       <Card className="m-3">
           <Card.Body >
               <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2">
                            {job.type}
                        </Badge>
                        <Badge variant="secondary" className="secondry">
                            {job.location}
                        </Badge>
                        <div style={{wordBreak: 'break-all'}}>
                            <ReactMarkdown source={job.how_to_apply}/>
                        </div>
                        <div>    <Card.Text>
                            <Button>View Details</Button>
                        </Card.Text></div>
                    
                    </div>
                    <div>
                        <img className="d-none d-md-block"  height="40"src={job.company_logo}/>  
                    </div>
                  
               </div>
           </Card.Body>
       </Card>
    )
}

export default Job; 