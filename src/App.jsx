// src/App.jsx

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import { useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import LetterForm from "./components/LetterForm";

const initialMailBoxes = [
  {
    _id: 1,
    boxSize: "Small",
    boxholder: "Alex",
  },
  {
    _id: 2,
    boxSize: "Medium",
    boxholder: "Larry",
  },
  {
    _id: 3,
    boxSize: "Medium",
    boxholder: "Taylor",
  },
  {
    _id: 4,
    boxSize: "Large",
    boxholder: "Jordan",
  },
  {
    _id: 5,
    boxSize: "Small",
    boxholder: "Casey",
  },
];
const initialLetters = [
  {
    mailboxId: 1,
    recipient: "Alex",
    message: "Hello Alex, how are you?",
  },
  {
    mailboxId: 2,
    recipient: "Larry",
    message: "Hi Larry, don't forget about our meeting tomorrow.",
  },
  {
    mailboxId: 3,
    recipient: "Taylor",
    message: "Dear Taylor, happy birthday!",
  },
  {
    mailboxId: 4,
    recipient: "Jordan",
    message: "Hello Jordan, please review the attached document.",
  },
  {
    mailboxId: 5,
    recipient: "Casey",
    message: "Hi Casey, can we reschedule our appointment?",
  },
];
const App = () => {
  const [mailboxes, setMailBoxes] = useState(initialMailBoxes);
  const [letters, setLetters] = useState(initialLetters);

  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter]);
  };

  const addMailbox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailBoxes([...mailboxes, newMailbox]);
  };
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addMailbox={addMailbox} />}
        />{" "}
        <Route
          path="/new-letter"
          element={
            <ErrorBoundary>
              <LetterForm addLetter={addLetter} mailboxes={mailboxes} />
            </ErrorBoundary>
          }
        />{" "}
        <Route
          path="/mailboxes/:mailboxId"
          element={
            <ErrorBoundary>
              <MailboxDetails mailboxes={mailboxes} />
            </ErrorBoundary>
          }
        />
        <Route
          path="*"
          element={
            <h1>
              404 <br /> Path not found :(
            </h1>
          }
        />
      </Routes>
    </>
  );
};

export default App;
