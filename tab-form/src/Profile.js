const Profile = ({formData, setFormData, errorData}) => {

    const {name, email, age} = formData

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <div>
            <div>
                <label for="name">Name</label> {" "}
                <input 
                    id="name" 
                    name="name" 
                    value={name} 
                    type="text"
                    onChange={handleChange}
                />
                <small>{errorData.name}</small>
            </div>
            <br />
            <div>
                <label for="email">Email</label> {" "}
                <input 
                    id="email" 
                    name="email" 
                    value={email} 
                    type="email"
                    onChange={handleChange}
                />
                <small>{errorData.email}</small>
            </div>
            <br />
            <div>
                <label for="age">Age</label> {" "}
                <input 
                    id="age" 
                    name="age" 
                    value={age} 
                    type="number"
                    onChange={handleChange}
                />
                <small>{errorData.age}</small>
            </div>
        </div>
    )
}

export default Profile