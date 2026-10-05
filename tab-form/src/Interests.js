
const Interests = ({formData, setFormData}) => {
    const availableInterests = ["cooking", "cycling", "gaming", "music"]
    const { interests } = formData
    const handleInterest = (e) => {
        const updatedInterest = e.target.checked ? [...interests, e.target.name] : interests.filter((int) => int !== e.target.name)
        setFormData((prev) => ({
            ...prev,
            interests: updatedInterest
        }))
    }

    console.log(formData)

    return(
        <div>
            {
                availableInterests.map((item) => {
                    return(
                        <>
                            <label for={item}>
                                <input 
                                    type="checkbox" 
                                    id={item} 
                                    name={item} 
                                    checked={interests.find((int) => int === item)}
                                    onChange={handleInterest}
                                />
                                {item}
                            </label>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Interests