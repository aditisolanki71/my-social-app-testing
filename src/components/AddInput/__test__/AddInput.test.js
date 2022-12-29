import { render, screen, fireEvent} from "@testing-library/react"
import AddInput from "../AddInput";

const MockedSetTodo = jest.fn();

describe("Add Input", () => {
    it("should render input elements",async () => {
        render(<AddInput 
                    todos={[]} 
                    //setTodos={() => {}}
                    setTodos={MockedSetTodo}
                />)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(inputElement).toBeInTheDocument();
    });

    it("should be able to type in input",async () => {
        render(<AddInput 
                    todos={[]} 
                    //setTodos={() => {}}
                    setTodos={MockedSetTodo}
                />)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.change(inputElement, { target: { value: "new task"} })
        expect(inputElement.value).toBe("new task");
    });

    it("should have empty input when add button is clicked",async () => {
        render(<AddInput 
                    todos={[]} 
                    //setTodos={() => {}}
                    setTodos={MockedSetTodo}
                />)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole("button", {name: /Add/i} )
        fireEvent.change(inputElement, { target: { value: "task2"} })
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe("");
    });
})
