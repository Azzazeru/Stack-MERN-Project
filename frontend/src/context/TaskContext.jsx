import { createContext, useContext, useState } from 'react'
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from '../api/tasks'

const taskContext = createContext()

export const useTasks = () => {
    const context = useContext(taskContext)

    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider")
    } return context
}

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        const res = await getTasksRequest()
        setTasks(res.data)
    }

    const createTask = async (task) => {
        const res = await createTaskRequest(task)
    }

    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id)
            if (res.status === 204) setTasks(tasks.filter(task => task._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id)
            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <taskContext.Provider value={{ tasks, createTask, getTasks, deleteTask, getTask, updateTask }}>
            {children}
        </taskContext.Provider>
    )
}