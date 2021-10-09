import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
import {Button} from '../Components/Button';
import {SkillCard} from '../Components/SkillCard';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Renan</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={styles.subTitle}>My Skills:</Text>

      {mySkills.map(skill => (
        <SkillCard key={skill} skill={skill} />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#FFF',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 50,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
