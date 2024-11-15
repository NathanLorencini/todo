import { Button } from "@rneui/themed/dist/Button";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "./services/supabase";

export default function App() {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = async (task: string) => {
    const { data, error } = await supabase
      .from("tasks")
      .insert({ task, completed: false });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Adicione uma nova tarefa</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui..."
          onChangeText={(text) => setNewTask(text)}
          value={newTask}
        ></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddTask(newTask)}
        >
          <Text style={styles.buttontext}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.task}>
          <Text style={(styles.textTask, styles.completed)}>Estudar React</Text>
          <Button title={"Concluir"}></Button>
          <Button title={"Excluir"}></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    color: "#333,",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttontext: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textTask: {
    flex: 1,
    fontSize: 18,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});
