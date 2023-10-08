import "./App.css";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";
import Anaconda from "./components/Anaconda";
import Dragon from "./components/Dragon";
import Header from "./components/Header";
import {useState, createContext } from "react";


export const Context = createContext()
function App() {

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
        setPriorityValue(event.target.value);
    };
    const handleDescreptionChange = (event) => {
        setDescriptionValue(event.target.value);
    };

    const addElement = () => {
        if (inputValue.trim().length) {
            pushValue();
            setElements([...elements, inputValue]);
            setInputValue("");
            setPriorityValue("");
            setDescriptionValue("");
            closeModal(); // Очищаем поле ввода после добавления
        }
    };

    const pushValue = () => {
        const myObj = {
            name: inputValue,
            priority: priorityValue,
            description: descriptionValue,
        };
        ++myObj.id;

        setTaskValueArr([...taskValueArr, myObj]);
        console.log(myObj);
        console.log(taskValueArr);
    };


    return (
    <Context.Provider value={{openModal, isModalOpen, taskValueArr, closeModal, handleInputChange, handlePriorityChange, handleDescreptionChange, addElement, pushValue}}>
      <Header />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/anaconda" element={
            <Anaconda
                isModalOpen={isModalOpen}
                  inputValue={inputValue}
                priorityValue={priorityValue}
                descriptionValue={descriptionValue}
                taskValueArr={taskValueArr}

            />
        } />
        <Route path="/projects/dragon" element={
            <Dragon
                isModalOpen={isModalOpen}
                inputValue={inputValue}
                priorityValue={priorityValue}
                descriptionValue={descriptionValue}
                taskValueArr={taskValueArr}
            />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
