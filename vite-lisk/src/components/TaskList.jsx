import React, { useState } from 'react'
import { useTaskListContext } from './TaskListContext';
import './componentsstyle.css'

export default function TaskList() {
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [editIndex, setEditIndex] = useState(null);

    const { items, addTask, deleteTask, updateTask } = useTaskListContext();

    

    const changeTitleInput = (e) => {
        if (e.target.value.length <= 20 ) {
            setTitleInput(e.target.value);
        };
    };

    const changeDescriptionInput = (e) => {
        if (e.target.value.length <= 40) {
            setDescriptionInput(e.target.value)
        };
      };

    const handleAddItem = () => {
        if (titleInput.trim() !== '' && descriptionInput.trim() !== '') {
          setItems([...items, { title: titleInput, description: descriptionInput }]);
          setTitleInput('');
          setDescriptionInput('');
        }
      }

    const toggleCompletion = (index) => {
        const updatedItems = [...items];
        updatedItems[index].completed = !updatedItems[index].completed;
        setItems(updatedItems);
    };
    const handleEditTask = (index) => {
        const taskEdit = items[index];
        setEditTitle(taskEdit.title);
        setEditDescription(taskEdit.description);
        setEditIndex(index);
    }

    const confirmEditTask = (index) => {
        if (editTitle.trim() !== '' && editDescription.trim() !== '') {
          const updatedItems = [...items];
          updatedItems[index].title = editTitle;
          updatedItems[index].description = editDescription;
          setItems(updatedItems);
          setEditTitle('');
          setEditDescription('');
          setEditIndex(null);
        }
      };

      
  return (
        <div className='box-content'>
        <input
            type="text"
            value={titleInput}
            onChange={changeTitleInput}
            placeholder="Titulo "
        />
        <input
            type="text"
            value={descriptionInput}
            onChange={changeDescriptionInput}
            placeholder="Descripcion"
        />
        <button className='add-boton' onClick={handleAddItem}>
            <i class="ri-add-circle-line"></i>
        </button>
        <ul className='lista'>
        {items.map((item, index) => (
            <li className='' key={index}style={{ backgroundColor: item.completed ? 'rgb(20, 92, 20)' : 'black' }}>
              {editIndex === index ? (
                <>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        placeholder="Editar Título"
                    />
                    <input
                        type="text"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        placeholder="Editar Descripción"
                    />
                    <button className='boton-editar-confirmar' onClick={() => confirmEditTask(index)}>
                        <i className="ri-check-line"></i>
                    </button>
                </>
               ) : (
                <>
                {item.title} <i className="ri-send-plane-2-fill"></i> {item.description}

                <button className='boton-doble' onClick={() => toggleCompletion(index)}>
                  {item.completed ? <i className="ri-close-line"></i> : <i className="ri-check-line"></i>}
                </button>

                <button className='boton-borrar' onClick={() => deleteTask(index)}>
                  <i className="ri-delete-bin-6-line"></i>
                </button>
                <button className='boton-editar' onClick={() => handleEditTask(index)}>
                  <i className="ri-edit-2-fill"></i>
                </button>
              </>
             )}
            </li>
            ))}
        </ul>
    </div>
    );
}

