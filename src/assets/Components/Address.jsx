import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://oasback.onrender.com/user/address", address).then((res)=>{
        // console.log(res)
        navigate("/address-details")
        
    }).catch((err)=>{
        console.log(err);
        
    })
    alert("Address Saved Successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={address.fullName}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={address.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={address.street}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={address.state}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={address.zip}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Address
        </button>
      </form>

    </div>
  );
};

export default Address;
