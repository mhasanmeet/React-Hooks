import {useLocalStorage, useSessionStorage} from "./useStorage"

const StorageComponent = () => {
    const [name, setName, removeName] = useSessionStorage("name", "Mahmudul")
    const [age, setAge, removeAge] = useLocalStorage("age", 26)

  return (
    <div>
        <div>
            {name} - {age}
        </div>

        <button onClick={() => setName("Sakib")}>Set Name</button>
        <button onClick={() => setAge(40)}>Set Age</button>
        <button onClick={removeName}>Remove Name</button>
        <button onClick={removeAge}>Remove Age</button>
    </div>
  )
}

export default StorageComponent