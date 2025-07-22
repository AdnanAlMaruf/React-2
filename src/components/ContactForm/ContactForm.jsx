import Button from "../Button/Button.jsx";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { useState } from "react";


const ContactForm = () => {
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[text,setText]=useState("");
const onSubmit =(event)=>{
  event.preventDefault();
  setName(event.target[0].value);
  setEmail(event.target[1].value);
  setText(event.target[2].value);

}

 

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button

            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button

          text="VIA CALL" icon={<IoCallSharp fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdMessage fontSize="24px" />}
        />
        <form onSubmit={onSubmit} action="">
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"/>
          </div>
          <div className=""style={{display:"flex",justifyContent:"end"}} >
            <Button text="Submit" />
          </div>
          <div className="">{name +" "+email+" "+text }</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="Contact Image" />
      </div>
    </section>
  );
};

export default ContactForm;
