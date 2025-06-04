import { useState, useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const clickEvent = () => {
    const data = { name, message };
    setSubmittedData(data);
    setName("");
    setMessage("");
  };

  useEffect(() => {
    if (submittedData) {
      const timer = setTimeout(() => {
        setSubmittedData(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [submittedData]);

  return (
    <>
      <div className="display flex flex-col justify-center">
        <div className="display flex justify-center">
          <h1 className="font-3xl p-2 m-2 ">Contact Us :</h1>
          <input
            type="text"
            placeholder="name"
            className="border border-black m-3 rounded-md h-auto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="message"
            className="border border-black m-3 rounded-md h-auto"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            className="bg-gray-500 rounded-md py-2 px-4 m-3 hover:bg-gray-700 text-white"
            onClick={clickEvent}
          >
            Submit
          </button>
        </div>
        <div className="display flex justify-center">
          {submittedData && (
            <div className="mt-4 w-full max-w-md bg-yellow-300 p-4 rounded-lg shadow-md hover:bg-yellow-400 text-center">
              <p>
                <span className="font-medium">Name:</span> {submittedData.name}
              </p>
              <p>
                <span className="font-medium">Message:</span>{" "}
                {submittedData.message}
              </p>
              <br/>
              <h2 className="text-xl font-semibold mb-2">Data Submitted</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
