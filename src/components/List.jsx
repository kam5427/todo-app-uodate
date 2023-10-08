import React,{ useContext } from "react";
import Modal from "./Modal";
import {Context} from "../App";

const List = ({ isModalOpen, inputValue, priorityValue, descriptionValue, taskValueArr}) => {
  const {
    openModal,
    closeModal,
    handleInputChange,
    handlePriorityChange,
    handleDescreptionChange,
    addElement,
    } = useContext(Context);

  return (
    <div>
      <h2>Anaconda to-do</h2>
      <div>
        <button onClick={openModal}>Добавить task</button>
        {/* {elements.map((element, index) => (
                    <li key={index}>Task: {element}</li>
                ))} */}

        <div>
          <table>
            <thead>
              <tr>
                <td>id</td>
                <td>ожидание</td>
                <td>разработка</td>
                <td>выполнен</td>
              </tr>
            </thead>
            {taskValueArr.map(
              (i, index) =>
                taskValueArr.length !== 0 && (
                  <tbody key={index}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{i.name}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                )
            )}
          </table>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Заголовок модального окна</h2>
          {/*<label htmlFor="myInput">Название таска: </label>*/}
          <form>
            <fieldset>
              <legend>Task Name:</legend>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
            </fieldset>
            <fieldset>
              <legend>Priority</legend>
              <input
                type="text"
                value={priorityValue}
                onChange={handlePriorityChange}
              />
            </fieldset>
            <fieldset>
              <legend>Attachments</legend>
              <input type="file" onChange={handleInputChange} />
            </fieldset>
            <fieldset>
              <legend>Description:</legend>
              <input
                type="text"
                value={descriptionValue}
                onChange={handleDescreptionChange}
              />
            </fieldset>
          </form>

          <button onClick={addElement}>Add</button>
          <p>Содержимое модального окна</p>
        </Modal>
      </div>
    </div>
  );
}

export default List;
