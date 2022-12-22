import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, Heading, HStack, Text, VStack } from "native-base";
import { useState } from "react";

export function Home() {
  const [groups, setGroups] = useState([
    "Costas",
    "Biceps",
    "Tríceps",
    "Ombro",
  ]);
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remana unilateral",
    "Levantamento terra",
  ]);
  const [groupSelected, setGroupSelected] = useState("Costas");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={(item) => (
            <Group
              name={item.item}
              isActive={groupSelected.toUpperCase() === item.item.toUpperCase()}
              onPress={() => setGroupSelected(item.item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            px: 8,
          }}
          my={10}
          maxH={10}
        />
      </HStack>

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercicios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard exercise={item} />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 20
          }}
        />
      </VStack>
    </VStack>
  );
}
