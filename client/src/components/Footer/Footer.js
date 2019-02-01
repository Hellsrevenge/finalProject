import React from "react";

function Footer() {
  return (
    <div className="card">
        <div className="card-body">
            <a href="/aboutus" className="btn btn-primary">About UCare</a>
            <a href="/support" className="btn btn-primary">Customer Support</a>
            <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
        <div class="card-footer text-muted">
            UCare
        </div>
    </div>
  );
}

export default Footer;

