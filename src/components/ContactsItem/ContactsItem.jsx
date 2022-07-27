import styles from '../ContactsItem/ContactsItem.module.css'
export const ContactsItem=({ name, number, onDelete, id})=>{
return(
    <li className={styles.li}>
        <p className=''>{name}</p><p>{number}</p>
        <button type="button"
className={styles.btn}
        onClick={()=>onDelete(id)}
        >
         Delete
        </button >

    </li>
)
    
}
