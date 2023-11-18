import styles from '../styles/ScholarshipFrom.module.css';
import { useState } from 'react';

export default function ScholarshipForm(props) {

    const [inputs, setInputs] = useState({sponsorEmail: props.email});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `http://localhost:8080/scholarships/`;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        };
        const res = await fetch(url,requestOptions);
        if(res.ok) {
            props.handleFormButton(true, inputs);
        }
    }

    return(
        <div className={styles.formContainer}>
            <form className={styles.scholarshipForm} onSubmit={handleSubmit}>
                <h3 className={styles.header}>Scholarship Form</h3>
                <div className={styles.inputElements}>
                    <label>Scholarship Name:</label>
                    <input 
                        type="text" 
                        name="scholarshipName"
                        value={inputs.scholarshipName || ""}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Scholarship Description:</label>
                    <input 
                        type="text" 
                        name="scholarshipDescription"
                        value={inputs.scholarshipDescription || ""}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Sponsor:</label>
                    <input 
                        type="text" 
                        name="scholarshipSponsor"
                        value={inputs.scholarshipSponsor || ""}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Scholarship Amount (USD):</label>
                    <input 
                        type="Number" 
                        name="scholarshipAmt"
                        value={inputs.scholarshipAmt || ""}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Application Deadline:</label>
                    <input 
                        type="date" 
                        name="scholarshipDeadline"
                        value={inputs.scholarshipDeadline || ""}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Application Requirements:</label>
                    <input 
                        type="text" 
                        name="scholarshipCriteria"
                        value={inputs.scholarshipCriteria || ""}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Number of Scholarships:</label>
                    <input 
                        type="text" 
                        name="scholarshipApplicants"
                        value={inputs.scholarshipApplicants || ""}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Country:</label>
                    <input 
                        type="text" 
                        name="country"
                        value={inputs.country || ""}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className={styles.saveButton}>
                    <input type="submit" value="Save" />
                </div>
            </form>
        </div>
    )
}