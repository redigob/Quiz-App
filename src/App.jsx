import { Route, Routes } from "react-router-dom";
import Home from "./Home";
const App = () => {
    const questions = [
        {
            id: 1,
            question: "What does JSX stand for?",
            options: [
            "JavaScript XML",
            "Java Syntax Extension",
            "JavaScript Extension",
            "JSON XML"
            ],
            answer: "JavaScript XML"
        },
        {
            id: 2,
            question: "Which hook is used to manage state?",
            options: [
            "useEffect",
            "useState",
            "useData",
            "useHook"
            ],
            answer: "useState"
        },
        {
            id: 3,
            question: "Which method is commonly used to render a list?",
            options: [
            "filter()",
            "forEach()",
            "map()",
            "find()"
            ],
            answer: "map()"
        },
        {
            id: 4,
            question: "Which prop helps React identify items in a list?",
            options: [
            "id",
            "index",
            "key",
            "identifier"
            ],
            answer: "key"
        },
        {
            id: 5,
            question: "Which hook is used for side effects?",
            options: [
            "useState",
            "useEffect",
            "useSideEffect",
            "useAction"
            ],
            answer: "useEffect"
        }
        ];
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home questions={questions}/>}></Route>
            </Routes>
        </div>
    );
}
 
export default App;
