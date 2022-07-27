import React, { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "리액트",
            body: "이게 맞냐",
            isDone: false,
        },
        {
            id: 2,
            title: "리액트",
            body: "너무 어렵다",
            isDone: true,
        },
    ]);

    return (
        <Layout>
            <Header />
            <Form setTodos={setTodos} todos={todos} />
            <List todos={todos} setTodos={setTodos} />
        </Layout>
    );
};

export default TodoList;