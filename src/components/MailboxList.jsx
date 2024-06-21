import { Link } from "react-router-dom";
const MailboxList = ({ mailboxes }) => {
  return (
    <div className="mailbox-list-container">
        <h1>Mailbox List</h1>
      <ul>
        {mailboxes?.map((mailbox) => {
          return (
            <li key={mailbox._id + "mailbox"}>
              <Link to={`/mailboxes/${mailbox._id}`}>
                {mailbox.boxholder}'s Mailbox (boxID: {mailbox._id})
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MailboxList;
