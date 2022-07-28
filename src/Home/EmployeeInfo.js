import React from "react";

const Home = ({ onSubmit, onChange, query }) => {

    const handleChange = (e) => {
        onChange(e.target.id, e.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                * <input
                    // name="firstName"
                    // id="firstName"
                    // value={query.firstName}
                    placeholder="First name"
                    onChange={handleChange}
                    type="text"
                    required
                />
                * <input
                    // name="lastName"
                    // id="lastName"
                    // value={query.lName}
                    placeholder="Last name"
                    onChange={handleChange}
                    type="text"
                    required
                />
                * <input
                    // name="gender"
                    // id="gender"
                    // value={query.gender}
                    placeholder="Gender"
                    onChange={handleChange}
                    type="text"
                    required
                />
            </form>
            <button>Next</button>
        </div>
    )
}

export default Home;