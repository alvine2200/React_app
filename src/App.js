import Todo from './components/Todo';


function App(){
    return (
        <div>
            <h1 className="page-title">My Todos</h1>
            <Todo text="First Topic"/>
            <Todo text="Second Topic"/>
            <Todo text="Third Topic" />

        </div>
    );
}

export default App;