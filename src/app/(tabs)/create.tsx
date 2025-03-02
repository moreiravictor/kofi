import { StyleSheet } from "react-native";

import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import {
  Photo,
  PostType,
  TopicType,
} from "@/src/requests/services/kofi/models/post";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import {
  Dropdown,
  DropdownInputProps,
  MultiSelectDropdown,
  Option,
} from "react-native-paper-dropdown";

export default function Create() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<PostType | undefined>();
  const [content, setContent] = useState("");
  const [topicType, setTopicType] = useState<TopicType | undefined>();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [topicsIds, setTopicsIds] = useState<string[]>([]);

  const postTypeOptions: Option[] = [
    { label: "Review", value: PostType.REVIEW },
    { label: "Comparativo", value: PostType.COMPARISON },
    { label: "Receita", value: PostType.RECIPE },
    { label: "Dica", value: PostType.TIP },
  ];

  const topicTypeOptions: Option[] = [
    { label: "Café", value: TopicType.COFFEE },
    { label: "Cafeteria", value: TopicType.CAFETERIA },
    { label: "Moedor", value: TopicType.GRINDER },
    { label: "Método de café", value: TopicType.BREWING_METHOD },
  ];

  const topics = [
    { label: "café dois irmãos", id: "123" },
    { label: "café five", id: "456" },
  ]; // TODO: in here there will be a query to search for topics paginated

  return (
    <ThemedView style={styles.backgoundContainer}>
      <ThemedText style={{ fontSize: 30, lineHeight: 30 }}>
        Criar Post
      </ThemedText>
      <ThemedView style={{ width: "100%", backgroundColor: "none", gap: 4 }}>
        <ThemedText style={{ fontSize: 16, lineHeight: 16 }}>Título</ThemedText>
        <TextInput
          mode="outlined"
          outlineColor="#8E5935"
          activeOutlineColor="#BF8634"
          style={{
            width: "100%",
            backgroundColor: "#E2D1C3",
            borderRadius: 10,
            height: 50,
            color: "#28170A",
          }}
          textColor="#28170A"
          theme={{ roundness: 10 }}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </ThemedView>
      <ThemedView style={{ width: "100%", backgroundColor: "none", gap: 4 }}>
        <ThemedText style={{ fontSize: 16, lineHeight: 16 }}>
          Tipo de Post
        </ThemedText>
        <Dropdown
          CustomDropdownInput={(props: DropdownInputProps) => (
            <TextInput
              mode="outlined"
              outlineColor="#8E5935"
              activeOutlineColor="#BF8634"
              placeholder={props.placeholder}
              theme={{ roundness: 10 }}
              style={{
                height: 50,
                width: "100%",
                backgroundColor: "#E2D1C3",
                borderRadius: 10,
              }}
            />
          )}
          menuContentStyle={{ backgroundColor: "#E2D1C3" }}
          hideMenuHeader
          value={type}
          options={postTypeOptions}
          onSelect={(option) => setType(option as PostType)}
        />
      </ThemedView>
      <ThemedView style={{ width: "100%", backgroundColor: "none", gap: 4 }}>
        <ThemedText style={{ fontSize: 16, lineHeight: 16 }}>
          Tópico(s)
        </ThemedText>
        <Dropdown
          CustomDropdownInput={(props: DropdownInputProps) => (
            <TextInput
              mode="outlined"
              outlineColor="#8E5935"
              activeOutlineColor="#BF8634"
              theme={{ roundness: 10 }}
              placeholder={props.placeholder}
              style={{
                height: 50,
                width: "100%",
                backgroundColor: "#E2D1C3",
                borderRadius: 10,
              }}
            />
          )}
          menuContentStyle={{ backgroundColor: "#E2D1C3" }}
          hideMenuHeader
          value={topicType}
          options={topicTypeOptions}
          onSelect={(option) => setTopicType(option as TopicType)}
        />
      </ThemedView>
      <ThemedView style={{ width: "100%", backgroundColor: "none", gap: 4 }}>
        <ThemedText style={{ fontSize: 16, lineHeight: 16 }}>
          Selecione os Tópico(s)
        </ThemedText>
        <MultiSelectDropdown
          disabled={topicType === undefined}
          CustomMultiSelectDropdownInput={(props: DropdownInputProps) => (
            <TextInput
              mode="outlined"
              outlineColor="#8E5935"
              activeOutlineColor="#BF8634"
              theme={{ roundness: 10 }}
              placeholder={props.placeholder}
              style={{
                height: 50,
                width: "100%",
                backgroundColor: "#E2D1C3",
                borderRadius: 10,
              }}
            />
          )}
          menuContentStyle={{ backgroundColor: "#E2D1C3" }}
          hideMenuHeader
          value={topicsIds}
          options={topics.map((topic) => ({
            label: topic.label,
            value: topic.id,
          }))}
          onSelect={(option) => setTopicsIds(option)}
        />
      </ThemedView>
      <ThemedView style={{ width: "100%", backgroundColor: "none", gap: 4 }}>
        <ThemedText style={{ fontSize: 16, lineHeight: 16 }}>
          Conteúdo
        </ThemedText>
        <TextInput
          mode="outlined"
          outlineColor="#8E5935"
          activeOutlineColor="#BF8634"
          multiline
          theme={{
            roundness: 10,
          }}
          style={{
            width: "100%",
            height: 150,
            backgroundColor: "#E2D1C3",
            borderRadius: 10,
          }}
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      </ThemedView>
      <ThemedView
        style={{
          backgroundColor: "none",
          // width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          borderRadius: 5,
          borderColor: "#E2D1C3",
          // borderWidth: 0.5,
          padding: 15,
          gap: 10,
        }}
      >
        <ThemedView
          style={{
            backgroundColor: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <ThemedView
            style={{
              alignSelf: "center",
              width: "auto",
              borderRadius: 5,
              borderColor: "#E2D1C3",
              borderWidth: 1,
              display: "flex",
              backgroundColor: "none",
              padding: 10,
            }}
          >
            <Ionicons name="images-outline" size={20} color="#E2D1C3" />
          </ThemedView>
          <ThemedView
            style={{
              alignSelf: "center",
              width: "auto",
              borderRadius: 5,
              borderColor: "#E2D1C3",
              borderWidth: 1,
              display: "flex",

              backgroundColor: "none",
              padding: 10,
            }}
          >
            <Feather name="camera" size={20} color="#E2D1C3" />
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <Button
        textColor="#e3d2c3"
        buttonColor="#33251C"
        mode="elevated"
        style={{ width: "60%" }}
      >
        Postar
      </Button>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  backgoundContainer: {
    flex: 1,
    display: "flex",
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: "#5B371D",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
