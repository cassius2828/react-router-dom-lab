import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();

  const selectedMailbox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <>
      <h1>Mailbox {mailboxId}</h1>{" "}
      <div className="mail-box">
        <h2>Details</h2>
        <p>
          <span>Boxholder:</span>
          {selectedMailbox.boxholder}
        </p>
        <p>
          <span>Box Size:</span>
          {selectedMailbox.boxSize}
        </p>
      </div>
    </>
  );
};
export default MailboxDetails;
