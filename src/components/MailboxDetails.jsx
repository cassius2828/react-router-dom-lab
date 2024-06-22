import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();

  const selectedMailbox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
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
      <div className="letters">
        <ul>
          {selectedLetters.map((letter, idx) => {
            return (
              <div key={letter.message + idx}>
                <h3>Letter # {idx + 1}</h3>
                <div className="letter-card">
                  <p>{letter.message}</p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default MailboxDetails;
