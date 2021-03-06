import React from "react"
import { Container,Card,Form } from "react-bootstrap";

function SearchBar() {
    return(
        <div className= "mt-5">
            <Card style={{margin:"15px" , padding: "15px",}} >
            <h3 className="f-b">Search your job</h3>
                <Form>
                    <Form.Group>
                        <Form.Control style={{margin:"10px"}} size="m" type="text" placeholder="Type your skills.." />
                        <Form.Control style={{margin:"10px"}} size="m" type="text" placeholder="Type your skills.." />
                    </Form.Group>
                  
                </Form>
            </Card>
        </div>
    
    )
}


export default SearchBar ;