import React from 'react'
import { Card, Button, Image } from "react-bootstrap";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <Card bg={'dark'} text={'white'} className="text-center mb-2">
        <Card.Body>
          <Image src="images/typing-icon.png" className="typecraft-logo-footer" />
          <Card.Title>Typecraft Inc.</Card.Title>
          <Card.Text>
            <Card.Link href="#">Careers</Card.Link>
          </Card.Text>
          <Card.Text>
            <Card.Link href="#">Terms of Use</Card.Link>
          </Card.Text>
          <Card.Text>
            <Card.Link href="#">Privacy Policy</Card.Link>
          </Card.Text>
          <Button variant="primary"><i className="fab fa-facebook fa-lg"></i></Button>
          <Button variant="info"><i className="fab fa-twitter fa-lg"></i></Button>
          <Button variant="danger"><i className="fab fa-tiktok fa-lg"></i></Button>
        </Card.Body>
        <Card.Footer className="text-muted">© 2021 Copyright. TypeCraft. All rights reserved.</Card.Footer>
      </Card>
    </div>
  )
}

export default Footer
