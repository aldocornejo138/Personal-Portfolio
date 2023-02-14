import React from 'react'
import {logo} from "../../assets/index"

const Navbar = () => {
    return (
        <div className = "w-full h-15 mx-auto flex justify-between items-center">
              <div>
                <img src = {logo} alt= "logo" />
                </div>
              <div></div>
        </div>
    )
}

export default Navbar