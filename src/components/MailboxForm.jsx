import { useState } from "react";
import { useNavigate } from "react-router-dom";

///////////////////////////
// Initial form data state
///////////////////////////
const initialFormData = {
  boxholder: "",
  boxSize: "default",
};


const MailboxForm = ({ addMailbox }) => {
  const [formData, setFormData] = useState(initialFormData);

  //   navigate programmatically
  const navigate = useNavigate();

  ///////////////////////////
  // Handle form change
  ///////////////////////////
  const handleFormChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  ///////////////////////////
  // Handle form submit
  ///////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    // ensure form is filled out
    if (!formData.boxholder || formData.boxSize === "default") {
      return alert("Please fill out all fields");
    }

    addMailbox(formData);
    navigate("/mailboxes");
  };

  return (
    <form>
      <label htmlFor="boxholder">Enter a Boxholder:</label>
      <input
        onChange={handleFormChange}
        value={formData.boxholder}
        name="boxholder"
        id="boxholder"
        placeholder="Boxholder name"
        type="text"
      />
      <label htmlFor="boxSize">Select a Box Size:</label>
      <select
        onChange={handleFormChange}
        value={formData.boxSize}
        name="boxSize"
        id="boxSize"
      >
        <option disabled value="default">
          select a size
        </option>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
      </select>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default MailboxForm;
