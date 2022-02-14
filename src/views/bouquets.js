import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import BouquetsS1 from "../components/bouquets-s1";
import BouquetsS2 from "../components/bouquets-s2";
import BouquetsS3 from "../components/bouquets-s3";

class Bouquets extends Component{
    render(){
        return(        
            <Container fluid className="minh-100vh p-0">
                <BouquetsS1/>
                <BouquetsS2/>
                <BouquetsS3/>
            </Container>    
        );
    }
}

export default Bouquets;