import React, { useState } from 'react';
import './style.css'

const Home = () => {
  const [inputs, setinputs] = useState({
    todo: '',
    date: '',
  });
  const [dataTable, setdataTable] = useState([]);
  const [editData, seteditData] = useState(false);
  const [editIndex, seteditIndex] = useState('')

  const changehandler = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const deleteHandler = (index) => {
    const dataFilter = dataTable.filter((item, i) => i !== index);
    setdataTable(dataFilter);
  };
  const editHandler = (index) => {
    const tempData = dataTable[index];
    setinputs({
      todo: tempData.todo,
      date: tempData.date,
    });
    seteditData(true);
    seteditIndex(index)
  };


  
        
   
  const submitHandler = (e) => {
    e.preventDefault();
  
    if (editIndex !== '') {
      // Editing an existing task
      const tempData = [...dataTable];
      tempData[editIndex] = { ...inputs };
      setdataTable(tempData);
      seteditData(false);
    } else {
      // Adding a new task
      setdataTable([...dataTable, inputs]);
    }
  
    // Clear input fields and reset editIndex
    setinputs({ todo: '', date: '' });
    seteditIndex('');
  };
  
  
  return (
    <div className='page'>
      <div className='container'>
        <h1>My To-Do List</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>ToDo Task </label>
            <input
              type='text'
              name='todo'
              onChange={changehandler}
              value={inputs.todo}
              placeholder='Enter Task'
              required
            />
          </div>
          <div>
            <label>ToDo Date </label>
            <input
              type='date'
              name='date'
              onChange={changehandler}
              value={inputs.date}
              placeholder='Enter Date'
              required
            />
          </div>
          <button className='submit-btn' type='submit'>{editData ? 'update' : 'add'}</button>
        </form>
      </div>
      <div className='list'>
        <table>
          <thead>
            <tr>
              <th>Todo Today</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((item, i) => (
              
              <tr>
                <td>{item.todo}</td>
                <td>{item.date}</td>

                <td>
                  <button className='edit-btn' onClick={() => editHandler(i)}>edit</button>
                </td>
                <td>
                  <button className='del-btn' onClick={() => deleteHandler(i)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;








//         <ul className="list" key={item.title}>
          

