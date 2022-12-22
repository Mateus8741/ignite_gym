import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Heading, HStack, Image, Text, VStack, Icon } from "native-base";
import {Entypo} from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  exercise: string
};

export function ExerciseCard({ exercise, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          source={{ uri: "https://github.com/Mateus8741.png" }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="center"
        />

        <VStack flex={1}>
          <Heading color="white" fontSize="lg">
            {exercise}
          </Heading>
          <Text color="gray.200" fontSize="sm" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon 
            as={Entypo}
            name="chevron-thin-right"
            color="gray.300"
        />
      </HStack>
    </TouchableOpacity>
  );
}