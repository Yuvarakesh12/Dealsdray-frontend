// src/components/AllEmployees.js
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Navbar from '../Navbar';
import { IoIosAddCircle } from "react-icons/io";
import Loader from '../Loader/Laoader';

function AllEmployees() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        email: '',
        mobile_no: '',
        designation: '',
        gender: '',
        course: '',
        image: ''
    });
    const [currentId, setCurrentId] = useState(null); // Track the current employee being edited

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('http://localhost:5000/employees/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setEmployees(data);
            } catch (err) {
                console.error('Fetch error:', err);
                setError(err.message);
            } finally {
                // Simulate loading time
                setTimeout(() => {
                    setLoading(false);
                }, 1500); // 3 seconds
            }
        };

        fetchEmployees();
    }, []);

    const handleEdit = (employee) => {
        setNewEmployee(employee);
        setCurrentId(employee.id);
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/employees/${id}/`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete employee');
            }
            setEmployees(prev => prev.filter(employee => employee.id !== id));
        } catch (err) {
            console.error('Delete error:', err);
            setError(err.message);
        }
    };

    const handleAddOrUpdate = async (e) => {
        e.preventDefault();
        try {
            const method = currentId ? 'PUT' : 'POST';
            const url = currentId 
                ? `http://localhost:5000/updateemployee/${currentId}/` 
                : 'http://localhost:5000/addemployees/';

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEmployee)
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Failed to ${currentId ? 'update' : 'add'} employee: ${errorMessage}`);
            }

            const employeeData = await response.json();

            if (currentId) {
                setEmployees(prev => prev.map(emp => (emp.id === currentId ? employeeData : emp)));
            } else {
                setEmployees(prev => [...prev, employeeData]);
            }

            setNewEmployee({
                name: '',
                email: '',
                mobile_no: '',
                designation: '',
                gender: '',
                course: '',
                image: ''
            });
            setCurrentId(null);
            setIsModalOpen(false);
        } catch (err) {
            console.error('Add/Update error:', err);
            setError(err.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 p-5 min-h-screen">
                <h1>ALL EMPLOYEES</h1>
                <div className="flex justify-end mb-4">
                    <button 
                        onClick={() => {  
                            setIsModalOpen(true); 
                            setNewEmployee({ name: '', email: '', mobile_no: '', designation: '', gender: '', course: '', image: '' });
                            setCurrentId(null);
                        }} 
                        className="flex items-center bg-[#2A546D] text-white px-4 py-2 rounded"
                    >
                        <IoIosAddCircle className="text-2xl mr-2" />
                        Add
                    </button>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center h-64">
                        <Loader /> {/* Your Loader component */}
                    </div>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <table className="min-w-full bg-white rounded shadow">
                        <thead>
                            <tr className="bg-[#2A546D]">
                                <th className="py-2 px-4 text-white">ID</th>
                                <th className="py-2 px-4 text-white">Image</th>
                                <th className="py-2 px-4 text-white">Name</th>
                                <th className="py-2 px-4 text-white">Email</th>
                                <th className="py-2 px-4 text-white">Mobile No</th>
                                <th className="py-2 px-4 text-white">Designation</th>
                                <th className="py-2 px-4 text-white">Gender</th>
                                <th className="py-2 px-4 text-white">Course</th>
                                <th className="py-2 px-4 text-white">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <tr key={employee.id} className="border-b">
                                    <td className="py-2 px-4">{employee.id}</td>
                                    <td className="py-2 px-4">
                                        <img src={employee.image} alt="Employee" className="w-12 h-12 rounded" />
                                    </td>
                                    <td className="py-2 px-4">{employee.name}</td>
                                    <td className="py-2 px-4">{employee.email}</td>
                                    <td className="py-2 px-4">{employee.mobile_no}</td>
                                    <td className="py-2 px-4">{employee.designation}</td>
                                    <td className="py-2 px-4">{employee.gender}</td>
                                    <td className="py-2 px-4">{employee.course}</td>
                                    <td className="py-2 px-4">
                                        <button onClick={() => handleEdit(employee)} className="text-[#2A546D]">
                                            <FaEdit />
                                        </button>
                                        <button onClick={() => handleDelete(employee.id)} className="text-red-500 ml-2">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-5 rounded shadow-lg w-[60vw]">
                            <h2 className="text-xl mb-4">{currentId ? 'Edit Employee' : 'Add Employee'}</h2>
                            <form onSubmit={handleAddOrUpdate} className="grid grid-cols-2 gap-4">
                                <label className="block mb-2 text-[#2A546D]">
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                        value={newEmployee.name}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                                        required
                                        className="border border-[#2A546D] p-2 w-full rounded"
                                    />
                                </label>
                                <label className="block mb-2 text-[#2A546D]">
                                    Email:
                                    <input
                                        type="email"
                                        name="email"
                                        value={newEmployee.email}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                                        required
                                        className="border border-[#2A546D] p-2 w-full rounded"
                                    />
                                </label>
                                <label className="block mb-2 text-[#2A546D]">
                                    Mobile No:
                                    <input
                                        type="text"
                                        name="mobile_no"
                                        value={newEmployee.mobile_no}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, mobile_no: e.target.value })}
                                        required
                                        className="border border-[#2A546D] p-2 w-full rounded"
                                    />
                                </label>
                                <label className="block mb-2 text-[#2A546D]">
                                    Designation:
                                    <input
                                        type="text"
                                        name="designation"
                                        value={newEmployee.designation}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, designation: e.target.value })}
                                        required
                                        className="border border-[#2A546D] p-2 w-full rounded"
                                    />
                                </label>
                                <label className="block mb-2 text-[#2A546D]">
                                    Gender:
                                    <input
                                        type="text"
                                        name="gender"
                                        value={newEmployee.gender}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, gender: e.target.value })}
                                        required
                                        className="border border-[#2A546D] p-2 w-full rounded"
                                    />
                                </label>
                                <label className="block mb-2 text-[#2A546D]">
                                    Course:
                                    <input
                                        type="text"
                                        name="course"
                                        value={newEmployee.course}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, course: e.target.value })}
                                        required
                                        className="border border-[#2A546D] p-2 w-full rounded"
                                    />
                                </label>
                                <label className="block mb-4 text-[#2A546D]">
                                    Image URL:
                                    <input
                                        type="text"
                                        name="image"
                                        value={newEmployee.image}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.value })}
                                        required
                                        className="border border-[#2A546D] p-2 w-full rounded"
                                    />
                                </label>
                                <div className="flex col-span-2 justify-end">
                                    <button 
                                        type="submit" 
                                        className="bg-[#2A546D] text-white h-[30px] w-[120px] rounded mr-2"
                                    >
                                        {currentId ? 'Update' : 'Add'}
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => setIsModalOpen(false)} 
                                        className="bg-gray-300 text-gray-700 h-[30px] w-[120px] rounded"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default AllEmployees;
