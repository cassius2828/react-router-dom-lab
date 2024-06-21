import { useState } from "react";
import { useNavigate } from "react-router-dom";

///////////////////////////
// * Initial form data state
///////////////////////////
const initialFormData = {
  mailboxId: 0,
  recipient: "",
  message: "",
};

///////////////////////////
// * LetterForm component
///////////////////////////
const LetterForm = ({ addLetter, mailboxes }) => {
  const [formData, setFormData] = useState(initialFormData);

  //   navigate programmatically
  const navigate = useNavigate();

  ///////////////////////////
  // * Handle form change
  ///////////////////////////
  const handleFormChange = ({ target }) => {
    // further destructure vars used
    const { name, value } = target;
    // create callback so I can update fresh versions of state
    setFormData((prev) => {
      let updatedFormData = { ...prev, [name]: value };

      // if the form field that is changing is mailboxId, then do this logic to set the
      // recipient automatically
      if (name === "mailboxId") {
        // selects recipient based on id
        const selectedMailbox = mailboxes.find(
          (mailbox) => mailbox._id === Number(value)
        );
        // if there is a matching mailbox, updated the fresh state
        if (selectedMailbox) {
          updatedFormData.recipient = selectedMailbox.boxholder;
        }
      }
      // return the fresh state
      return updatedFormData;
    });
  };

  ///////////////////////////
  // * Handle form submit
  ///////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    // ensure form is filled out
    if (!formData.recipient || formData.message.length < 3) {
      return alert("Please fill out all fields");
    }

    addLetter(formData);
    // navigate to the users mailbox
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <form>
      <label htmlFor="mailboxId">Select a Mailbox:</label>
      <select
        onChange={(e) => {
          handleFormChange(e);
        }}
        value={formData.boxSize}
        name="mailboxId"
        id="mailboxId"
      >
        {mailboxes.map((mailbox) => {
          return (
            <option key={mailbox._id + " option"} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          );
        })}
      </select>
      <label htmlFor="recipient">Recipient:</label>
      <input
        value={formData.recipient}
        name="recipient"
        id="recipient"
        placeholder="Recipient name"
        type="text"
      />
      <label htmlFor="message">Message:</label>
      <input
        onChange={handleFormChange}
        value={formData.message}
        name="message"
        id="message"
        placeholder="Message"
        type="textarea"
      />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default LetterForm;

/*
! Docs say not to use useEffects when the trigger is an event listener, so I will
! implement this logic with callback functions instead of useEffect

  useEffect(() => {
    const setRecipientName = () => {
      const selectedMailbox = mailboxes.find(
        (mailbox) => mailbox._id === Number(formData.mailboxId)
      );

      if (selectedMailbox) {
        setFormData({ ...formData, recipient: selectedMailbox.boxholder });
      } else console.log("Error setting the recipient");
    };
    setRecipientName();
  }, [formData.mailboxId]);
  */
