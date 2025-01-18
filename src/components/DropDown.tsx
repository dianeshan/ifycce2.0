import React, {useState} from 'react';
import {FaAngleDown} from 'react-icons/fa';
import { Row, Col } from 'reactstrap';

const DropDown = (props: { content: string; img?: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {

    const [showing, setShowing] = useState(false);
    const content = props.content.split('\n').map(str => <p>{str}</p>)
    const img = props.img;

    const handleClick = () =>{
        setShowing(!showing);
    }

    return (
        <div>
            <Row onClick={handleClick}>      
                <Col xs="11">
                    <h3 style={{cursor:"pointer"}}><strong>{props.title}</strong></h3>
                </Col>  
                <Col xs="1">
                    <FaAngleDown className={showing ? "caret up" : "caret"}/>
                </Col>    
            </Row>
                {showing 
                    ? <div>
                        {content}
                        {img 
                            ? <div>
                                <br></br>
                                <div className="text-center">
                                    <img className="chronicle-pics" src={img} alt="self reflection" />
                                </div>
                              </div>
                : <p></p>
            }
                      </div>
                    : <p></p>
                }
        </div>
    );
}

export default DropDown;
