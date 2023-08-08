import React from "react";

const Not = () => {
  const styles = {
    background: "none",
    border: "none",
    padding: "15px 15px",
    borderRadius: "10px",
  };
  return (
    <div>
      <button style={styles} className="">
        <svg
          className="w-6 h-6 text-amber-400"
         
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Not;
