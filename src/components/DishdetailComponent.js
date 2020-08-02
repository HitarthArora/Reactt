import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';




const RenderComments = ({comments}) => {
    if(comments==null)
    {
        
        return (<div></div>);
    }
    const clist = comments.map((comment) => {
        return (
            <div>
            <li key={comment.id} >
                        {comment.comment}
                        <br /><br />
                        -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        <br /><br />
            </li>
            </div>
        );
    });
    
    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {clist}
            </ul>
            
        </div>
    );
}
    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    const Dishdetail = ({dish}) => {
        
        if (dish == null) {
            return (<div></div>)
        }
        
        return (
            
            <div className='container row'>
                <br/> <br/> <br/>
                <hr />
                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <RenderDish dish={dish} />
                &nbsp; 
                <RenderComments comments={dish.comments} />
            </div>
        )
    }


export default Dishdetail;