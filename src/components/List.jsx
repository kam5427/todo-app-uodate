import React, {useState} from 'react'
import Modal from './Modal';

function List() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [elements, setElements] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [priorityValue, setPriorityValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [taskValueArr, setTaskValueArr] = useState([]);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handlePriorityChange = (event) => {
        setPriorityValue(event.target.value)
    };
    const handleDescreptionChange = (event) => {
        setDescriptionValue(event.target.value)
    };
    


    const addElement = () => {

        if (inputValue.trim() !== '') {
            pushValue()
            setElements([...elements, inputValue]);
            setInputValue('');
            setPriorityValue('');
            setDescriptionValue('');
            closeModal()// Очищаем поле ввода после добавления
            }
        
        
    };
    
    
    
    const pushValue = () => {
        
        const myObj = {
            name: inputValue,
            priority: priorityValue,
            description:descriptionValue
        }
        ++myObj.id
        
        setTaskValueArr([...taskValueArr, myObj])
            console.log(myObj);
            console.log(taskValueArr);
    }   
    
    
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
                        {taskValueArr.map((i, index) => (
                            (taskValueArr.length !== 0) &&
                            <tbody key = {index}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{i.name}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                ))}
                    </table>
                    
                </div>
                
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <h2>Заголовок модального окна</h2>
                    {/*<label htmlFor="myInput">Название таска: </label>*/}
                    <form>
                        <fieldset>
                            <legend>Название таска:</legend>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Приоритет</legend>
                            <input
                                type="text"
                                value={priorityValue}
                                onChange={handlePriorityChange}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Вложенные файлы</legend>
                            <input
                                type="file"
                                onChange={handleInputChange}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Описание</legend>
                            <input
                                type="text"
                                value={descriptionValue}
                                onChange={handleDescreptionChange}
                            />
                        </fieldset>
                    </form>

                    <button  onClick={addElement } >Add</button>
                    <p>Содержимое модального окна</p>
                </Modal>
            </div>
        </div>
    )
}

export default List
