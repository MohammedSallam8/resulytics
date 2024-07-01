import React from "react";
import './Style/TeamMembers.scss';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

export default function TeamMembers() {

    const teamItem = [
        {id: 1, img: "../../../public/imgs/ourTeam1.png", h3: "Merv Adrian", p: "Data Management",
            ul: [
                {id: 1, icon: <FaFacebookF className="i"/>},
                {id: 2, icon: <FaTwitter className="i"/>},
                {id: 3, icon: <RiInstagramFill className="i"/>},
                {id: 4, icon: <FaLinkedinIn className="i"/>},
            ]
        },
        {id: 2, img: "../../../public/imgs/ourTeam2.png", h3: "Kirk Borne", p: "Data Scientist",
            ul: [
                {id: 1, icon: <FaFacebookF className="i"/>},
                {id: 2, icon: <FaTwitter className="i"/>},
                {id: 3, icon: <RiInstagramFill className="i"/>},
                {id: 4, icon: <FaLinkedinIn className="i"/>},
            ]},
        {id: 3, img: "../../../public/imgs/ourTeam3.png", h3: "Carla Gentry", p: "Analytical Solutions",
            ul: [
                {id: 1, icon: <FaFacebookF className="i"/>},
                {id: 2, icon: <FaTwitter className="i"/>},
                {id: 3, icon: <RiInstagramFill className="i"/>},
                {id: 4, icon: <FaLinkedinIn className="i"/>},
            ]},
        {id: 4, img: "../../../public/imgs/ourTeam4.png", h3: "Marie Curie", p: "Data Scientist",
            ul: [
                {id: 1, icon: <FaFacebookF className="i"/>},
                {id: 2, icon: <FaTwitter className="i"/>},
                {id: 3, icon: <RiInstagramFill className="i"/>},
                {id: 4, icon: <FaLinkedinIn className="i"/>},
            ]},
    ]

    return(
        <div className="team-members-container">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 title">
                        <div className="logo">
                            <img src="../../../public/imgs/logo2.png"/>
                            <span>TEAM MEMBERS</span>
                        </div>
                        <h2>Our Data Scientist</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    {teamItem.map((item) => <div className="col-lg-3 col-md-6 col-12" key={item.id}>
                        <div className="item">
                            <div className="cover">
                                <img src={item.img} />
                            </div>
                            <div className="details">
                                <h3>{item.h3}</h3>
                                <p>{item.p}</p>
                                <ul className="social">
                                    {item.ul.map((li) => <li key={li.id}>{li.icon}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}