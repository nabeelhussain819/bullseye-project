import React from 'react'
import moment from "moment";

const Footer = () => (<footer className="sticky-bottom py-3 bg-dark">
    <div className="container">
        <p className="m-0 text-center text-white">Copyright © Survey {moment().format('YYYY')}</p>
    </div>
</footer>)

export default Footer
