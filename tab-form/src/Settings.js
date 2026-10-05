const Settings = ({ formData, setFormData }) => {
    const {theme} = formData

    const handleTheme = (e) => {
        setFormData((prev) => ({
            ...prev,
            theme: e.target.value
        }))
    }

    return(
        <div>
            {
                ['dark', 'light'].map((t) => {
                    return(
                        <label key={t}>
                            <input 
                                type="radio"
                                value={t}
                                name={"themeGroup"}
                                checked={theme === t}
                                onChange={handleTheme}
                            />
                            {t}
                        </label>
                    )
                })
            }
        </div>
    )
}

export default Settings