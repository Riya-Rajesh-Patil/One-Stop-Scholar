import styles from '../styles/Home.module.css'

function Scholarship(props) {
    
    return (        
        <ul className={styles.schApp} id={props.id}>
            <li><span>Name: </span><p>{props.name}</p></li>
            <li><span>Scholarship Sponsor: </span><p>{props.sponsor}</p></li>
            <li><span>Description: </span><p>{props.description}</p></li>
            <li><span>Application Deadline: </span><p>{props.deadline}</p></li>
            <li><span>Amount: </span><p>{props.amount}</p></li>
            <li><span>Criteria: </span><p>{props.criteria}</p></li>
            <li><span>Applicants: </span><p>{props.applicants}</p></li>
        </ul>

    )
}

export default Scholarship;