import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const FullscreenNav = ({ onCheckin }) => {
    const { profile, customerinfo } = useSelector((state) => state.user);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="nav">
            <div className="fullscreen-nav">
                <div className={`wrapper ${isActive ? "active" : ""}`} onClick={() => setIsActive(false)}>
                    <ul>
                        <li>
                            <a href="https://myworld-virtual-store.com" target="_blank">Virtual</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => !profile ? onCheckin(true) : navigate("/RegisterEvent")}>สมัครสมาชิก</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => navigate("/point")}>COINS สะสม</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => navigate("/CheckPoint")}>Check-in</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => navigate("/coupon-history")}>คูปอง</a>
                        </li>
                        <li>
                            <a href="https://shop.line.me/@myworld" target="_blank">MY LIMITED ITEMS</a>
                        </li>

                        <li class="social-wrap-header">stay connected with us on</li>


                        <li class="socials">
                            <a href="https://www.facebook.com/myworldstore.th" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="24" height="24">
                                    <path
                                        d="M20.19,1.81A18.61,18.61,0,1,0,38.8,20.42,18.61,18.61,0,0,0,20.19,1.81Zm6.15,20.78H22V34H16.75V22.59H12.44V18h4.31V16.34c0-6.22,2.6-9.49,8.1-9.49a9,9,0,0,1,3,.49V11.9a10.36,10.36,0,0,0-2.39-.28,3,3,0,0,0-2.59,1.07A5.69,5.69,0,0,0,22,16.4V18h6Z"
                                        fill="currentColor"></path>
                                </svg>
                            </a>

                            <a href="https://www.messenger.com/t/613792429052288/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="24" height="24">
                                    <path
                                        d="M12.54,3.33a20.11,20.11,0,0,1,14.87-.18A18.54,18.54,0,0,1,35.2,8.84a16.35,16.35,0,0,1,3.55,8.93,16,16,0,0,1-2.23,9.44,17.93,17.93,0,0,1-6,6.07,19.63,19.63,0,0,1-9.36,2.85,20.48,20.48,0,0,1-6.28-.7L7.49,39c.42-2.16.85-4.33,1.27-6.49a17.47,17.47,0,0,1-5.92-7.34,16,16,0,0,1-1.23-7.07A16.26,16.26,0,0,1,4.83,9.29,18.39,18.39,0,0,1,12.54,3.33ZM22.93,18.82,18.25,14,8.45,24.5l8.87-4.85c1.58,1.61,3.14,3.24,4.72,4.85q5-5.31,10.07-10.64Z"
                                        fill="currentColor"></path>
                                </svg>
                            </a>

                            <a href="https://www.instagram.com/myworld.creator/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="24" height="24">
                                    <path
                                        d="M27.53,10.73H12.73A2.23,2.23,0,0,0,10.5,13v14.8A2.23,2.23,0,0,0,12.73,30h14.8a2.23,2.23,0,0,0,2.23-2.23V13A2.23,2.23,0,0,0,27.53,10.73Zm-3,13.86a6,6,0,1,1,1.75-4.23A6,6,0,0,1,24.52,24.59Zm2.85-10.08a1.37,1.37,0,1,1,1.37-1.37A1.37,1.37,0,0,1,27.37,14.51Z"
                                        fill="currentColor"></path>
                                    <path d="M20.28,16.14a4.22,4.22,0,1,0,4.23,4.22A4.23,4.23,0,0,0,20.28,16.14Z" fill="currentColor">
                                    </path>
                                    <path
                                        d="M20.19,1.81A18.61,18.61,0,1,0,38.8,20.42,18.61,18.61,0,0,0,20.19,1.81Zm11.38,26a4,4,0,0,1-4,4H12.79a4,4,0,0,1-4-4V13a4,4,0,0,1,4-4H27.57a4,4,0,0,1,4,4Z"
                                        fill="currentColor"></path>
                                </svg>
                            </a>

                            <a href="https://www.youtube.com/c/MYWORLDCLUB" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="24" height="24">
                                    <polygon points="16.66 24.54 23.79 20.42 16.66 16.3 16.66 24.54" fill="currentColor"></polygon>
                                    <path
                                        d="M20.19,1.81A18.61,18.61,0,1,0,38.8,20.42,18.61,18.61,0,0,0,20.19,1.81ZM32.41,24.42a4.47,4.47,0,0,1-4.47,4.49H12.44a4.5,4.5,0,0,1-4.5-4.49v-8A4.48,4.48,0,0,1,12.44,12h15.5a4.44,4.44,0,0,1,4.47,4.45Z"
                                        fill="currentColor"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <button className="menu-btn" onClick={() => setIsActive(!isActive)}>
                <FontAwesomeIcon icon={isActive ? faTimes : faBars} />
            </button>
        </div>

    );
};

export default FullscreenNav;
