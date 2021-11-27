import React from "react";

import './Popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)} primary="true" round="true" 
                    css={`
                        font-size: 14px;
                        background: ${({primary}) => (primary ? '#F26A2E' : '#077BF1')};
                        white-space:nowrap;
                        padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
                        color: #fff;
                        font-size: ${({ big }) => (big ? '20px' : '16px')};
                        outline: none;
                        border: none;
                        cursor: pointer;
                        text-decoration: none;
                        transition: 0.3s !important;
                        border-radius: ${({ round }) => (round ? '50px' : 'none')};
                    
                        &:hover {
                            background: ${({primary}) => (primary ? '#077BF1' : '#F26A2E')};
                            transform: translateY(-2px);
                    
                        `}>close</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup