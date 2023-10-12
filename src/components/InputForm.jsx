import React, { useState } from "react";

const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // inputに打ち込んだ文字
    console.log(inputText);

    // タスクを追加する
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    const inputText = e.target.value;
    setInputText(inputText);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="入力してください"
          onChange={handleChange}
          value={inputText}
        />
        <button>
          <i className="fa-regular fa-square-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default InputForm;
