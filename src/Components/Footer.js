import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{paddingTop: '100px'}}>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Disclaimer Ploicy | Contact Details
      </div>
    </MDBFooter>
  );
}
