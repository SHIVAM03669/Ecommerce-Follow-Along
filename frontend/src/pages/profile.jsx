import React, {useEffect, useState} from "react";
import Nav from "../components/nav.jsx";
import { useNavigate } from "react-router-dom";
import AddressCard from "../components/AddressCard.jsx";
import { useSelector } from "react-redux";
import axios from "../axiosConfig.js";

export default function Profile() {
    const [personalDetails, setPersonalDetails] = useState({
        name: "",
        email:"",
        phoneNumber: "",
    });

    const [addresses, setAddresses] = useState([]);
    const navigate = useNavigate();

    const email = useSelector((state) => state.user.email);

    useEffect(() => {
        axios.get(`/api/v2/user/profile?email=${email}`)
        .then((data) => {
            setPersonalDetails(data.user);
            setAddresses(data.addresses);
            console.log("User fetched:",data.user);
            console.log("Addresses fetched:",data.addresses);
        });
    }, [email]);

    const handleAddAddress = () => {
        navigate("/create-address");
    }

    return (
        <>
        <Nav />
            <div className="w-full min-h-screen bg-blue-600 p-5">
                <div className="w-full h-full bg-yellow-400 rounded-lg">
                    <div className="w-full h-max my-2 p-5">
                        <div className="w-full h-max">
                            <h1 className="text-3xl text-neutral-100">
                                Personal Details
                            </h1>
                        </div>
                        <div className="w-full h-max flex flex-col sm:flex-row p-5 gap-10">
                            <div className="w-40 h-max flex flex-col justify-center items-center gap-y-3">
                                <div className="w-full h-max text-2xl text-neutral-100 text-left">
                                    PICTURE
                                </div>
                        <img
                            src={personalDetails.avatarUrl 
                            ? `http://localhost:8000/${personalDetails.avatarUrl}`
                            : `https://cdn.vectorstock.com/i/500p/17/61/male-avatar-profile-picture-vector-10211761.jpg`}
                            alt="profile"
                            className="w-40 h-40 rounded-full"
                            onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop if fallback image fails
                            e.target.src = `https://cdn.vectorstock.com/i/500p/17/61/male-avatar-profile-picture-vector-10211761.jpg`;
                            }}
                        />
                            </div>
                            <div className="h-max md:flex-grow">
                                <div className="w-full h-max flex flex-col justify-center items-center gap-y-3">
                                    <div className="w-full h-max">
                                        <div className="text-2xl text-neutral-100 text-left">
                                            NAME
                                        </div>
                                        <div className="text-lg font-light text-neutral-100 text-left break-all">
                                            {personalDetails.name}
                                        </div>
                                    </div>
                                    <div className="w-full h-max">
                                        <div className="text-2xl text-neutral-100 text-left">
                                            EMAIL
                                        </div>
                                        <div className="text-lg font-light text-neutral-100 text-left break-all">
                                            {personalDetails.email}
                                        </div>
                                    </div>
                                    <div className="w-full h-max">
                                        <div className="text-2xl text-neutral-100 text-left">
                                            MOBILE
                                        </div>
                                        <div className="text-lg font-light text-neutral-100 text-left break-all">
                                            {personalDetails.phoneNumber}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="w-full h-max my-2 p-5">
                        <div className="w-full h-max">
                            <h1 className="text-3xl text-neutral-100">
                                Addresses
                            </h1>
                        </div>
                        <div className="w-full h-max p-5">
                            <button className="w-max px-3 py-2 bg-purple-600 text-neutral-100 rounded-md text-center hover:bg-neutral-100 hover:text-black transition-all duration-100"
                            onClick={handleAddAddress}>
                                Add Address
                            </button>
                        </div>
                        <div className="w-full h-max flex flex-col gap-5 p-5">
                            {addresses.length === 0 ? (
                                <div className="w-full h-max text-neutral-100 font-light text-left">
                                    No Addresses Found
                                </div>
                            ) : null}
                            {addresses.map((address, index) => (
                                <AddressCard key={index} {...address} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}