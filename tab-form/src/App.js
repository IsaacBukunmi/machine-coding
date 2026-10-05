import "./styles.css";
import { useState } from 'react'
import Profile from './Profile.js'
import Interests from './Interests.js'
import Settings from './Settings.js'

export default function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [isSubmit, setIsSubmit] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    interests: [],
    theme: "dark"
  })

  const [errorData, setErrorData] = useState({
    name: "",
    email: "",
    age: "",
  })

  const validateForm = () => {
    const errors = {
      name: formData.name.trim().length > 2 ? "" : "Name must be more than 2 characters",
      email: /^\S+@\S+\.\S+$/.test(formData.email) ? "" : "Enter a valid email address",
      age: formData.age > 18 ? "" : "You must be 18+"
    }

    setErrorData(errors)

    return !Object.values(errors).some(Boolean)
  }

  const handleNext = () => {
    if(!validateForm()) return
    setActiveTab((prev) => prev + 1)
  }

  const tabs = [
    {
      title: "Profile",
      component: <Profile 
          formData={formData}
          setFormData={setFormData}
          errorData={errorData}
        />
    },
    {
      title: "Interests",
      component: <Interests 
        formData={formData}
        setFormData={setFormData}
      />
    },
    {
      title: "Settings",
      component: <Settings 
        formData={formData}
        setFormData={setFormData}
      />
    }
  ]

  return (
    <div>
      <div className="tabs-container">
        {
          tabs.map((tab, index) => {
            return(
              <div 
                key={tab.title} 
                className="tab-item"
                onClick={() => setActiveTab(index)}
              >
                  {tab.title}
              </div>
            )
          })
        }
      </div>
      <div className="tabs-content-container"> 
        {tabs[activeTab].component}
      </div>
      <button onClick={() => setActiveTab((prev) => prev - 1)} disabled={activeTab === 0}>Prev</button>
      { 
        activeTab !== tabs.length - 1 &&  
        <button onClick={handleNext}>Next</button>
      }
      { 
        activeTab === tabs.length - 1 && 
        <>
           <button onClick={() => setIsSubmit(true)}>Submit</button>
          { 
            isSubmit &&
              <div>
                <p>name: {formData.name}</p>
                <p>email: {formData.email}</p>
                <p>age: {formData.age}</p>
                <p>Interests</p>
                {
                  formData.interests.map(int => int)
                }
                <p>theme: {formData.theme}</p>
              </div>
            }
        </>
      }
    </div>
  );
}
